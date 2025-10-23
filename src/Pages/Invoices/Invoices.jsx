import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 70,
    align: "center",
    headerAlign: "center",
  },
  { field: "name", headerName: "Name", flex: 1 , align: "center",
    headerAlign: "center",},
  { field: "phone", headerName: "Phone Number", flex: 1  ,align: "center",
    headerAlign: "center",},
  { field: "email", headerName: "Email", flex: 1 , align: "center",
    headerAlign: "center",},
  { field: "cost", headerName: "Cost", flex: 1 , align: "center",
    headerAlign: "center",},
  { field: "date", headerName: "Date", flex: 1 , align: "center",
    headerAlign: "center",},
];

const rows = [
  {
    id: 1,
    name: "Jon Snow",
    phone: "(665)121-5454",
    email: "jonsnow@gmail.com",
    cost: "$35.00",
    date: "03/12/2023",
  },
  {
    id: 2,
    name: "Cersei Lannister",
    phone: "(421)314-2288",
    email: "cerseilannister@gmail.com",
    cost: "$42.00",
    date: "06/15/2023",
  },
  {
    id: 3,
    name: "Jaime Lannister",
    phone: "(422)982-6739",
    email: "jaimelannister@gmail.com",
    cost: "$45.00",
    date: "09/20/2023",
  },
  {
    id: 4,
    name: "Anya Stark",
    phone: "(921)425-6742",
    email: "anyastark@gmail.com",
    cost: "$16.00",
    date: "01/11/2024",
  },
  {
    id: 5,
    name: "Daenerys Targaryen",
    phone: "(421)445-1189",
    email: "daenerys@gmail.com",
    cost: "$31.00",
    date: "03/02/2024",
  },
  {
    id: 6,
    name: "Ever Melisandre",
    phone: "(232)545-6483",
    email: "evermelisandre@gmail.com",
    cost: "$150.00",
    date: "04/09/2024",
  },
  {
    id: 7,
    name: "Ferrara Clifford",
    phone: "(543)124-0123",
    email: "ferraraclifford@gmail.com",
    cost: "$44.00",
    date: "05/28/2024",
  },
  {
    id: 8,
    name: "Rossini Frances",
    phone: "(421)444-9821",
    email: "rossinifrances@gmail.com",
    cost: "$36.00",
    date: "06/10/2024",
  },
  {
    id: 9,
    name: "Harvey Roxie",
    phone: "(451)442-9851",
    email: "harveyroxie@gmail.com",
    cost: "$65.00",
    date: "08/01/2024",
  },
  {
    id: 10,
    name: "Jhon Clifford",
    phone: "(451)442-9851",
    email: "Jhon@gmail.com",
    cost: "$70.00",
    date: "01/01/2025",
  },
  {
    id: 11,
    name: "Ferrara Clifford",
    phone: "(451)442-9851",
    email: "Jhon@gmail.com",
    cost: "$77.00",
    date: "01/01/2025",
  },
  {
    id: 12,
    name: "Justin Stark",
    phone: "(451)442-9851",
    email: "Jhon@gmail.com",
    cost: "$90.00",
    date: "01/01/2025",
    
  },
];

const Invoices = () => {
  const appTheme = useTheme();
  return (
    <>
      <Box sx={{ height: "auto", width: "100%" }}>
        <Typography variant="h5" color={appTheme.palette.secondary.main}>
          Invoices
        </Typography>
        <Typography
          variant="body2"
          mb={2}
          color={appTheme.palette.text.secondary}
        >
          List Of Invoices Balances
        </Typography>
        <DataGrid checkboxSelection rows={rows} columns={columns} />
      </Box>
    </>
  );
};

export default Invoices;
