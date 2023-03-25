import { Button, Container, Grid } from "@mui/material";
import React from "react";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { login } from "./features/user/userSice";

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
      <Container maxWidth="md">
        <Grid container sx={{ p: 5 }}>
          <Grid item md={2}></Grid>
          <Grid item xs={12} md={6}>
            <form onSubmit={formik.handleSubmit}>
              <Grid container spacing={2}>
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
          <Grid item md={4}></Grid>
        </Grid>
      </Container>
    </>
  );
}
