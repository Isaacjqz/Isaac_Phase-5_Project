// import logo from './logo.svg';
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import SignUpForm from "./components/forms/SignUpForm";
import Login from "./components/forms/Login";
import Locations from "./components/user/Locations";
// import Details from "./components/Details"
import GoalsUpdate from "./components/goals/GoalsUpdate";
// import Locations from "./components/Locations.js"
// import Matches from "./components/Matches.js"
import User from "./components/user/User";
import UserSettings from "./components/user/UserSettings";
import EditProfile from "./components/user/EditProfile";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [goals, setGoals] = useState([]);
  const [update, setUpdate] = useState(true);
  const updateUser = (user) => setUser(user);

  useEffect(() => {
    fetch("/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [update]);

  useEffect(() => {
    fetch("/authorized").then((response) => {
      if (response.ok) {
        response.json().then((user) => {
          setUser(user);
        });
      }
    });
  }, []);

  useEffect(() => {
    fetch("/goals")
      .then((res) => res.json())
      .then((data) => setGoals(data));
  }, []);

  // "/" = landing page
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<SignUpForm users={users} setUsers={setUsers} user={user} />}
        />
        <Route
          path="/login"
          element={<Login updateUser={setUser} user={user} />}
        />
        <Route
          path="/user"
          element={<User goals={goals} updateUser={setUser} user={user} />}
        />
        <Route
          path="/locations"
          element={<Locations goals={goals} updateUser={setUser} user={user} users={users}/>}
        />
        <Route
          path="/goals"
          element={
            <GoalsUpdate goals={goals} updateUser={updateUser} user={user} />
          }
        />
        <Route
          path="/settings"
          element={<UserSettings updateUser={updateUser} user={user} />}
        />
        <Route
          path="/edit"
          element={
            <EditProfile
              updateUser={updateUser}
              user={user}
              setUpdate={setUpdate}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
