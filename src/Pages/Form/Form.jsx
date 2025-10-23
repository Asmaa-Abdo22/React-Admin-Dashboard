import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import * as yup from "yup";
import Alert from "@mui/material/Alert";
const Form = () => {
  const [open, setOpen] = useState(false);
  const [age, setAge] = useState("");
  const appTheme = useTheme();
  const phoneRegex = /^(02)?01[0125][0-9]{8}$/;
  const mySchema = yup.object({
    fName: yup
      .string()
      .required("First Name is required")
      .min(3, "At least 3 characters")
      .max(20, "First Name must be less than 20 char"),
    lName: yup
      .string()
      .required("Last Name is required")
      .min(3, "At least 3 characters")
      .max(20, "Last Name must be less than 20 char"),
    email: yup
      .string()
      .email("Enter a valid email")
      .required("Email is required "),
    phone: yup
      .string()
      .required("Phone Is Required")
      .matches(phoneRegex, "Accept Only Egyptian Numbers"),
  });
  const myformik = useFormik({
    initialValues: {
      fName: "",
      lName: "",
      email: "",
      phone: "",
    },
    validationSchema: mySchema,
    onSubmit: (values) => {
      console.log("Done");
      console.log(values);
      setOpen(true);
      setTimeout(() => {
        handleCloseAlert();
      }, 1500);
    },
  });
  const handleCloseAlert = () => {
    setOpen(false);
  };

  return (
    <>
      {" "}
      {open && (
        <Alert
          variant="outlined"
          severity="success"
          sx={{ width: "fit-content", margin: "auto" }}
        >
          Account Is Created Successfully 
        </Alert>
      )}
      <Typography variant="h5" color={appTheme.palette.secondary.main}>
        Create User
      </Typography>
      <Typography
        variant="body2"
        mb={2}
        color={appTheme.palette.text.secondary}
      >
        Create a New User Profile
      </Typography>
      <Box
        onSubmit={myformik.handleSubmit}
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          marginBlock: 4,
        }}
        noValidate
        autoComplete="off"
      >
        <Stack direction={"row"} sx={{ gap: 2 }}>
          <TextField
            sx={{ flex: 1 }}
            id="filled-basic"
            label="First Name"
            variant="filled"
            type="text"
            name="fName"
            error={myformik.touched.fName && Boolean(myformik.errors.fName)}
            onBlur={myformik.handleBlur}
            value={myformik.values.fName}
            onChange={myformik.handleChange}
            helperText={myformik.touched.fName && myformik.errors.fName}
          />
          <TextField
            type="text"
            sx={{ flex: 1 }}
            label="Last Name"
            variant="filled"
            name="lName"
            value={myformik.values.lName}
            onBlur={myformik.handleBlur}
            onChange={myformik.handleChange}
            error={myformik.touched.lName && Boolean(myformik.errors.lName)}
            helperText={myformik.touched.lName && myformik.errors.lName}
          />
        </Stack>
        <TextField
          id="email"
          name="email"
          label="Email"
          type="email"
          variant="filled"
          value={myformik.values.email}
          onChange={myformik.handleChange}
          onBlur={myformik.handleBlur}
          error={myformik.touched.email && Boolean(myformik.errors.email)}
          helperText={myformik.touched.email && myformik.errors.email}
        />

        <TextField
          id="phone"
          name="phone"
          label="Contact Number"
          type="text"
          variant="filled"
          value={myformik.values.phone}
          onChange={myformik.handleChange}
          onBlur={myformik.handleBlur}
          error={myformik.touched.phone && Boolean(myformik.errors.phone)}
          helperText={myformik.touched.phone && myformik.errors.phone}
        />

        <TextField label="Address1" type="text" variant="filled" />
        <TextField label="Address2" type="text" variant="filled" />

        <FormControl variant="filled" sx={{ m: 1, width: "100%" }}>
          <InputLabel id="demo-simple-select-filled-label">Role</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>User</MenuItem>
            <MenuItem value={20}>Admin</MenuItem>
            <MenuItem value={30}>Manager</MenuItem>
          </Select>
        </FormControl>
        <Button
          type="submit"
          sx={{ width: "fit-content", marginLeft: "auto" }}
          variant="contained"
        >
          Create New User
        </Button>
      </Box>
    </>
  );
};

export default Form;
