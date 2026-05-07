"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Projects", href: "/projects" },
  { label: "Component Playground", href: "/animation-test" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

type Theme = "dark" | "light";

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

type NavLinkProps = {
  href: string;
  label: string;
  pathname: string;
  onClick?: () => void;
  mobile?: boolean;
};

type HeaderProps = {
  initialTheme: Theme;
};

function NavLink({ href, label, pathname, onClick, mobile = false }: NavLinkProps) {
  const isActive = isActivePath(pathname, href);

  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "focus-visible:ring-ring rounded-lg outline-none transition-colors focus-visible:ring-2 focus-visible:ring-offset-2",
        mobile
          ? "hover:bg-muted block min-h-11 rounded-xl px-4 py-3 text-base font-medium"
          : "hover:text-foreground text-sm font-medium",
        isActive
          ? "text-foreground underline decoration-2 underline-offset-8"
          : "text-muted-foreground"
      )}
    >
      {label}
    </Link>
  );
}

export function Header({ initialTheme }: HeaderProps) {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>(initialTheme);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme");
    const nextTheme = storedTheme === "light" || storedTheme === "dark" ? storedTheme : initialTheme;

    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    window.localStorage.setItem("theme", nextTheme);
    document.cookie = `theme=${nextTheme}; Path=/; Max-Age=31536000; SameSite=Lax`;

    if (nextTheme === theme) {
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      setTheme(nextTheme);
    });

    return () => window.cancelAnimationFrame(frame);
  }, [initialTheme, theme]);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  function handleThemeToggle() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    window.localStorage.setItem("theme", nextTheme);
    document.cookie = `theme=${nextTheme}; Path=/; Max-Age=31536000; SameSite=Lax`;
    setTheme(nextTheme);
  }

  return (
    <motion.header
      initial={prefersReducedMotion ? false : { opacity: 0, y: -20 }}
      animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="border-border/50 bg-background/78 supports-[backdrop-filter]:bg-background/60 fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl"
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-foreground focus-visible:ring-ring rounded-md text-base font-semibold tracking-[0.02em] outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
        >
          Cord Palmer
        </Link>

        <div className="flex items-center gap-2">
          <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href} label={item.label} pathname={pathname} />
            ))}
          </nav>

          <Button
            type="button"
            variant="outline"
            size="sm"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            onClick={handleThemeToggle}
          >
            {theme === "dark" ? <Sun /> : <Moon />}
            {theme === "dark" ? "Light" : "Dark"}
          </Button>

          <Button
            type="button"
            variant="outline"
            size="icon-sm"
            className="md:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsMenuOpen((value) => !value)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      <div
        className={cn(
          "md:hidden",
          isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
      >
        <button
          type="button"
          aria-label="Close navigation overlay"
          className={cn(
            "fixed inset-0 top-16 bg-black/30 transition-opacity",
            isMenuOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setIsMenuOpen(false)}
        />
        <div
          id="mobile-navigation"
          className={cn(
            "bg-background border-border fixed top-16 right-0 left-0 z-50 border-b px-6 py-5 shadow-lg transition-all duration-200",
            isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          )}
        >
          <nav aria-label="Mobile primary" className="flex flex-col gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                label={item.label}
                pathname={pathname}
                onClick={() => setIsMenuOpen(false)}
                mobile
              />
            ))}
          </nav>
        </div>
      </div>
    </motion.header>
  );
}
