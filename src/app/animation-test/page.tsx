import { AnimationTest } from "@/components/animation/AnimationTest";
import { Button } from "@/components/ui/button";
import { createPageMetadata } from "@/lib/site";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = createPageMetadata({
  title: "Interactive Web Component Playground | Cord Palmer",
  description:
    "Explore custom animated website components, ecommerce UX patterns, conversion-focused action docks, product configurators, and SEO-friendly React interface examples.",
  path: "/animation-test",
});

export default function AnimationTestPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-12 sm:py-16">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-[0.72rem] font-semibold tracking-[0.34em] text-[color:var(--hero-kicker)] uppercase">
          Motion Systems
        </p>
        <h1 className="text-foreground mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          Interactive Component Playground
        </h1>
        <p className="text-muted-foreground mt-4 text-lg leading-8">
          A working menu of tactile, animated interface patterns for premium product pages,
          ecommerce flows, service sections, and conversion moments.
        </p>
      </div>

      <AnimationTest />

      <div className="mt-10 flex justify-center">
        <Button asChild variant="outline">
          <Link href="/">
            <ArrowLeft />
            Back Home
          </Link>
        </Button>
      </div>
    </section>
  );
}
