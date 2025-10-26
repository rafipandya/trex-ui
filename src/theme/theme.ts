import { colors } from "./colors";

export const theme = {
    colors,
    typography: {
        fontFamily: {
            sans: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            mono: "Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace",
        },
        fontSize: {
            xs: "0.75rem",
            sm: "0.875rem",
            base: "1rem",
            lg: "1.125rem",
            xl: "1.25rem",
            xl2: "1.5rem",
            xl3: "1.875rem",
            xl4: "2.25rem",
        },
        fontWeight: {
            normal: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
        },
    },
    spacing: {
        xs: "0.25rem",
        sm: "0.5rem",
        md: "0.75rem",
        lg: "1rem",
        xl: "1.5rem",
        xl2: "2rem",
        xl3: "3rem",
    },
    borderRadius: {
        none: "0",
        sm: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        full: "9999px",
    },
};

export type Theme = typeof theme;
