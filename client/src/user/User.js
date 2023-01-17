import React from "react";
import { useNavigate } from "react-router-dom";
// import Navigator from "./user/Navigator.js";
// import Header from "./components/Header"

function User({ updateUser, user }) {
  const navigate = useNavigate();

  const handleSignOut = () => {
    console.log("it works");
    fetch(`/logout/${user.id}`, {
      method: "DELETE",
    }).then((response) => {
      if (response.ok) {
        updateUser(false);
        navigate("/");
        //redirect user to login
      }
    });
  };

  return (
    <>
    {/* <Header/> */}
      {/* <Navigator /> */}
      <h1>Hello User</h1>
      <br />
      <button onClick={handleSignOut}>Sign Out</button>
    </>
  );
}

export default User;
