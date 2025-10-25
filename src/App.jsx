import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayOut from "./Components/LayOut/LayOut";
import { Typography } from "@mui/material";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useEffect, useMemo, useState } from "react";
import { getDesignTokens } from "./theme";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Team from "./Pages/Team/Team";
import Contacts from "./Pages/Contacts/Contacts";
import Invoices from "./Pages/Invoices/Invoices";
import Form from "./Pages/Form/Form";
import Calendar from "./Pages/Calendar/Calendar";
import Faq from "./Pages/Faq/Faq";
import BarChart from "./Pages/BarChart/BarChart";
import Pie from "./Pages/Pie/Pie";
import LineChart from "./Pages/LineChart/LineChart";
import Geography from "./Pages/Geography/Geography";

export default function App() {
  const myClient = new QueryClient();
  const storedMode = localStorage.getItem("themeMode") || "dark";
  const [mode, setMode] = useState(storedMode);
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  useEffect(() => {
    localStorage.setItem("themeMode", mode);
  }, [mode]);

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <LayOut mode={mode} setMode={setMode} />,
      children: [
        //  1
        { index: true, element: <Dashboard /> },
        { path: "dashboard", element: <Dashboard /> },
        { path: "team", element: <Team /> },
        { path: "contacts", element: <Contacts /> },
        { path: "invoices", element: <Invoices /> },
        // 2
        { path: "form", element: <Form /> },
        { path: "calendar", element: <Calendar /> },
        { path: "faq", element: <Faq /> },
        // 3
        { path: "bar", element: <BarChart /> },
        { path: "pie", element: <Pie /> },
        { path: "line", element: <LineChart /> },
        { path: "geography", element: <Geography /> },
        {
      path: "*",
      element: (
        <Typography
          component="h1"
          sx={{
            color: "red",
            textAlign:"center"
          }}
        >
          404 Page Not Found
        </Typography>
      ),
    },
      ],
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
