import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Login({updateUser}) {
  const [errors, setErrors] = useState([])
  const navigate = useNavigate();

    const [formData, setFormData] = useState({
      email: "",
      password: ""
  })

  const handleSubmit = event => {
    event.preventDefault();
    //Logs in user 
    fetch("/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(formData),
    }).then((response) => {
        if (response.ok) {
            response.json().then((user) => {
                updateUser(user)
                navigate("/");
            })
        } else {
            response.json().then((json) => setErrors(json.errors));
        }
    })
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
        //   onChange={e => setEmail(e.target.value)}
        onChange={handleChange}

        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
        //   onChange={e => setPassword(e.target.value)}
        onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Sign In</button>
      {errors ? errors.map((e) => <div>{e[0] + ": " + e[1]}</div>) : null}
    </form>
  );
}

export default Login;
