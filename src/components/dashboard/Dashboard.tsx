import React, { Component } from "react";
import { auth } from "../../lib/firebase";
import { signOut } from "firebase/auth";

const Dashboard = () => {
  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out");
      })
      .catch((error) => {
        console.log("Error: " + error);
        console.log("Error Message: " + error.message);
      });
  };

  return (
    <div>
      <h1>
        {/* {auth.currentUser != null ? `${auth.currentUser.email}` : "Not authenticated"} */}
      </h1>
      <button onClick={userSignOut}>
        Sign out
      </button>
    </div>
  );
};
export default Dashboard;
