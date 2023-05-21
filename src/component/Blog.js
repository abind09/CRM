import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, Grid } from "@mui/material";

const BlogData = [
  {
    herf: "data:image/png;base64,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",
    title: "World Test Championship",
    desc: " WTC Final: Injuries to Jasprit Bumrah and Rishabh Pant will affect, India, says Ian Chappell.",
  },
  {
    herf: "https://www.hindustantimes.com/ht-img/img/2023/05/21/550x309/Collage_Maker-21-May-2023-04-55-PM-5964_1684668321407_1684668331580.jpg",
    title: "Indian Cricket",
    desc: "'Only 2 players in Indian history have performed there. Yuvraj and Dhoni'",
  },
  {
    herf: "https://www.hindustantimes.com/ht-img/img/2023/05/21/550x309/jadeja_tweet_1684666236123_1684666242677.jpg",
    title: "IPL",
    desc: " Ravindra Jadeja's cryptic 'definitely' tweet day after heated conversation with MS Dhoni sends fans into overdrive",
  },
];

const Blog = () => {
  return (
    <div>

      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 5,
          fontSize: 40,
          fontWeight: 500,
        }}
      >
        Latest Blog
      </Typography>
      <Grid sx={{ml:{md:8}, mr:{md:8}}}>

      <Grid sx={{ mt: 1 }} container spacing={1}>
        {BlogData?.map((data, index) => {
          return (
            <Grid item xs={12} md={4} key={index}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={data?.herf}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {data?.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {data?.desc}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  {/* <Button size="small" color="primary">
                    Share
                  </Button> */}
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      </Grid>
    
    </div>
  );
};

export default Blog;
