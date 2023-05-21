import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, Grid } from "@mui/material";
import { useRef } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ResponsiveAppBar from "./Responsive";

const LiveMatch = () => {
  const elementRef = useRef(null);
  const [liveMatchData, setLiveMatchData] = useState();
  const LiveMatch =
    "https://api.cricapi.com/v1/currentMatches?apikey=ba15cd30-b66d-4500-bbc5-20400f4b1323&offset=0";

  useEffect(() => {
    axios
      .get(LiveMatch)
      .then((res) => {
        setLiveMatchData(res?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleHorizontalScroll = () => {
    let speed = 0;
    let distance = 0;
    let step = 0;
    let element = 0;
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
    }, speed);
  };
  return (
    <Grid container>
      <ResponsiveAppBar />

      {/* <ArrowBackIosIcon onclick={()=>{handleHorizontalScroll(elementRef.current, 25, 100, -10)}}/> */}
      <Grid item md={12} ref={elementRef}>
        {liveMatchData?.status === "failure" ? (
          <>
            <Typography
              variant="h5"
              style={{
                fontWeight: 400,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Try after some time letter.
            </Typography>
          </>
        ) : (
          <>
            <Grid container spacing={2}>
              {liveMatchData?.data?.map((data, index) => {
                // const val =  data?.teamInfo?.[0]?.name
                // console.log(val)
                // const getVal = data?.score?.find((data)=>{
                //   return  val === data?.inning
                // })
                // console.log(getVal)
                return (
                  <Grid item xs={12} md={4} sm={6}>
                    <Card key={index} style={{ height: 170 }}>
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
          </>
        )}
      </Grid>
      {/* <ArrowForwardIosIcon onclick={()=>{handleHorizontalScroll(elementRef.current, 25, 100, 10)}}/> */}
    </Grid>
  );
};

export default LiveMatch;
