import type { Metadata } from "next";
import { AnimationProvider } from "@/components/animation/AnimationProvider";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { siteConfig } from "@/lib/site";
import { SkipLink } from "@/components/layout/SkipLink";
import { cookies } from "next/headers";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: siteConfig.metadataBase,
  title: siteConfig.title,
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    type: "website",
    url: "/",
    images: [
      {
        url: siteConfig.defaultOgImage,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.defaultOgImage],
  },
  alternates: {
    canonical: "/",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const storedTheme = cookieStore.get("theme")?.value;
  const theme = storedTheme === "light" ? "light" : "dark";

  return (
    <html
      lang="en"
      className={`${theme === "dark" ? "dark " : ""}h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="site-shell bg-background text-foreground min-h-full">
        <AnimationProvider>
          <SkipLink />
          <Header initialTheme={theme} />
          <main id="main-content" className="min-h-[calc(100vh-8rem)] pt-16">
            {children}
          </main>
          <Footer />
        </AnimationProvider>
      </body>
    </html>
  );
}
