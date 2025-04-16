"use client";

import FloatingCard from "@/components/mdb/components/ui/cards/FloatingCard";
import MetricCard from "@/components/mdb/components/ui/cards/MetricCard";
import TestimonialCard from "@/components/mdb/components/ui/cards/TestimonialCard";
import SpotlightCard from "@/components/mdb/components/ui/cards/SpotlightCard";
import ComparisonCard from "@/components/mdb/components/ui/cards/ComparisonCard";
import { ComparisonCardProps } from "@/components/mdb/components/ui/cards/ComparisonCard";
import StackedFeatureCard from "@/components/mdb/components/ui/cards/StackedFeatureCard";
import { Divider } from "@/components/mdb/components/docs/Divider";
import Image from "next/image";

export default function CardsDemoPage() {
  return (
    <div className="space-y-16">
      <section>
        <h2 className="text-2xl text-center font-bold mb-4">ComparisonCard</h2>{" "}
        <Divider />
        <div className="grid  sm:grid-cols-2 md:grid-cols-3 gap-4 ">
          <ComparisonCard
            title="Vite vs Webpack"
            labelA="Vite"
            labelB="Webpack"
            iconA={<img src="/icons/vite.svg" className="h-10" />}
            iconB={<img src="/icons/webpack.svg" className="h-10" />}
            sideA={
              <ul className="target-for-font">
                <li>Instant cold starts with native ESM</li>
                <li>Lightning-fast HMR via esbuild</li>
                <li>Modern DX out of the box (TS, JSX, env)</li>
                <li>Optimized for frontend frameworks</li>
              </ul>
            }
            sideB={
              <ul className="target-for-font">
                <li>Battle-tested with massive ecosystem</li>
                <li>Supports both frontend and backend tooling</li>
                <li>Heavier config, slower cold builds</li>
                <li>Flexible but requires more setup</li>
              </ul>
            }
            highlight
            className="bg-[#001f2e] text-white m-3"
          />
          <ComparisonCard
            title="NextJS vs Remix"
            labelA="NextJS"
            labelB="Remix"
            iconA={<img src="/tech/next.svg" className="h-10 dark:invert" />}
            iconB={<img src="/tech/remix2.svg" className="h-10" />}
            sideA={
              <ul className="target-for-font">
                <li>Built-in API routes and file-based routing</li>
                <li>Edge-ready with Vercel-first integration</li>
                <li>Flexible SSR/ISR/SSG strategies</li>
                <li>Massive ecosystem & community</li>
              </ul>
            }
            sideB={
              <ul className="target-for-font">
                <li>Native web standards and streaming-first</li>
                <li>Progressive enhancements by design</li>
                <li>Strong data handling and nested routes</li>
                <li>More opinionated but less boilerplate</li>
              </ul>
            }
            highlight
            className="bg-[#001f2e] text-white m-3"
          />
          <ComparisonCard
            title="Node.js vs .NET"
            labelA="Node.js"
            labelB=".NET"
            iconA={<img src="/tech/node.svg" className="h-10 item-scenter" />}
            iconB={<img src="/tech/dotnet.svg" className="h-10" />}
            sideA={
              <ul className="target-for-font">
                <li>JavaScript everywhere (frontend + backend)</li>
                <li>Massive NPM ecosystem</li>
                <li>Non-blocking, event-driven architecture</li>
                <li>Excellent for APIs, real-time apps</li>
              </ul>
            }
            sideB={
              <ul className="target-for-font">
                <li>Strongly typed with C# and .NET runtime</li>
                <li>Superior performance for enterprise workloads</li>
                <li>Rich tooling via Visual Studio</li>
                <li>Well-suited for large, scalable systems</li>
              </ul>
            }
            highlight
            className="bg-[#001f2e] text-white m-3"
          />
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-center mb-4">FloatingCard</h2>
        <Divider className="w-full m-0 p-0" />
        <div className="grid   sm:grid-cols-2 md:grid-cols-3 gap-6">
          <FloatingCard className="bg-white/5 p-6 m-3 text-white">
            <h3 className="text-lg font-bold">AI Task Planner</h3>
            <p className="text-sm opacity-80 mt-1">
              Automatically organize your daily priorities using smart context
              awareness, deadlines, and work habits.
            </p>
          </FloatingCard>

          <FloatingCard className="bg-white/5 p-6 m-3 text-white">
            <h3 className="text-lg font-bold">Developer Mode</h3>
            <p className="text-sm opacity-80 mt-1">
              Gain deeper control with enhanced debugging tools, sandbox
              environments, and real-time logging for rapid iteration.
            </p>
          </FloatingCard>

          <FloatingCard className="bg-white/5 p-6 m-3 text-white">
            <h3 className="text-lg font-bold">Crafted for Devs</h3>
            <p className="text-sm opacity-80 mt-1">
              Type-safe props, intelligent defaults, and full customizability.
              Spend less time configuring and more time building.
            </p>
          </FloatingCard>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-center mb-4">MetricCard</h2>{" "}
        <Divider />
        <div className="grid   sm:grid-cols-2 md:grid-cols-3 gap-6">
          <MetricCard className="m-3" label="Total Users" value="4.2K" />
          <MetricCard
            className="m-3"
            label="Revenue"
            value="$18,904"
            trend="+12%"
          />
          <MetricCard className="m-3" label="Growth Rate" value="+ 12% " />
        </div>
      </section>

      <section>
        <h2 className="text-2xl text-center font-bold mb-4">TestimonialCard</h2>{" "}
        <Divider />
        <div className="grid   sm:grid-cols-2 md:grid-cols-3 gap-6">
          <TestimonialCard
            quote="This UI kit saved me so much time and still looks amazing."
            name="Taylor B."
            className="m-3"
            role="Product Designer"
            avatarUrl="/avatars/person4.jpg"
          />
          <TestimonialCard
            quote="Everything just worked. I barely had to tweak anything to fit our brand."
            name="Rina K."
            role="Frontend Engineer"
            avatarUrl="/avatars/person1.jpg"
            className="m-3"
          />
          <TestimonialCard
            quote="I’ve used a lot of UI libraries — this one actually feels crafted, not just thrown together."
            name="Malik J."
            role="Full Stack Developer"
            avatarUrl="/avatars/person.jpg"
            className="m-3"
          />
        </div>
      </section>

      <section>
        <h2 className="text-2xl text-center font-bold mb-4">SpotlightCard</h2>{" "}
        <Divider />
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          <SpotlightCard
            className="m-3 bg-linear-to-r from-gray-800 via-blue-700 to-gray-900"
            title="Elegant Layouts"
            subtitle="Crafted with care for a seamless experience."
            media={
              <Image
                src="/carte-analytics2.png"
                height={700}
                width={700}
                alt="Spotlight"
              />
            }
          />
          <SpotlightCard
            glowColor="#3a3a3dc1"
            className="m-3 bg-[url('/textures/paper-dark2.jpg')] bg-cover bg-stone bg-center"
            title="Customizable Components"
            subtitle="Override styles, structure, and behavior with ease."
            media={
              <div className="flex items-center justify-center mt-15 rounded-full bg-gradient-to-br from-stone-200 to-slate-500">
                <img
                  src="/settings.svg"
                  className="w-15 h-15"
                  alt="Customize Icon"
                />
              </div>
            }
          />
          <SpotlightCard
            glowColor="#3a3a3dc1"
            className="m-3 bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90%"
            title="Developer-First Design"
            subtitle="Built with strong defaults and extendability in mind."
            media={
              <div className="bg-zinc-800 font-mono text-sm p-4 rounded-md w-full max-w-md shadow-inner">
                <code>
                  {`<Button variant="ghost" size="lg">Get Started</Button>`}
                </code>
              </div>
            }
          />
        </div>
      </section>

      <section>
        <h2 className="text-2xl text-center font-bold mb-4">
          StackedFeatureCard
        </h2>{" "}
        <Divider />
        <div className="grid   sm:grid-cols-2 md:grid-cols-3 gap-6">
          <StackedFeatureCard
            title="Starter Plan"
            className="m-3"
            description="Get started with the essentials"
            features={["1 Project", "Community Access", "Email Support"]}
            glow={false}
          />

          <StackedFeatureCard
            title="Pro Plan"
            className="m-3"
            description="Everything you need to scale"
            features={[
              "Unlimited Projects",
              "Theming Support",
              "Priority Support",
            ]}
            glow={true}
          />
          <StackedFeatureCard
            title="Enterprise Plan"
            className="m-3"
            description="Custom solutions for large teams"
            features={[
              "Unlimited Projects & Teams",
              "Dedicated Success Manager",
              "Custom Integrations",
              "24/7 Premium Support",
            ]}
            glow={true}
          />
        </div>
      </section>
    </div>
  );
}
