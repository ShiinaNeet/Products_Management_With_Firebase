import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { auth } from "./lib/firebase";
import { db } from "./lib/firebase";
import { storage } from "./lib/firebase";
import { useUserStore } from "./lib/UserStore";

import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import { onAuthStateChanged } from "firebase/auth";
import {Toaster}  from "@/components/ui/toaster"
function App() {
  const [user, setUser] = useState(false);

  const { currentUser, isLoading, fetchUserInfo } = useUserStore();

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (currentUser) => {
      fetchUserInfo(currentUser);
    });
    return () => unSub();
  }, [fetchUserInfo]);

  if (isLoading) return <div className="text-2xl w-full ">Loading...</div>;

  return (
    <div className="h-screen w-screen">
      {currentUser ? <Dashboard /> : <Login />}
        <Toaster duration={1000}/>

    </div>
  );
}

export default App;
