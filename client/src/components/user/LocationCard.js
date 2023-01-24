import React from "react";
import { useNavigate } from "react-router-dom";
import UserCard from "./UserCard";

//Material Ui imports
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Button from "@mui/material/Button";
import Locations from "./Locations";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

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
  // console.log(user.goals)
  const [expanded, setExpanded] = React.useState(false);
  const navigate = useNavigate();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  function navigateToUpdateGoal () {
    navigate("/goals")
  }

  // const userGoal = user.goals.map(goal => [<p>{goal.goals}</p>])

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
    </>
  );
}

export default LocationCard;
