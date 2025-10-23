import { DataGrid } from "@mui/x-data-grid";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import { Box, Typography, useTheme } from "@mui/material";
const rows = [
  {
    id: 1,
    Name: "Ahmed",
    Email: "ahmed@email.com",
    Age: 30,
    Phone: "011555",
    Access: "Admin",
  },
  {
    id: 2,
    Name: "Menna",
    Email: "menna@email.com",
    Age: 39,
    Phone: "011555",
    Access: "Manager",
  },
  {
    id: 3,
    Name: "Salma",
    Email: "salma@email.com",
    Age: 55,
    Phone: "011555",
    Access: "User",
  },
  {
    id: 4,
    Name: "Omar",
    Email: "omar@email.com",
    Age: 22,
    Phone: "011555",
    Access: "User",
  },
  {
    id: 5,
    Name: "Youssef",
    Email: "youssef@email.com",
    Age: 28,
    Phone: "011555",
    Access: "Admin",
  },
  {
    id: 6,
    Name: "Mona",
    Email: "mona@email.com",
    Age: 33,
    Phone: "010555",
    Access: "Manager",
  },
  {
    id: 7,
    Name: "Ali",
    Email: "ali@email.com",
    Age: 24,
    Phone: "012555",
    Access: "User",
  },
  {
    id: 8,
    Name: "Sara",
    Email: "sara@email.com",
    Age: 27,
    Phone: "015555",
    Access: "Manager",
  },
  {
    id: 9,
    Name: "Nour",
    Email: "nour@email.com",
    Age: 29,
    Phone: "013555",
    Access: "Admin",
  },
];

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 100,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "Name",
    headerName: "Name",
    width: 200,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "Email",
    headerName: "Email",
    width: 280,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "Age",
    headerName: "Age",
    width: 140,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "Phone",
    headerName: "Phone",
    width: 220,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "Access",
    headerName: "Access Level",
    width: 250,
    headerAlign: "center",
    align: "center",
    renderCell: (params) => {
      const access = params.row.Access;
      let icon = null;
      let textColor = "";

      if (access === "Admin") {
        textColor = "#1e8a6c";
        icon = (
          <AdminPanelSettingsOutlinedIcon sx={{ mr: 1, color: textColor }} />
        );
      } else if (access === "Manager") {
        textColor = "#B28704";
        icon = <SecurityOutlinedIcon sx={{ mr: 1, color: textColor }} />;
      } else {
        textColor = "#C2185B";
        icon = <LockOpenOutlinedIcon sx={{ mr: 1, color: textColor }} />;
      }

      return (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            color: textColor,
            borderRadius: "8px",
            fontWeight: 600,
          }}
        >
          {icon}
          <Typography variant="body2">{access}</Typography>
        </Box>
      );
    },
  },
];
const Team = () => {
  const appTheme = useTheme();
  return (
    <Box sx={{ height: 700, width: "100%", p: 2, overflowX: "auto" }}>
      {" "}
      <Typography mb={2} variant="h5" color={appTheme.palette.secondary.main}>
        Team
      </Typography>
      <DataGrid rows={rows} columns={columns} />{" "}
    </Box>
  );
};
export default Team;
