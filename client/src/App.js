// import logo from './logo.svg';
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import SignUpForm from "./components/forms/SignUpForm";
import Login from "./components/forms/Login";
// import Details from "./components/Details"
// import Goals from "./components/Goals.js"
// import Locations from "./components/Locations.js"
// import Matches from "./components/Matches.js"
import User from "./user/User";
import "./App.css";
// import 'semantic-ui-css/semantic.min.css'

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const updateUser = (user) => setUser(user);

  useEffect(() => {
    fetch("/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  useEffect(() => {
    fetch("/authorized").then((response) => {
      if (response.ok) {
        response.json().then((user) => {
          setUser(user);
        });
      }
    });
  }, []);

  // "/" = landing page
  return (
    <Routes>
      <Route
        path="/"
        element={<SignUpForm users={users} setUsers={setUsers} user={user} />}
      />
      <Route
        path="/login"
        element={<Login updateUser={updateUser} user={user} />}
      />
      <Route
        path="/Logout"
        element={<User updateUser={updateUser} user={user} />}
      />
      {/* <Route path="/users" element={<Login updateUser={updateUser} />} /> */}
    </Routes>
  );
}

export default App;
