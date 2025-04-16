"use client";

import HeroSplit from "@/components/mdb/components/blocks/HeroSplit";
import FeatureGrid from "@/components/mdb/components/blocks/FeatureGrid";
import TestimonialRow from "@/components/mdb/components/blocks/TestimonialRow";
import PricingSection from "@/components/mdb/components/blocks/PricingSelection";
import CalloutBanner from "@/components/mdb/components/blocks/CalloutBanner";
import Footer from "@/components/mdb/components/layout/Footer";
import CTAButton from "@/components/mdb/components/inputs/CTAButton";
import { Divider } from "@/components/mdb/components/docs/Divider";

export default function BlocksDemoPage() {
  return (
    <div className="space-y-24">
      <section>
        <h2 className="text-2xl text-center font-bold mb-6">HeroSplit</h2>
        <HeroSplit
          title="Launch faster with layout blocks"
          subtitle="Plug & play blocks for modern landing pages"
          media={
            <img
              src="/ororo1.png"
              alt="UI preview"
              className="rounded-lg shadow-lg w-full max-w-md"
            />
          }
        >
          <CTAButton glow>Start Building</CTAButton>
        </HeroSplit>
      </section>
      <Divider className="my-12 mb-4" />
      <section>
        <h2 className="text-2xl text-center font-bold mb-0">FeatureGrid</h2>
        <FeatureGrid
          align="center"
          title="What You Get"
          subtitle="All layout blocks are reusable, responsive, and easily themed."
          columns={3}
          features={[
            {
              title: "Hero + Media",
              description: "Draw attention to your product’s best angle.",
              icon: <span>🧱</span>,
            },
            {
              title: "Pricing Tiers",
              description: "Showcase flexible plans with clear comparison.",
              icon: <span>💵</span>,
            },
            {
              title: "Callouts + CTAs",
              description: "Prompt action with stylized banners and buttons.",
              icon: <span>📣</span>,
            },
          ]}
        />
      </section>
      <Divider className="my-12 mb-4" />
      <section>
        <h2 className="text-2xl text-center font-bold mb-0 mt-0">
          TestimonialsRow
        </h2>
        <TestimonialRow
          title="Trusted by Developers"
          subtitle="Used by creators, founders, and engineers"
          testimonials={[
            {
              quote: "It just works. Clean defaults, great flexibility.",
              name: "Zoe Rivera",
              role: "Indie Hacker",
              avatarUrl: "/avatars/person1.jpg",
            },
            {
              quote: "I use these sections in every client build now.",
              name: "Liam J.",
              role: "Freelancer",
              avatarUrl: "/avatars/person.jpg",
            },
          ]}
        />
      </section>
      <Divider className="my-12" />
      <section>
        <h2 className="text-2xl text-center font-bold mb-6">PricingSection</h2>
        <PricingSection
          title="Choose Your Plan"
          subtitle="Simple pricing built to scale"
          plans={[
            {
              title: "Free",
              description: "Open source, forever",
              features: [
                "All layout blocks",
                "MIT License",
                "Community Support",
              ],
              glow: true,
            },
            {
              title: "Pro",
              description: "For teams building polished apps",
              features: [
                "Commercial license",
                "Branded theming",
                "Priority support",
              ],
            },
          ]}
        />
      </section>
      <Divider className="my-12" />
      <section>
        <h2 className="text-2xl text-center font-bold mb-6">
          CalloutBanner + Footer
        </h2>
        <CalloutBanner
          title="Start building beautiful pages"
          subtitle="Use Tailwind + your own branding, powered by this layout library."
          action={<CTAButton glow>Try It Free</CTAButton>}
        />
      </section>
    </div>
  );
}
