import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUpForm = ({ setUsers, users }) => {
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
          setUsers(user)
          navigate("/");
        });
      } else {
        response.json().then((json) => setErrors(json.errors));
      }
    })
    // Handles any errors that occur during the fetch request
    .catch((error) => setErrors(error))
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          name="first_name"
          value={first_name}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Last Name:
        <input
          type="text"
          name="last_name"
          value={last_name}
          onChange={(e) => setLastName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label>
        Age:
        <input
          type="number"
          name="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </label>
      <br />
      <label>
        Zip Code:
        <input
          type="text"
          name="zip_code"
          value={zip_code}
          onChange={(e) => setZip_code(e.target.value)}
        />
      </label>
      <br />
      <label>
        User Name:
        <input
          type="text"
          name="user_name"
          value={user_name}
          onChange={(e) => setUser_name(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <label>
        Current Country:
        <input
          type="text"
          name="current_country"
          value={current_country}
          onChange={(e) => setCurrent_country(e.target.value)}
        />
      </label>
      <br />
      <label>
        Current State:
        <input
          type="text"
          name="current_state"
          value={current_state}
          onChange={(e) => setCurrent_state(e.target.value)}
        />
      </label>
      <br />
      <label>
        Current City:
        <input
          type="text"
          name="current_city"
          value={current_city}
          onChange={(e) => setCurrent_city(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Sign up</button>
      {errors ? errors.map((e) => <div>{e}</div>) : null}
    </form>
  );
};

export default SignUpForm;
