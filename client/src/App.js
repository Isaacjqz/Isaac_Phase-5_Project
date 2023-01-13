// import logo from './logo.svg';
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import SignUpForm from "./components/forms/SignUpForm";
import SignInForm from "./components/forms/SignInForm";
// import Details from "./components/Details"
// import Goals from "./components/Goals.js"
// import Locations from "./components/Locations.js"
// import Matches from "./components/Matches.js"
import User from "./components/user/User";
import "./App.css";
// import 'semantic-ui-css/semantic.min.css'

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({}); // set to null in case user comes back
  const updateUser = (user) => setUser(user);

  useEffect(() => {
    fetch("/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <Routes>
      <Route path="/" element={<User 
      updateUser={updateUser}
      user = {user}
      />} />
      <Route path="/users" element={<SignUpForm />} />
      <Route path="/SignInForm" element={
      <SignInForm 
      updateUser={updateUser}
      />} />
    </Routes>
  );
}

export default App;
