import React, { Component, useState } from "react";
import { auth } from "../../lib/firebase";
import { signOut } from "firebase/auth";
import Navbar from "../Navbar";
import Products from "../../pages/products/Products";
import Users from "../../pages/users/Users";
import Suppliers from "../../pages/suppliers/Suppliers";


const Dashboard = () => {
  const [page, setPage] = useState("Suppliers");

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
    <div className="flex">
      <div className="flex w-fit">
        <Navbar setPage={setPage}/>
      </div>
      <div className="w-full p-5">
        <div className="text-white text-2xl">
          <h1>{page}</h1>
        </div>
        <div className="bg-slate-720 shadow-lg h-screen pt-5">
           {page === "Products" && <Products />}
            {page === "Users" && <Users />}
            {page === "Suppliers" && <Suppliers />}
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
