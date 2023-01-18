import React, {useEffect, useState} from "react"
import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
import Container from "@mui/material/Container";
import UserCard from "../userCard/UserCard";
// import User from "../user/User";

function Card() {
    const [cards, setCards] = useState([])
    console.log("hello")
    useEffect(() => {
        fetch("/users")
          .then((res) => res.json())
          .then(console.log);
      }, []);

      return (
        <Container>
            <Grid container>
                {cards.map(card => (
                    <Grid item key={card.id} xs={12} md={6} lg={4}>
                        <UserCard card={card}/>
                    </Grid>
                ))}
            </Grid>
        </Container>
      )
}

export default Card;