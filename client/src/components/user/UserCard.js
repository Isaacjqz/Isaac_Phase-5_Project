import React from "react";
import { useNavigate } from "react-router-dom";

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

function UserCard({ card, user }) {
  // console.log(user.goals)
  const [expanded, setExpanded] = React.useState(false);
  const navigate = useNavigate();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  function navigateToUpdateGoal () {
    navigate("/goals")
  }

  const userGoal = user.goals.map(goal => [<p>{goal.goals}</p>])

  return (
    <ThemeProvider>
      <Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">
        Gym matches near you
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
              </Avatar>
            }
            action={
              <Button aria-label="settings" color="primary">
                <MoreVertIcon
                  onClick={() => {
                    navigateToUpdateGoal ()
                    // console.log("it works");
                  }}
                />
              </Button>
            }
            title={card.first_name}
            subheader="September 14, 2016"
          />
          <CardMedia
            component="img"
            height="194"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBb5p9VTP6zs-xH_475hW4n6qhbSVCsMPZ7Q&usqp=CAU"
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Users Goals and Details here part 1 
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
              <Typography paragraph>Method:</Typography>
              <Typography paragraph>
                {userGoal}
              </Typography>
              {/* <Typography paragraph>
                More Users Goals and Details here part 3
              </Typography>
              <Typography paragraph>
                More Users Goals and Details here part 4
              </Typography>
              <Typography>More Users Goals and Details here part 5</Typography> */}
            </CardContent>
          </Collapse>
        </Card>
      </Typography>
    </ThemeProvider>
  );
}

export default UserCard;
