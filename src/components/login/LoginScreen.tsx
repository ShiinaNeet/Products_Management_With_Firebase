import { signInWithEmailAndPassword } from "firebase/auth";
import React, { Component } from "react";
import { auth } from "../../lib/firebase";

const LoginScreen = ({ navigate }) => {
  const loginUser = async (e) => {
    e.preventDefault();
    console.log(e);
    const form = new FormData(e.target);
    const email = form.get("email") as string;
    const password = form.get("password") as string;

    const res = await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log("User Logged in:", user);
        
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  return (
    <div className="bg-white rounded-2xl py-5 sm:px-5 px-2 sm:w-96 w-full max-w-sm mx-auto shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
      <form className="flex flex-col gap-y-5 p-5" onSubmit={loginUser}>
        <input
          type="text"
          autoComplete="off"
          name="email"
          placeholder="Email address"
          className="sm:w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="password"
          autoComplete="off"
          name="password"
          placeholder="Password"
          className="sm:w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          type="submit"
          className="sm:w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>
      <p className="px-5 text-left">
        Don't have an account?{" "}
        <button
          onClick={() => navigate("register")}
          className="text-blue-500 hover:underline"
        >
          Register here
        </button>
      </p>
    </div>
  );
};

export default LoginScreen;
