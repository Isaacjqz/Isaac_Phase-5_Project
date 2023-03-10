import React, { useEffect, useState } from "react";
import theme from "./UserTheme";
import Navigator from "../user/Navigator";
import Header from "../user/Header";
import UserCard from "../user/UserCard";
// Material Ui imports
import { ThemeProvider } from "@mui/material/styles";
// import useMediaQuery from "@mui/material/useMediaQuery";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

const drawerWidth = 256;

function User({ updateUser, user }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("/user_feed")
      .then((res) => res.json())
      .then((data) => setCards(data)); //(data) => setCards(data)
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex", minHeight: "100vh" }}>
        <CssBaseline />
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
          <Navigator
            PaperProps={{ style: { width: drawerWidth } }}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            updateUser={updateUser}
            user={user}
          />
        </Box>
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <Header onDrawerToggle={handleDrawerToggle} user={user}/>
          <Box
            component="main"
            sx={{ flex: 1, px: 4, bgcolor: "#eaeff1" }}
          ></Box>
          {/* User cards */}
          <Container>
            <Grid container>
              {cards.map((card) => (
                <Grid>
                  <UserCard card={card} user={user} />
                </Grid>
              ))}
            </Grid>
          </Container>
          <Box component="footer" sx={{ p: 2, bgcolor: "#eaeff1" }}>
            {/* <Copyright /> */}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default User;
