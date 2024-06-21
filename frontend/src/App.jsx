import { useState, useEffect, useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { AuthContext } from './context/AuthContext';
import Header from "./components/Header";
import Login from "./components/Login";
import Posts from "./components/Posts";
import Signup from "./components/Signup";
import "./App.css";

function App() {
  const { user, setUser } = useContext(AuthContext);

  useEffect(() => {
    const isToken = localStorage.getItem("token");
    if (isToken) setUser(true);
  }, []);

  return (
    <div className="bg-slate-500 m-20 mx-96 opacity-60 rounded-lg">
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/posts"
          element={user ? <Posts /> : <Navigate to="/login" />}
        />
      </Routes>
    </div>
  );
}

export default App;
