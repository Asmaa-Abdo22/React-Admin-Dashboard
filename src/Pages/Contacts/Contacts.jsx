import { Box } from "@mui/material";
import clsx from "clsx";
import {
  DataGrid,
  Toolbar,
  ToolbarButton,
  ColumnsPanelTrigger,
  FilterPanelTrigger,
  ExportCsv,
  ExportPrint,
  QuickFilter,
  QuickFilterControl,
  QuickFilterClear,
  QuickFilterTrigger,
} from "@mui/x-data-grid";
import SearchIcon from "@mui/icons-material/Search";
import CancelIcon from "@mui/icons-material/Cancel";
import { Button as MuiButton } from "@mui/material";

export const rows = [
  {
    id: 1,
    registrarId: 123512,
    name: "Jon Snow",
    age: 35,
    phone: "(665)121-5454",
    email: "jon@gmail.com",
    address: "123 Main St, New York, NY",
    city: "New York",
    zipCode: "10001",
  },
  {
    id: 2,
    registrarId: 123512,
    name: "Cersei Lannister",
    age: 42,
    phone: "(421)314-2288",
    email: "cersei@gmail.com",
    address: "31 North St, New York, NY",
    city: "New York",
    zipCode: "13151",
  },
  {
    id: 3,
    registrarId: 4132513,
    name: "Jaime Lannister",
    age: 45,
    phone: "(422)982-6739",
    email: "jaime@gmail.com",
    address: "33 North St, New York, NY",
    city: "New York",
    zipCode: "87281",
  },
  {
    id: 4,
    registrarId: 123512,
    name: "Anya Stark",
    age: 16,
    phone: "(921)425-6742",
    email: "anya@gmail.com",
    address: "14 Main St, Escondido, NY",
    city: "Escondido",
    zipCode: "15551",
  },
  {
    id: 5,
    registrarId: 123512,
    name: "Daenerys Targaryen",
    age: 31,
    phone: "(421)445-1189",
    email: "daenerys@gmail.com",
    address: "1 North St, New York, NY",
    city: "New York",
    zipCode: "14215",
  },
  {
    id: 6,
    registrarId: 123512,
    name: "Ever Melisandre",
    age: 150,
    phone: "(232)545-6483",
    email: "ever@gmail.com",
    address: "12 Main St, New York, NY",
    city: "New York",
    zipCode: "10001",
  },
  {
    id: 7,
    registrarId: 512315,
    name: "Ferrara Clifford",
    age: 44,
    phone: "(543)124-0123",
    email: "ferrara@gmail.com",
    address: "22 North St, Escondido, NY",
    city: "Escondido",
    zipCode: "51523",
  },
  {
    id: 8,
    registrarId: 512315,
    name: "Rossini Frances",
    age: 36,
    phone: "(421)444-9821",
    email: "rossini@gmail.com",
    address: "41 South St, New York, NY",
    city: "New York",
    zipCode: "44215",
  },
  {
    id: 9,
    registrarId: 928397,
    name: "Harvey Roxie",
    age: 65,
    phone: "(451)442-9851",
    email: "harvey@gmail.com",
    address: "11 South St, New York, NY",
    city: "New York",
    zipCode: "111234",
  },
  {
    id: 10,
    registrarId: 533215,
    name: "Enid Collins",
    age: 42,
    phone: "(222)444-0189",
    email: "enid@gmail.com",
    address: "21 North St, New York, NY",
    city: "New York",
    zipCode: "44215",
  },
  {
    id: 11,
    registrarId: 123512,
    name: "John Doe",
    age: 28,
    phone: "(111)222-3333",
    email: "john@gmail.com",
    address: "5 Park Ave, New York, NY",
    city: "New York",
    zipCode: "10001",
  },
];

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 50,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "registrarId",
    headerName: "Register Id",
    width: 200,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "name",
    headerName: "Name",
    width: 200,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "age",
    headerName: "Age",
    width: 200,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 200,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "email",
    headerName: "Email",
    width: 200,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "address",
    headerName: "Address",
    width: 200,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "city",
    headerName: "City",
    width: 200,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "zipCode",
    headerName: "zipCode",
    width: 200,
    align: "center",
    headerAlign: "center",
  },
];

function Button(props) {
  return (
    <button
      type="button"
      {...props}
      className={clsx(
        "flex h-9 items-center justify-center rounded border border-neutral-200 cursor-pointer dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 px-2.5 text-sm font-bold text-neutral-700 dark:text-neutral-200 whitespace-nowrap select-none hover:bg-neutral-100 dark:hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-blue-600 active:bg-neutral-100 dark:active:bg-neutral-700",
        props.className
      )}
    />
  );
}

function TextInput(props) {
  return (
    <input
      {...props}
      className={clsx(
        "h-9 w-full rounded border border-neutral-200 dark:border-neutral-700 dark:bg-neutral-900 px-2.5 text-base text-neutral-900 dark:text-neutral-200 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600",
        props.className
      )}
    />
  );
}

function CustomToolbar() {
  return (
    <Toolbar style={{backgroundColor:"red",display:"flex",justifyContent:"flex-start" }}>
      <ColumnsPanelTrigger 
        render={<ToolbarButton render={<Button>Columns</Button>} />}
      />
      <FilterPanelTrigger
        render={<ToolbarButton render={<Button>Filter</Button>} />}
      />
      <ExportCsv render={<ToolbarButton render={<Button>Export</Button>} />} />
      <ExportPrint render={<ToolbarButton render={<Button>Print</Button>} />} />
      <QuickFilter
        render={(props, state) => (
          <div {...props} className="ml-auto flex overflow-clip">
            <QuickFilterTrigger
              className={state.expanded ? "rounded-r-none border-r-0" : ""}
              render={
                <ToolbarButton
                  render={
                    <Button aria-label="Search">
                      <SearchIcon fontSize="small" />
                    </Button>
                  }
                />
              }
            />
            <div
              className={clsx(
                "flex overflow-clip transition-all duration-300 ease-in-out",
                state.expanded ? "w-48" : "w-0"
              )}
            >
              <QuickFilterControl
                aria-label="Search"
                placeholder="Search"
                render={({ slotProps, size, ...controlProps }) => (
                  <TextInput
                    {...controlProps}
                    {...slotProps?.htmlInput}
                    className={clsx(
                      "flex-1 rounded-l-none",
                      state.expanded && state.value !== "" && "rounded-r-none"
                    )}
                  />
                )}
              />
              {state.expanded && state.value !== "" && (
                <QuickFilterClear
                  render={
                    <Button aria-label="Clear" className="rounded-l-none">
                      <CancelIcon fontSize="small" />
                    </Button>
                  }
                />
              )}
            </div>
          </div>
        )}
      />
    </Toolbar>
  );
}

const Contacts = () => {
  return (
    <>
      <Box sx={{ height: 700, width: "100%", overflowX: "auto" }}>
        <DataGrid
          slots={{ toolbar: CustomToolbar }}
          showToolbar
          rows={rows}
          columns={columns}
        />
      </Box>
    </>
  );
};

export default Contacts;
