import React from "react";
import { useNavigate } from "react-router-dom";

function User ({updateUser, user}) {
    const navigate = useNavigate();

    const handleSignOut = () => {
        console.log("it works")
        fetch(`/logout/${user.id}`, {
          method: "DELETE",
        })
        .then((res) => {
          if (res.ok) {
            updateUser(false);
            navigate("/users")
            //redirect user to home
          }
        });
      };
     

    return (
        <>
        <h1> Hello User </h1>
        <br/>
        <button onClick={handleSignOut}>Sign Out</button>
        </>
    )
}

export default User