/**
 * WARNING: DO NOT USE ANY TWIND FUNCTIONS in here otherwise the
 * vscode-twind-intellisense plugin may stop working. To overcome
 * this issue, use animations and keyframes intead of twind's animation
 * function.
 */
import type { Options } from "$fresh/plugins/twind.ts";

const gridCols = ([arg]: string[]) => {
  const template = Number.isInteger(Number(arg))
    ? `repeat(${arg}, minmax(0, 1fr))`
    : arg
    ? arg.replace(/(^\[)|(\])$/g, "").replace(/_/g, " ")
    : arg;

  return {
    "grid-template-columns": template,
  };
};

const gridRows = ([arg]: string[]) => {
  const template = Number.isInteger(Number(arg))
    ? `repeat(${arg}, minmax(0, 1fr))`
    : arg
    ? arg.replace(/(^\[)|(\])$/g, "").replace(/_/g, " ")
    : arg;

  return {
    "grid-template-rows": template,
  };
};

const options: Omit<Options, "selfURL"> = {
  theme: {
    extend: {
      colors: {
        "default": "rgb(242, 242, 242);",
        "header": "#FFFFFF",
        "badge": "#af0102", // shopping cart tem isso tambem
        "footer": "#f2f2f2",
        "newsletter": "rgb(175, 1, 0)",
        "cookie": "#90052c",
        "interactive": "#858585",
        "interactive-inverse": "#FFFFFF",
        "primary": "#AF0100",
        "hover": "rgba(0, 0, 0, 0.04)",
        "hover-inverse": "rgba(255, 255, 255, 0.4)",
      },
      textColor: {
        "default": "#858585",
        "default-inverse": "#FFFFFF",
        "subdued": "#66736C",
        "subdued-inverse": "#C6C6C6",
        "price": "#af0102",
        "positive": "#1A7346",
        "critical": "#B44125",
        "section-title": "#858585",
        "strong-title": "#AF0100",
        "product-title": "#615D56",
        "product-text": "#787878",
        "whatsapp": "#25D366",
        "copyright": "#797676",
      },
      borderColor: {
        "primary": "#AF0100",
        "default": "#D4DBD7",
        "default-inverse": "#FFFFFF",
        "interactive": "#858585",
        "focus": "#3379EF",
        "positive": "#1A7346",
        "critical": "#B44125",
        "lightgray": "lightgray",
      },
      outline: {
        interactive: ["2px solid #3379EF", "2px"],
      },
      fontSize: {
        "heading-1": ["56px", "67.2px"],
        "heading-2": ["24px", "28.8px"],
        "heading-3": ["20px", "24px"],
        "heading-4": ["18px", "22px"],
        "heading-footer": ["14px", "18px"],
        "text-footer": ["11px", "15px"],
        "menu": ["16px", "20px"],
        "button": ["14px", "18px"],
        "body": ["16px", "20px"],
        "caption": ["13px", "16px"],
        "list-price": ["10px", "20px"],
        "menu-desktop": ["15px", "15px"],
        "newsletter": ["17px", "20px"],
      },
      fontWeight: {
        "heading-1": "700",
        "heading-2": "700",
        "heading-3": "700",
        "heading-4": "400",
        "menu": "500",
        "button": "700",
        "regular": "400",
        "body": "500",
        "caption": "500",
        "list-price": "400",
      },
      animation: {
        "slide-left": "slide-left-frame 0.4s ease normal",
        "slide-right": "slide-right-frame 0.4s ease normal",
        "slide-bottom": "slide-bottom-frame 0.4s ease normal",
        "fade-in": "fade-in-frame 0.4s ease normal",
        "fade-out": "fade-out-frame 0.4s ease normal",
      },
      keyframes: {
        "slide-left-frame": {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0)" },
        },
        "slide-right-frame": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
        "slide-bottom-frame": {
          from: { transform: "translateY(100%)" },
          to: { transform: "translateY(0)" },
        },
        "fade-in-frame": {
          from: { opacity: 0, visibility: "hidden" },
          to: { opacity: 1, visibility: "visible" },
        },
        "fade-out-frame": {
          from: { opacity: 1, visibility: "visible" },
          to: { opacity: 0, visibility: "hidden" },
        },
      },
      boxShadow: {
        section: "rgb(0, 0, 0) 0px 3px 10px -5px;",
        sm: "0px 1px 3px 0px #00000014",
        default: "0px 1px 4px 0px #0000001F",
        md: "0px 1px 5px 0px #00000024",
        lg: "0px 4px 10px 0px #0000001F",
        notfound: "0px 3px 10px -5px rgb(0, 0, 0)",
        cookie: "0px 1px 5px 0px rgba(0, 0, 0, 0.7)",
        header: "rgb(183, 183, 183) 0px 6px 10px -5px",
        newsletter: "rgba(0, 0, 0, 0.2) 0px 1px 3px 0px",
      },
    },
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
      serif: ["inherit", "serif"],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  preflight: (preflight) => ({
    ...preflight,

    // Stick footer to the bottom of the page
    body: {
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
      backgroundColor: "rgb(242, 242, 242)", // cor padrão do background do body
    },
    'section[data-manifest-key="./sections/Footer.tsx"]': {
      marginTop: "auto",
    },

    // Prevent scroll when modal is open
    "body[no-scroll]": {
      overflow: "hidden",
      height: "100vh",
    },

    ".footer-advanced-item a": {
      color: "rgb(35, 69, 150)",
    },
  }),
  plugins: {
    backdrop: {
      "&::backdrop": {
        background: "rgba(0, 0, 0, 0.5)",
      },
    },
    "scroll-snap-center": {
      "scroll-snap-align": "center",
    },
    "scroll-x-mandatory": {
      "scroll-snap-type": "x mandatory",
    },
    "snap-x": {
      "scroll-snap-type": "x var(--tw-scroll-snap-strictness)",
    },
    "snap-mandatory": {
      "--tw-scroll-snap-strictness": "mandatory",
    },
    "fill": (parts) => ({ "fill": parts.join("-") }),
    "max-h-min": {
      "max-height": "min-content",
    },
    "snap": ([mod]) => ({ "scroll-snap-align": mod }),
    "grid-cols": gridCols,
    "grid-rows": gridRows,
    "scroll-smooth": {
      "scroll-behavior": "smooth",
      "-webkit-overflow-scrolling": "touch",
    },
    "scrollbar-none": {
      "scrollbar-width": "none",
      "-ms-overflow-style": "none",
      "&::-webkit-scrollbar": {
        display: "none",
      },
    },
    "no-action-button": {
      display: "none",
    },
  },
};

export default options;
