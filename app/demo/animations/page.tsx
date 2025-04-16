"use client";

import FadeIn from "@/components/mdb/components/animations/FadeIn";
import ScrollReveal from "@/components/mdb/components/animations/ScrollReveal";
import StaggerGroup from "@/components/mdb/components/animations/StaggerGroup";
import SlideIn from "@/components/mdb/components/animations/SlideIn";
import ScaleOnHover from "@/components/mdb/components/animations/ScaleOnHover";
import GlowPulse from "@/components/mdb/components/overlays/GlowPulse";
import ParallaxLayer from "@/components/mdb/components/animations/ParalaxLayer";
import FloatingCard from "@/components/mdb/components/ui/cards/FloatingCard";

export default function AnimationsDemoPage() {
  return (
    <div className="space-y-20">
      <section>
        <h2 className="text-2xl font-bold mb-4">FadeIn</h2>
        <FadeIn>
          <FloatingCard className="bg-white/5 p-6 text-white max-w-md">
            <h3 className="text-lg font-bold">Fade In</h3>
            <p className="text-sm opacity-80 mt-1">
              This card fades in when mounted.
            </p>
          </FloatingCard>
        </FadeIn>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">ScrollReveal</h2>
        <ScrollReveal>
          <FloatingCard className="bg-white/5 p-6 text-white max-w-md">
            <h3 className="text-lg font-bold">Scroll Reveal</h3>
            <p className="text-sm opacity-80 mt-1">
              Visible when scrolled into view.
            </p>
          </FloatingCard>
        </ScrollReveal>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">StaggerGroup</h2>
        <StaggerGroup>
          {[...Array(3)].map((_, i) => (
            <FloatingCard
              key={i}
              className="bg-white/5 p-6 text-white max-w-sm"
            >
              <h4 className="text-md font-semibold">Card {i + 1}</h4>
              <p className="text-sm opacity-70">Staggered appearance</p>
            </FloatingCard>
          ))}
        </StaggerGroup>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">SlideIn</h2>
        <SlideIn direction="left">
          <FloatingCard className="bg-white/5 p-6 text-white max-w-md">
            <h3 className="text-lg font-bold">Slide Left</h3>
            <p className="text-sm opacity-80 mt-1">Content slides into view.</p>
          </FloatingCard>
        </SlideIn>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">ScaleOnHover</h2>
        <ScaleOnHover glowColor="#00ED64" scaleAmount={1.05} shadow>
          <FloatingCard className="bg-brand-dark p-6 text-white">
            <h3 className="text-lg font-bold">Hover Me</h3>
            <p className="text-sm text-white/70">Scales and glows on hover.</p>
          </FloatingCard>
        </ScaleOnHover>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">GlowPulse</h2>
        <GlowPulse color="#00ED64">
          <FloatingCard className="bg-white/5 p-6 text-white">
            <h3 className="text-lg font-bold">Pulsing</h3>
            <p className="text-sm text-white/70">
              Background glow pulses softly.
            </p>
          </FloatingCard>
        </GlowPulse>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">ParallaxLayer</h2>
        <div className="relative h-[300px] overflow-hidden bg-gradient-to-b from-brand-dark to-black">
          <ParallaxLayer
            speed={0.5}
            className="absolute top-12 left-8 text-5xl"
          >
            🐉
          </ParallaxLayer>
          <ParallaxLayer
            speed={0.15}
            className="absolute bottom-10 right-12 text-3xl"
          >
            🌕
          </ParallaxLayer>
          <div className="absolute bottom-4 left-4 text-white opacity-60">
            Scroll to feel parallax
          </div>
        </div>
      </section>
    </div>
  );
}
