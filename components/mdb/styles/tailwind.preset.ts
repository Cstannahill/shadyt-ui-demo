import type { Config } from "tailwindcss";

/**
 * Mongo-style Tailwind Preset
 * ---------------------
 * This preset is designed to be safe to extend, and it does NOT override
 * any default Tailwind behavior. All tokens live in `theme.extend`.
 *
 * ✅ Include this in your consuming project's tailwind.config.ts:
 *
 * import uiKitPreset from 'your-ui-kit/tailwind.preset';
 *
 * export default {
 *   presets: [uiKitPreset],
 *   content: ['./src//*.{ts,tsx,html}'],
 * };
 */

const preset: Config = {
  content: [], // Consumer defines this in their own project
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#00ED64",
          dark: "#001f2e",
        },
      },
      boxShadow: {
        elevated: "0 12px 40px rgba(0,0,0,0.2)",
      },
      animation: {
        "pulse-slow": "pulse 4s ease-in-out infinite",
        "pulse-fast": "pulse 1s ease-in-out infinite",
      },
      fontFamily: {
        code: ["Source Code Pro", "monospace"],
      },
    },
  },
  plugins: [],
};

export default preset;
