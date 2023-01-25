import React from "react";
import { useNavigate } from "react-router-dom";
import UserCard from "./UserCard";

import { styled } from "@mui/material/styles";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

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

function LocationCard({ location, user }) {
  const [expanded, setExpanded] = React.useState(false);
  const navigate = useNavigate();

  // console.log(user.goals);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  function navigateToUpdateGoal() {
    navigate("/goals");
  }

  return (
    <>
      <h1>{location.current_state}</h1>
      <h2>{location.current_country}</h2>
      <h3>Zip: {location.zip_code}</h3>
      {
        <Container>
          <Grid container>
            {location.users.map((card) => (
              <Grid>
                <UserCard card={card} user={user} />
              </Grid>
            ))}
          </Grid>
        </Container>
      }

      {/* <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
        <Typography gutterBottom variant="h5" component="div">
              {user.first_name}
            </Typography>
          <CardMedia
            component="img"
            height="140"
            // image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Country: {location.current_country}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              State: {location.current_state}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              City: {location.current_city}
            </Typography>
            <Typography variant="h5" color="text.secondary">
              {user.goals.map((goal) => [<p>{goal.goals}</p>])}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card> */}
    </>
  );
}

export default LocationCard;
