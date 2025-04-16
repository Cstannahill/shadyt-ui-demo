---

## 📘 `README.md`

```md
# 🧱 shadyt-ui/mdb

A vivid, production-ready React + Tailwind UI library built with **TypeScript**, **Next.js**, and **modern design principles**.

Designed for builders who want expressive layout blocks, feature-rich UI components, and a vibrant aesthetic — inspired by MongoDB’s paper-rich visual feel.

> This is part of a modular system: `shadyt-ui/*`  
> More themes coming soon (e.g. `glass`, `dev`, `shadyt-ui/dark`)

---

## ✨ Features

- 🧩 50+ components across forms, cards, layout, navigation, animations
- 🎨 Design token system via Tailwind + `shadyt-ui/mdb/tailwind.preset`
- 💎 Polished defaults, glowing accents, and deep visual layers
- 💡 Developer-first TypeScript with safe props + styling flexibility
- 🔗 `/demo` directory with live examples and realistic usage

---

## 📦 Install

```bash
npm install shadyt-ui/mdb
```
````

or

```bash
yarn add shadyt-ui/mdb
```

---

## 🎨 Tailwind Setup

```ts
// tailwind.config.ts
import uiKitPreset from "shadyt-ui/mdb/tailwind.preset";

export default {
  presets: [uiKitPreset],
  content: ["./src/**/*.{ts,tsx,html}"],
};
```

Includes:

- Brand palette (`brand`, `brand-dark`)
- Paper-like textures
- Pulse, glow, and elevation utilities

---

## 🗂 Project Structure

```
src/
├── components/
│   ├── ui/             # Cards, badges, metrics, etc.
│   ├── inputs/         # Inputs, toggles, selectors
│   ├── layout/         # HeroSplit, Form helpers, Footer...
│   ├── navigation/     # Navbar, Tabs, Pagination...
│   ├── animations/     # FadeIn, SlideIn, ScrollReveal...
│   └── overlays/       # GlassPanel, Modal, Tooltip (TBD)
├── app/demo/           # Showcase pages per category
└── styles/             # Globals, preset, textures
```

---

## 🔁 Usage

```tsx
import FloatingCard from "shadyt-ui/mdb/components/ui/cards/FloatingCard";

<FloatingCard className="bg-brand-dark text-white p-6">
  <h3 className="text-lg font-bold">Try It Free</h3>
  <p className="text-sm text-white/70">Launch something vibrant.</p>
</FloatingCard>;
```

---

## 🧪 Demo Sections

These live inside your app and are used as visual docs:

| Route              | Contains                              |
| ------------------ | ------------------------------------- |
| `/demo/forms`      | Inputs, toggles, select, textareas    |
| `/demo/navigation` | Navbar, Tabs, Pagination, Breadcrumbs |
| `/demo/blocks`     | Hero, FeatureGrid, Pricing, Footer    |
| `/demo/ui/cards`   | FloatingCard, Spotlight, MetricCard   |
| `/demo/animations` | ScrollReveal, SlideIn, GlowPulse      |

---

## 📚 Component Index

### Layout Blocks

- `HeroSplit`
- `ShowcaseRow`
- `TestimonialsRow`
- `PricingSection`
- `CalloutBanner`
- `Footer`

### Inputs

- `TextInput`, `EmailInput`, `PasswordInput`
- `Textarea`, `SelectInput`, `Toggle`, `Checkbox`, `RadioGroup`

### Form Helpers

- `Form`, `FormRow`, `FieldGroup`

### Cards

- `FloatingCard`, `MetricCard`, `SpotlightCard`
- `TestimonialCard`, `ComparisonCard`, `StackedFeatureCard`

### Animations

- `FadeIn`, `ScrollReveal`, `SlideIn`, `StaggerGroup`
- `ScaleOnHover`, `GlowPulse`, `ParallaxLayer`

### Navigation

- `Navbar`, `NavItem`
- `Tabs`, `Pagination`, `Breadcrumbs`

---

## 🛠 Dev Notes

- Written in TypeScript w/ full prop typing
- Tailwind utilities + custom variants
- Framer Motion used for animation wrappers
- Layout helpers are responsive and themed

---

## 🤝 Contributing

This project is personal and modular. Contributions are welcome as the system grows.

If you’d like to:

- Add a new theme → `shadyt-ui/glass`, `shadyt-ui/dev`
- Extend animations or overlay stack
- Help with presets or docs

> Open a PR or issue at [github.com/Cstannahill](https://github.com/Cstannahill)

---

## 📄 License

MIT © [Christian Tannahill](https://github.com/Cstannahill)

---
