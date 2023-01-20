import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// import { Select, MenuItem, FormHelperText, FormControl, InputLabel } from '@material-ui/core';

function UserSettings({ updateUser, user }) {
  const navigate = useNavigate();

  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  const [selected, setSelected] = useState("");

  const selectionChangeHandler = (event) => {
    setSelected(event.target.value);
  };

  function deleteMyAccount() {
    // console.log("deleting");
    fetch(`/users/${user.id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          updateUser(null);
          navigate("/login");
          //redirect user to login
        }
      })
      .then(console.log);
  }

  return (
    <Grid
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      justify="flex-end"
      direction="column"
    >
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="text.primary"
      >
        {" "}
        User Settings
      </Typography>
      <Typography variant="h5" align="center" color="text.secondary">
        {" "}
        Why are you deleting your account?
      </Typography>

      {/* <FormHelperText>Why are you deleting your account?</FormHelperText> */}
      <FormControl sx={{ m: 1, minWidth: 300 }}>
        <InputLabel id="demo-simple-select-helper-label">
          Select a reason why?
        </InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="None">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Met My Gym Partner</MenuItem>
          <MenuItem value={20}>I've Reached My Goals</MenuItem>
          <MenuItem value={30}>Need To Take a Break</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 300 }}></FormControl>
      <Button
        onClick={() => deleteMyAccount()}
        variant="outlined"
        sx={{ mr: 1 }}
      >
        Delete Account
      </Button>

      {/* <button onClick={() => deleteMyAccount()}>Delete Account</button> */}
    </Grid>
  );
}

export default UserSettings;
