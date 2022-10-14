import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Navbar/navbar";
import Card from "./features/Card";
import Dashboard from "./features/Dashboard";
import Favorites from "./features/Favorites";
import SignIn from "./features/SignIn";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route
          path="/dashboard"
          element={
            <div>
              <Nav />
              <Dashboard />
            </div>
          }
        />
        <Route
          path="/favorites"
          element={
            <div>
              <Nav />
              <Favorites />
            </div>
          }
        />
        <Route
          path="/cart"
          element={
            <div>
              <Nav />
              <Card />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
