import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayOut from "./Components/LayOut/LayOut";
import { Typography } from "@mui/material";
import Home from "./Components/Home/Home";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useEffect, useMemo, useState } from "react";
import { getDesignTokens } from "./theme";

export default function App() {
  const myClient = new QueryClient();
  const storedMode = localStorage.getItem("themeMode") || "dark";
  const [mode, setMode] = useState(storedMode);
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  useEffect(() => {
    localStorage.setItem("themeMode", mode);
  }, [mode]);
  // const array1 = [
  //   { text: "Dashboard", icon: <HomeOutlinedIcon />, path: "/dashboard" },
  //   { text: "Manage Team", icon: <PeopleOutlinedIcon />, path: "/team" },
  //   {
  //     text: "Contacts Info",
  //     icon: <ContactsOutlinedIcon />,
  //     path: "/contacts",
  //   },
  //   {
  //     text: "Invoices Balances",
  //     icon: <ReceiptOutlinedIcon />,
  //     path: "/invoices",
  //   },
  // ];
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <LayOut mode={mode} setMode={setMode} />,
      children: [{ path: "/dashboard", element: <Home /> }],
    },
    {
      path: "*",
      element: (
        <Typography
          component="p"
          sx={{
            color: "red",
          }}
        >
          404 Page Not Found
        </Typography>
      ),
    },
  ]);
  return (
    <>
      <QueryClientProvider client={myClient}>
        <ThemeProvider theme={theme}>
          <RouterProvider router={routes} />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}
