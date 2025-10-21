export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: {
            main: "#3A4C8A", 
            light: "#5C6FB0",
            dark: "#27376A",
            contrastText: "#ffffff",
          },
          secondary: {
            main: "#F6C65B", 
            contrastText: "#0B1D51",
          },
          background: {
            default: "#F7F8FC",
            paper: "#FFFFFF",
          },
          text: {
            primary: "#1C265F",
            secondary: "#4C5580",
          },
          divider: "#E2E6F0",
        }
      : {
          primary: {
            main: "#5C6FB0", 
            light: "#8191C7",
            dark: "#2E3C77",
            contrastText: "#FFFFFF",
          },
          secondary: {
            main: "#FFD97A",
            contrastText: "#0B1D51",
          },
          background: {
            default: "#121A3A",
            paper: "#1A2450",
          },
          text: {
            primary: "#FFFFFF",
            secondary: "#C9D2F2",
          },
          divider: "#2E3B6F",
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
