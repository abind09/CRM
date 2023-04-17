import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, Grid } from "@mui/material";

const MatchList = () => {
  const [matchListData, setMatchListData] = useState();
  const matchList =
    "https://api.cricapi.com/v1/matches?apikey=ba15cd30-b66d-4500-bbc5-20400f4b1323&offset=0";
  useEffect(() => {
    axios
      .get(matchList)
      .then((res) => {
        setMatchListData(res?.data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Grid
        container
        spacing={2}
        style={{ height: "550px", overflowY: "scroll" }}
      >
        {matchListData?.map((data, index) => {
          return (
            <Grid item xs={12} md={12} sm={12} key={index}>
              <Card style={{ height: 170 }}>
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
                        <Box
                          component="img"
                          src={data?.teamInfo?.[0]?.img}
                          style={{ maxWidth: 20 }}
                        ></Box>{" "}
                        {data?.teamInfo?.[0]?.name}
                      </Grid>
                      <Grid item md={12} xs={12}>
                        <Box
                          component="img"
                          src={data?.teamInfo?.[1]?.img}
                          style={{ maxWidth: 20 }}
                        ></Box>{" "}
                        {data?.teamInfo?.[1]?.name}
                      </Grid>
                    </Grid>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      style={{ marginTop: 10 }}
                    >
                      {data?.status}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                {/* <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                </CardActions> */}
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default MatchList;
