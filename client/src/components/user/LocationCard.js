import React from "react";

import UserCard from "./UserCard";

import { styled } from "@mui/material/styles";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

// import Typography from "@mui/material/Typography";
// import { styled } from "@mui/material/styles";
// import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
// import CardMedia from "@mui/material/CardMedia";
// import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
// import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Button from "@mui/material/Button";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function LocationCard({ location, user, users }) {
  const [expanded, setExpanded] = React.useState(false);

  // console.log(users.zip_code)

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      {/* <h1>{location.current_state}</h1>
      <h2>{location.current_country}</h2> */}

      <Container>
        <Grid container>
          {location.users.map((card) => (
            <ThemeProvider>
              <Typography
                sx={{ my: 5, mx: 2 }}
                color="text.secondary"
                align="center"
              >
                {/* Gym matches near you */}
                <Card sx={{ maxWidth: 345 }}>
                  <CardHeader
                    title={card.first_name}
                    subheader="September 14, 2016"
                  />
                  <CardMedia
                    component="img"
                    height="194"
                    image={card.img_url}
                    // alt="Paella dish"
                  />
                  <Typography paragraph>
                  <h3>
                    {/* {card.zip_code ? ( */}
                      <p>Zip: {card.zip_code}</p>
                    {/* // ) : null} */}
                  </h3>
                  </Typography>
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {/* Users Goals and Details here part 1  */}
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                    <ExpandMore
                      expand={expanded}
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </ExpandMore>
                  </CardActions>
                  <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                      <Typography paragraph>Details:</Typography>
                      Country: {card.current_country}
                      <Typography paragraph></Typography>
                      <Typography paragraph>
                        State: {card.current_state}
                      </Typography>
                      <Typography paragraph>
                        City: {card.current_city}
                      </Typography>
                    </CardContent>
                  </Collapse>
                </Card>
              </Typography>
            </ThemeProvider>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default LocationCard;
