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
            main: "#E85D8C", 
            light: "#F18FB1",
            dark: "#C43E6D",
            contrastText: "#ffffff",
          },
          background: {
            default: "#FFF9FB",
            paper: "#FFFFFF",
          },
          text: {
            primary: "#24315E",
            secondary: "#7A5772",
          },
          divider: "#F3DCE6",
        }
      : {
          primary: {
            main: "#7E92CC",
            light: "#9DACE0",
            dark: "#5A6BA6",
            contrastText: "#FFFFFF",
          },
          secondary: {
            main: "#FF7DAE",
            light: "#FF9EC2",
            dark: "#E0528C",
            contrastText: "#0B1D51",
          },
          background: {
            default: "#1A1B3A",
            paper: "#24264F",
          },
          text: {
            primary: "#F5E9F0",
            secondary: "#D7BBD2",
          },
          divider: "#3A3C6A",
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
