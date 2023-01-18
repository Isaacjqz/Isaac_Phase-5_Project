import React from "react";
import Typography from '@mui/material/Typography';

function UserCard({ card }) {
  return (
  <div>
     <Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">
    Gym matches near you 
    </Typography>
    {card}
  </div>
  );
}

export default UserCard;
