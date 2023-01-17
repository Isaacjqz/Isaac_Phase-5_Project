import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// Material UI imports
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import CssBaseline from "@mui/material/CssBaseline";
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const SignUpForm = ({ setUsers, users, user }) => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [current_country, setCurrent_country] = useState("");
  const [current_state, setCurrent_state] = useState("");
  const [current_city, setCurrent_city] = useState("");
  const [user_name, setUser_name] = useState("");
  const [zip_code, setZip_code] = useState("");

  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);
  const theme = createTheme();

  const handleSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      age: age,
      zip_code: zip_code,
      user_name: user_name,
      password: password,
      current_country: current_country,
      current_state: current_state,
      current_city: current_city,
    };

    // send post request to the endpoint "/users"
    fetch("/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    })
      .then((response) => {
        if (response.ok) {
          response.json().then((user) => {
            setUsers(user);
            navigate("/login");
          });
        } else {
          response.json().then((json) => setErrors(json.errors));
        }
      })
      // Handles any errors that occur during the fetch request
      .catch((error) => setErrors(error));
  };

  function Copyright(props) {
    return (
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        {"Copyright © "}
        <Link color="inherit" href="https://mui.com/">
          Isaac's phase 5 Project
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

  // Sing Up Form
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="firstName"
                  name="firstName"
                  label="First name"
                  autoComplete="given-name"
                  variant="standard"
                  value={first_name}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  name="lastName"
                  label="Last name"
                  autoComplete="family-name"
                  variant="standard"
                  value={last_name}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  name="userName"
                  label="User name"
                  autoComplete="user-name"
                  variant="standard"
                  value={user_name}
                  onChange={(e) => setUser_name(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="age"
                  name="age"
                  label="Age"
                  autoComplete="age"
                  variant="standard"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  name="email"
                  label="Email Address"
                  autoComplete="email"
                  variant="standard"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  variant="standard"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="city"
                  name="city"
                  label="City"
                  autoComplete="address-level2"
                  variant="standard"
                  value={current_city}
                  onChange={(e) => setCurrent_city(e.target.value)}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="state"
                  name="state"
                  label="State/Province/Region"
                  variant="standard"
                  value={current_state}
                  onChange={(e) => setCurrent_state(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="zip"
                  name="zip"
                  label="Zip / Postal code"
                  autoComplete="postal-code"
                  variant="standard"
                  value={zip_code}
                  onChange={(e) => setZip_code(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="country"
                  name="country"
                  label="Country"
                  autoComplete="country"
                  variant="standard"
                  value={current_country}
                  onChange={(e) => setCurrent_country(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              fullWidth
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
};

export default SignUpForm;
