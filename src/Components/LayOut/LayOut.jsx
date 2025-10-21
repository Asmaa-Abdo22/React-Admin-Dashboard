import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Outlet } from "react-router-dom";
import { alpha, useTheme } from "@mui/material/styles";
import styled from "@emotion/styled";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Stack from "@mui/material/Stack";

//App BAr Icons
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
// Sidebar Icons
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import Person4OutlinedIcon from "@mui/icons-material/Person4Outlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { Avatar } from "@mui/material";

const drawerWidth = 240;

const LayOut = ({ window, mode, setMode }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));

  const array1 = [
    { text: "Dashboard", icon: <HomeOutlinedIcon />, path: "/dashboard" },
    { text: "Manage Team", icon: <PeopleOutlinedIcon />, path: "/team" },
    {
      text: "Contacts Info",
      icon: <ContactsOutlinedIcon />,
      path: "/contacts",
    },
    {
      text: "Invoices Balances",
      icon: <ReceiptOutlinedIcon />,
      path: "/invoices",
    },
  ];
  const Array2 = [
    { text: "Profile Form", icon: <Person4OutlinedIcon />, path: "/form" },
    {
      text: "Calendar",
      icon: <CalendarTodayOutlinedIcon />,
      path: "/calendar",
    },
    { text: "FAQ Page", icon: <HelpOutlineOutlinedIcon />, path: "/faq" },
  ];
  const Array3 = [
    { text: "Bar Chart", icon: <BarChartOutlinedIcon />, path: "/bar" },
    { text: "Pie Chart", icon: <PieChartOutlineOutlinedIcon />, path: "/pie" },
    { text: "Line Chart", icon: <TimelineOutlinedIcon />, path: "/line" },
    { text: "Geography Chart", icon: <MapOutlinedIcon />, path: "/geography" },
  ];
  // 📦 القائمة الجانبية
  const drawer = (
    <div>
      <Divider />
      <List>
        {array1.map((text, index) => (
          <ListItem key={text.path} disablePadding>
            <ListItemButton >
              <ListItemIcon>{text.icon}</ListItemIcon>
              <ListItemText primary={text.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {Array2.map((text) => (
          <ListItem key={text.path} disablePadding>
            <ListItemButton>
              <ListItemIcon>{text.icon}</ListItemIcon>
              <ListItemText primary={text.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {Array3.map((text) => (
          <ListItem key={text.path} disablePadding>
            <ListItemButton>
              <ListItemIcon>{text.icon}</ListItemIcon>
              <ListItemText primary={text.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        {/* 🔹 الشريط العلوي */}
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            <Typography variant="h6" noWrap component="div">
              Admin Dashboard
            </Typography>

            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>

            <Box sx={{ flexGrow: 1 }} />
            <Stack direction="row">
              <IconButton color="inherit" onClick={toggleTheme}>
                {mode === "light" ? (
                  <DarkModeOutlinedIcon />
                ) : (
                  <LightModeOutlinedIcon />
                )}
              </IconButton>
            </Stack>
          </Toolbar>
        </AppBar>

        {/* 🔹 القائمة الجانبية */}
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* موبايل */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onTransitionEnd={handleDrawerTransitionEnd}
            onClose={handleDrawerClose}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                paddingTop:2
              },
            }}
            slotProps={{
              root: {
                keepMounted: true,
              },
            }}
          >
            {drawer}
          </Drawer>

          {/* كمبيوتر */}
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {/* العنوان + اللوجو */}

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                flexDirection: "column",
                paddingBlock: 2,
              }}
            >
              <Avatar alt="Asmaa " src="/static/images/avatar/1.jpg"  sx={{ width: 50, height: 50 }} />
              <Typography variant="body1" noWrap component="p">
                Asmaa
              </Typography>
              <Typography variant="body2" noWrap component="p">
                Developer
              </Typography>
            </Box>
            {drawer}
          </Drawer>
        </Box>

        {/* 🔹 المحتوى الرئيسي */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          <div>
            content goes here
            <Outlet />
          </div>
        </Box>
      </Box>
    </>
  );
};

LayOut.propTypes = {
  window: PropTypes.func,
};

export default LayOut;
