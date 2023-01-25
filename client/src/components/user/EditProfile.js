import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// material ui imports
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function EditProfile({ user, updateUser, setUpdate }) {
  const [edit, setEdit] = useState([]);
  const [first_name, setFirstName] = useState(user.first_name);
  const [last_name, setLastName] = useState(user.last_name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);
  const [age, setAge] = useState(user.age);
  const [current_country, setCurrent_country] = useState(user.current_country);
  const [current_state, setCurrent_state] = useState(user.current_state);
  const [current_city, setCurrent_city] = useState(user.current_city);
  const [user_name, setUser_name] = useState(user.user_name);
  const [zip_code, setZip_code] = useState(user.zip_code);

  const theme = createTheme();

  const navigate = useNavigate();

  //   const handleEdit = (id) =>
  //     setEdit((currentUser) => currentUser.filter((p) => p.id !== id));
  const handleEditUser = (updatedUser) =>
    setEdit((currentUser) => {
      return currentUser.map((user) => {
        if (user.id === updatedUser.id) {
          return updatedUser;
        } else {
          return user;
        }
      });
    });

  const editUser = {
    first_name: first_name || "",
    last_name: last_name || "",
    email: email || "",
    age: age || "",
    zip_code: zip_code || "",
    user_name: user_name || "",
    password: password || "",
    current_country: current_country || "",
    current_state: current_state || "",
    current_city: current_city || "",
  };

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`users/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editUser),
    })
      .then((response) => response.json())
      .then((data) => {
        updateUser(data);
        handleEditUser(data);
        setUpdate((prev) => !prev);
        navigate("/user");
      });
  }
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
            Edit Profile
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
                  value={editUser.first_name}
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
                  value={editUser.last_name}
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
                  value={editUser.user_name}
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
                  value={editUser.age}
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
                  value={editUser.email}
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
                  value={editUser.password}
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
                  value={editUser.current_city}
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
                  value={editUser.current_state}
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
                  value={editUser.zip_code}
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
                  value={editUser.current_country}
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
              Submit Edit
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/user" variant="body2">
                  Back To User Page
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
    </ThemeProvider>
  );
}

export default EditProfile;
