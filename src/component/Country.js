import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ResponsiveAppBar from "./Responsive";
import { Grid } from "@mui/material";

const Country = () => {
  const [countryData, setCountryData] = useState();
  const countryList =
    "https://api.cricapi.com/v1/countries?apikey=419c0b8c-ada1-4f19-a7ad-dc406bfc308d&offset=0";
  useEffect(() => {
    axios
      .get(countryList)
      .then((res) => {
        setCountryData(res?.data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <ResponsiveAppBar />
      <Grid container spacing={2} sx={{ mt: 1 }}>
        {countryData?.map((data, index) => {
          return (
            <Grid item xs={12} md={4}>
              <Card key={index}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={data?.genericFlag}
                  title={data?.id}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {data?.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Country;
