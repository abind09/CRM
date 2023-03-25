import { Button, Container, Grid } from "@mui/material";
import React from "react";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { login } from "./features/user/userSice";
import Appbar from "./Appbar";


export default function Signup() {
  const dispatch = useDispatch();
 

  const formik = useFormik({
    initialValues: {
      password: "",
      email: "",
    },
    onSubmit: (values) => {
      // console.log(values);
      dispatch(
        login({
          email: values.email,
          password: values.password,
        })
      );
    },
  });

  return (
    <>
   <Appbar />
      <Container maxWidth="lg">
        <Grid container sx={{ mt: 20 }}>
          <Grid item md={8}></Grid>
          <Grid item xs={12} md={4}>
            <form onSubmit={formik.handleSubmit}>
              <Grid container spacing={1}>
                <Grid item md={12} xs={12}>
                  <TextField
                    id="email"
                    label="Email"
                    type="email"
                    name="email"
                    fullWidth
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                </Grid>
                <Grid item md={12} xs={12}>
                  <TextField
                    id="password"
                    label="Password"
                    type="password"
                    name="password"
                    fullWidth
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                </Grid>
                <Grid item md={12} xs={12}>
                  <Button
                    name="submit"
                    fullWidth
                    variant="contained"
                    type="submit"
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        
        </Grid>
      </Container>
    </>
  );
}
