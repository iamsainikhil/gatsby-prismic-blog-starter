export default {
  useCustomProperties: true,
  initialColorMode: "light",
  useColorSchemeMediaQuery: true,
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#333",
    secondary: "#5b5b5b",
    muted: "#f6f6f6",
    highlight: "#9f9f9f",
    gray: "#6c6c6c",
    accent: "#3f3f3f",
    modes: {
      dark: {
        text: "#fff",
        background: "#181818",
        primary: "#d2d2d2",
        secondary: "#b2b2b2",
        muted: "#202020",
        highlight: "#3c3c3c",
        gray: "#999",
        accent: "#e0e0e0",
      },
    },
  },
  fonts: {
    body: "'Inter', 'Lato', sans-serif",
    heading: "'Inter', 'Lato', sans-serif",
    code: "'Fira Code', monospace",
    title: "'Damion', 'Inter', 'Lato', sans-serif",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  fontWeights: {
    body: 400,
    heading: 700,
    display: 900,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  textStyles: {
    heading: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
    },
    title: {
      fontFamily: "title",
      fontWeight: "heading",
      lineHeight: "heading",
    },
    display: {
      variant: "textStyles.heading",
      fontSize: [5, 6],
      fontWeight: "display",
      letterSpacing: "-0.03em",
      mt: 3,
    },
  },
  styles: {
    Container: {
      p: 3,
      maxWidth: 1024,
    },
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    h1: {
      variant: "textStyles.title",
    },
    h2: {
      variant: "textStyles.heading",
      fontSize: 5,
    },
    h3: {
      variant: "textStyles.heading",
      fontSize: 4,
    },
    h4: {
      variant: "textStyles.heading",
      fontSize: 3,
    },
    h5: {
      variant: "textStyles.heading",
      fontSize: 2,
    },
    h6: {
      variant: "textStyles.heading",
      fontSize: 1,
    },
    p: {
      fontSize: 2,
    },
    a: {
      color: "primary",
      textDecoration: "none",
      "&:hover": {
        color: "secondary",
        textDecoration: "underline",
      },
    },
    pre: {
      fontFamily: "code",
      fontSize: 1,
      p: 3,
      color: "text",
      bg: "muted",
      borderColor: "text",
      borderStyle: "solid",
      borderTopWidth: 0,
      borderLeftWidth: 0,
      borderRightWidth: 8,
      borderBottomWidth: 8,
      overflow: "auto",
      code: {
        color: "inherit",
      },
    },
    code: {
      fontFamily: "code",
      fontSize: 1,
    },
    inlineCode: {
      fontFamily: "code",
      color: "secondary",
      bg: "muted",
      px: 2,
    },
    ul: {
      listStyleType: "square",
    },
    table: {
      width: "100%",
      my: 4,
      borderCollapse: "separate",
      borderSpacing: 0,
      "th,td": {
        textAlign: "left",
        py: "4px",
        pr: "4px",
        pl: 0,
        borderColor: "text",
        borderBottomStyle: "solid",
      },
    },
    th: {
      backgroundColor: "muted",
      verticalAlign: "bottom",
      borderBottomWidth: 8,
    },
    td: {
      verticalAlign: "top",
      borderBottomWidth: 4,
    },
    hr: {
      border: 0,
      borderBottom: "8px solid",
      borderColor: "text",
    },
  },
}
