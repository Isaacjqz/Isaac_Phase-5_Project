// import React, {useEffect, useState} from "react"
// import Grid from '@mui/material/Grid';
// // import Paper from '@mui/material/Paper';
// import Container from "@mui/material/Container";
// import UserCard from "../userCard/UserCard";
// // import User from "../user/User";

// function Card() {
//     const [cards, setCards] = useState([])
    
//     useEffect(() => {
//         fetch("/users")
//           .then((res) => res.json())
//           .then((data) => setCards(data));
//       }, []);

//       return (
//         <Container>
//             <Grid container>
//                 {cards.map(card => (
//                     <Grid item key={card.id} xs={12} md={6} lg={2}>
//                         <UserCard cards={cards}/>
//                     </Grid>
//                 ))}
//             </Grid>
//         </Container>
//       )
// }

// export default Card;