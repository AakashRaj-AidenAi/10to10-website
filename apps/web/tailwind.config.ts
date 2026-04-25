import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        brand: {
          // vibrant, kid-joyful palette
          primary: "#2c3873",        // deep indigo (premium, gender-neutral)
          "primary-deep": "#1a2354",
          turquoise: "#00d4c8",       // pool-party teal
          yellow: "#ffd93d",          // happy sunshine
          orange: "#ff8a3d",          // tangerine
          grape: "#8b5cf6",           // dreamy purple
          purple: "#8b5cf6",          // alias for grape (legacy compat)
          mint: "#7ce2b5",            // fresh mint
          sky: "#7cc5ff",             // bubble sky
          ink: "#1a1033",             // deep blueberry (softer than black)
          cloud: "#fff9f2",           // warm cream bg (replaces cold grey)
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        accent: ["var(--font-accent)", "cursive"],
      },
      boxShadow: {
        glow: "0 10px 60px -15px rgba(44,56,115,0.45)",
        "glow-turq": "0 10px 60px -15px rgba(0,212,200,0.55)",
        "glow-yellow": "0 10px 60px -15px rgba(255,217,61,0.6)",
        "glow-grape": "0 10px 60px -15px rgba(139,92,246,0.55)",
        lifted: "0 20px 50px -20px rgba(26,16,51,0.25)",
        pop: "0 12px 0 -2px rgba(26,16,51,0.12)",
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(ellipse at top, rgba(255,90,138,0.14), transparent 60%)",
        "mesh-hero":
          "radial-gradient(at 15% 10%, #ffd93d55 0, transparent 50%), radial-gradient(at 85% 15%, #ff5a8a55 0, transparent 50%), radial-gradient(at 75% 85%, #00d4c855 0, transparent 50%), radial-gradient(at 20% 85%, #8b5cf655 0, transparent 50%)",
        "mesh-dark":
          "radial-gradient(at 20% 20%, #ff5a8a88 0, transparent 45%), radial-gradient(at 80% 30%, #8b5cf688 0, transparent 45%), radial-gradient(at 50% 90%, #00d4c888 0, transparent 45%)",
        confetti:
          "radial-gradient(circle at 20% 10%, #ffd93d 2px, transparent 3px), radial-gradient(circle at 60% 30%, #ff5a8a 2px, transparent 3px), radial-gradient(circle at 85% 70%, #00d4c8 2px, transparent 3px), radial-gradient(circle at 35% 80%, #8b5cf6 2px, transparent 3px)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "gradient-x": "gradient-x 8s ease infinite",
        wiggle: "wiggle 2.5s ease-in-out infinite",
        bounce2: "bounce2 3s ease-in-out infinite",
        "spin-slow": "spin 18s linear infinite",
        pulse2: "pulse2 2.5s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-18px) rotate(3deg)" },
        },
        "gradient-x": {
          "0%,100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        wiggle: {
          "0%,100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        bounce2: {
          "0%,100%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(-10px) scale(1.05)" },
        },
        pulse2: {
          "0%,100%": { transform: "scale(1)", opacity: "0.9" },
          "50%": { transform: "scale(1.08)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
