import axios from "axios";
import React, { useEffect, useState } from "react";

const MatchList = () => {
  const [matchListData, setMatchListData] = useState();
  const matchList =
    "https://api.cricapi.com/v1/matches?apikey=ba15cd30-b66d-4500-bbc5-20400f4b1323&offset=0";
  useEffect(() => {
    axios
      .get()
      .then((res) => {
        setMatchListData(res?.data);
        // console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {/* <Grid container spacing={2}>
        {liveMatchData?.data?.map((data, index) => {
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
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid> */}
    </div>
  );
};

export default MatchList;
