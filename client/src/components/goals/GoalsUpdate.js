import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function GoalsUpdate({ goals, updateUser, user }) {
  const [goal, setGoal] = useState([]);
  const navigate = useNavigate();
//   console.log(goals);

  const updateGoal = {
    goal: goal || "",
  };

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`goals/${goals.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateGoal),
    })
      .then((r) => r.json())
      .then((data) => {
        updateUser(data);
        navigate("/user");
        // setWasClicked(false);
      });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Goals</label>
        <input
          value={updateGoal.goal}
          onChange={(e) => setGoal(e.target.value)}
        />
        <button onClick={() => console.log("Update Goals")}> Update </button>
      </form>
    </>
  );
}

export default GoalsUpdate;
