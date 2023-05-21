import axios from "axios";
import React, { useEffect, useState } from "react";
import ResponsiveAppBar from "./Responsive";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import Blog from "./Blog";

const Series = () => {
  const [seriesData, setSeriesData] = useState();
  const seriesList =
    "https://api.cricapi.com/v1/series?apikey=b73fd0ac-4100-4c22-85bd-0b26c887cc2c&offset=0";
  useEffect(() => {
    axios
      .get(seriesList)
      .then((res) => {
        setSeriesData(res?.data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <ResponsiveAppBar />
      <Grid container spacing={2}>
        {seriesData?.map((data, index) => {
          return (
            <Grid item xs={12} md={4} key={index}>
              <Card style={{ height: 180 }}>
                <CardActionArea>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="body2"
                      component="div"
                      style={{ marginBottom: 10 }}
                    >
                      {data?.name}
                    </Typography>
                    <Grid container spacing={1}>
                      <Grid item md={12} xs={12}>
                        Start Date :{data?.startDate}
                      </Grid>
                      <Grid item md={12} xs={12}>
                        End Date : {data?.endDate}
                      </Grid>
                    </Grid>
                    <Grid container spacing={1}>
                      <Grid item xs={12} md={12}>
                        <Grid container spacing={1}>
                         
                            {data?.t20 === 0 ? (
                              <></>
                            ) : (
                              <>
                                <Grid item xs={6} md={6}>
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                  style={{ marginTop: 10 }}
                                >
                                  T20: {data?.t20}
                                </Typography> </Grid>
                              </>
                            )}
                         
                          <Grid item xs={6} md={6}>
                            {data?.odi === 0 ? (
                              <></>
                            ) : (
                              <>
                                {" "}
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                  style={{ marginTop: 10 }}
                                >
                                  ODI: {data?.odi}
                                </Typography>
                              </>
                            )}
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={12} md={12}>
                        {" "}
                        {data?.test === 0 ? (
                          <></>
                        ) : (
                          <>
                            {" "}
                            <Typography
                              variant="body2"
                              color="text.secondary"
                              style={{ marginTop: 10 }}
                            >
                              TEST: {data?.test}
                            </Typography>
                          </>
                        )}
                      </Grid>
                    </Grid>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
     <Blog />
    </div>
  );
};

export default Series;
