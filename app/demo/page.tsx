"use client";

import HeroSplit from "@/components/mdb/components/blocks/HeroSplit";
import ShowcaseRow from "@/components/mdb/components/blocks/ShowcaseRow";
import FeatureGrid from "@/components/mdb/components/blocks/FeatureGrid";
import TestimonialRow from "@/components/mdb/components/blocks/TestimonialRow";
import PricingSection from "@/components/mdb/components/blocks/PricingSelection";
import CalloutBanner from "@/components/mdb/components/blocks/CalloutBanner";
import Footer from "@/components/mdb/components/layout/Footer";
import CTAButton from "@/components/mdb/components/inputs/CTAButton";
import FloatingCard from "@/components/mdb/components/ui/cards/FloatingCard";
import MetricCard from "@/components/mdb/components/ui/cards/MetricCard";
import { Divider } from "@/components/mdb/components/docs/Divider";
import Link from "next/link";

export default function DemoPage() {
  const handleCTAClick = () => {
    console.log("CTA button clicked!");
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 space-y-12">
      <HeroSplit
        title="Build Beautifully with shadyt-ui"
        subtitle="Reusable components, polished blocks, and scalable structure — ready to launch."
        media={
          <img
            src="/cardex1.png"
            alt="Component Preview"
            className="rounded-xl shadow-xl w-full max-w-md"
          />
        }
      >
        <Link href="/docs">
          <CTAButton glow={true} size="md" variant="ghost" className="mt-4">
            Explore the Documentation
          </CTAButton>
        </Link>
        <CTAButton
          size="md"
          variant="primary"
          className="mt-4"
          link={{ href: "/demo/forms", target: "_self" }}
          glow={true}
        >
          Demo Components
        </CTAButton>
      </HeroSplit>
      <Divider className=" w-full" />
      <FeatureGrid
        title="What’s Included"
        subtitle="Everything you need to go from concept to production UI."
        features={[
          {
            title: "Component Primitives",
            description:
              "Input fields, cards, content helpers, and layout containers.",
            icon: <span>🧩</span>,
          },
          {
            title: "Responsive Layout Blocks",
            description: "Hero, pricing, , feature sections and more.",
            icon: <span>🖼️</span>,
          },
          {
            title: "Tailwind Preset + Tokens",
            description:
              "Built-in design system via custom colors and spacing.",
            icon: <span>🎨</span>,
          },
        ]}
        align="center"
        columns={3}
      />
      <Divider className=" w-full" />

      <ShowcaseRow
        title="Showcase Components"
        subtitle="Explore cards, metrics, and animated wrappers."
        className="justify-items-center"
        columns={2}
        align="center"
        cards={[
          <FloatingCard
            key="card-1"
            className="bg-white/5 flex-col text-white p-6 mx-auto"
          >
            <h3 className="text-lg font-semibold mb-1">FloatingCard</h3>
            <p className="text-sm text-white/70">
              Tactile and hover-responsive UI wrapper.
            </p>
          </FloatingCard>,
          <MetricCard
            key="card-2"
            label="Users"
            value="1.2M"
            className="text-white"
          />,
        ]}
      />

      <TestimonialRow
        title="Trusted by Builders"
        subtitle="Used across startups, tools, and internal dashboards."
        className="flex flex-col"
        testimonials={[
          {
            quote: "This library made my MVP 2x faster to build and ship.",
            name: "Riley H.",
            role: "Founder",
            avatarUrl: "/avatars/person4.jpg",
          },
          {
            quote: "Exactly the right mix of customizable and ready-to-go.",
            name: "Mina R.",
            role: "Full Stack Dev",
            company: "Launchlayer",
            avatarUrl: "/avatars/person.jpg",
          },
          {
            quote: "The design system is a game-changer for our team.",
            name: "Ava L.",
            role: "Designer",
            company: "Designify",
            avatarUrl: "/avatars/person1.jpg",
          },
        ]}
      />

      <PricingSection
        title="Plans That Fit Your Flow"
        subtitle="Start free and scale your UI needs as you grow."
        plans={[
          {
            title: "Open Source",
            description: "MIT licensed and community-backed.",
            features: ["Free forever", "Full source", "Tailwind preset"],
            icon: (
              <img
                src="/icons/shadyt.ico"
                className="rounded-lg"
                alt="MIT"
                width={24}
                height={24}
              />
            ),
          },
          {
            title: "Pro Add-ons",
            description: "For teams building custom SaaS.",
            glow: true,
            features: [
              "Advanced components",
              "Branded variants",
              "Commercial license",
            ],
          },

          {
            title: "Enterprise",
            description: "Custom solutions for large teams.",
            features: [
              "Dedicated support",
              "Custom tokens",
              "Tailored components",
            ],
          },
        ]}
      />
      <Divider className=" w-full" />

      <CalloutBanner
        title="Start Building Now"
        subtitle="Copy, customize, and launch with confidence."
        action={
          <CTAButton
            size="lg"
            variant="secondary"
            className="cta-bottom"
            onClick={handleCTAClick}
            glow
            link={{
              href: "https://github.com/Cstannahill/shadyt-ui-demo",
              target: "_blank",
              rel: "noopener noreferrer",
            }}
          >
            View GitHub
          </CTAButton>
        }
      />

      {/* <Footer
        brand={<span className="font-mono text-brand">shadyt-ui</span>}
        links={[
          { label: "Docs", href: "/docs" },
          { label: "GitHub", href: "https://github.com/Cstannahill" },
          { label: "License", href: "/license" },
        ]}
        copyright="2025 Christian Tannahill"
      /> */}
    </main>
  );
}
