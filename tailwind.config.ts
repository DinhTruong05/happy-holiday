import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },

    extend: {
      // Colors
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },

        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },

        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },

        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },

      // Radius
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      // Keyframes
      keyframes: {
        // Background Fade
        "bg-fade": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },

        // TikTok Popup 3D
        "popup-3d": {
          "0%": { transform: "scale(0.3) rotateX(-80deg)", opacity: "0" },
          "50%": { transform: "scale(1.05) rotateX(10deg)", opacity: "1" },
          "100%": { transform: "scale(1) rotateX(0deg)", opacity: "1" },
        },

        // Glow text
        "soft-glow": {
          "0%, 100%": { textShadow: "0 0 10px rgba(255,100,150,0.7)" },
          "50%": { textShadow: "0 0 20px rgba(255,150,180,1)" },
        },

        // Rising text
        "text-rise": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },

        // Accordion
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },

        // Spin wheel
        "spin-wheel": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(1800deg)" },
        },

        // Fade-in
        "fade-in": {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },

        // Confetti falling
        "confetti-fall": {
          "0%": { transform: "translateY(-100vh) rotate(0deg)", opacity: "1" },
          "100%": { transform: "translateY(100vh) rotate(720deg)", opacity: "0" },
        },

        // Floating
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },

        // 🌺 Phoenix Flower Falling
        "fall-phoenix": {
          "0%": { transform: "translateY(-10vh) rotate(0deg)", opacity: "1" },
          "100%": { transform: "translateY(110vh) rotate(360deg)", opacity: "0" },
        },
      },

      // Animations
      animation: {
        "bg-fade": "bg-fade 0.4s ease-out",
        "popup-3d": "popup-3d 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
        "soft-glow": "soft-glow 2s ease-in-out infinite",
        "text-rise": "text-rise 0.5s ease-out",

        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",

        "spin-wheel": "spin-wheel 4s cubic-bezier(0.17, 0.67, 0.12, 0.99)",
        "fade-in": "fade-in 0.5s ease-out",

        "confetti-fall": "confetti-fall 3s linear forwards",
        float: "float 3s ease-in-out infinite",

        // 🌺 Phoenix flower fall
        "fall-phoenix": "fall-phoenix linear infinite",
      },
    },
  },

  plugins: [require("tailwindcss-animate")],
} satisfies Config;
