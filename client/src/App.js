// import logo from './logo.svg';
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
// import { Router, Route } from "react-router-dom";
// import { Route } from "react-router-dom";
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
      .then(data => setUsers(data));
  }, []);
  // console.log(users)

  return (
    // <Router>
    //     <Route path="/goals">
    //       element = { <User users={users} setUsers={setUsers} /> }
    //     </Route>
    //     <Route path="/users">
    //       element = {<SignUpForm users={users} setUsers={setUsers} />}
    //     </Route>
    //     <Route path="/SignInForm">
    //       element = {<SignInForm
    //       users={user} setUsers={setUser}
    //       updateUser = {updateUser}
    //       />}
    //     </Route>
    // </Router>
    <Routes>
     
      <Route path="/" element={<User/>} />
      <Route path="/users" element={<SignUpForm/>} />
      <Route path="/SignInForm" element={<SignInForm/>} />
     
    </Routes>
  );
}

export default App;
