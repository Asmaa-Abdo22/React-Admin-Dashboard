export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: {
            main: "#5066A3", 
            light: "#6F82BB", 
            dark: "#384C82",
            contrastText: "#ffffff",
          },
          secondary: {
            main: "#d1b308", 
            contrastText: "#1A2759",
          },
          background: {
            default: "#FAFBFF", 
            paper: "#FFFFFF",
          },
          text: {
            primary: "#24315E", 
            secondary: "#5A648E", 
          },
          divider: "#E7EAF5", 
        }
      : {
          primary: {
            main: "#7E92CC", 
            light: "#9DACE0",
            dark: "#5A6BA6",
            contrastText: "#FFFFFF",
          },
          secondary: {
            main: "#FFEA9E", 
            contrastText: "#0B1D51",
          },
          background: {
            default: "#141A33", 
            paper: "#1B2245",
          },
          text: {
            primary: "#F3F5FF",
            secondary: "#C5C9E6",
          },
          divider: "#2B3564",
        }),
  },
  typography: {
    fontFamily: `"Poppins", "Roboto", "Helvetica", "Arial", sans-serif`,
    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 },
    h3: { fontWeight: 500 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  shape: { borderRadius: 12 },
});
