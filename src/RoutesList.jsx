import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Dogs from "./Home";
import Duke from "./Duke";
import Perry from "./Perry";
import Tubby from "./Tubby";
import Whiskey from "./Whiskey";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/dogs" element={<Dogs />} />
      <Route path="/dogs/duke" element={<Duke />} />
      <Route path="/dogs/perry" element={<Perry />} />
      <Route path="/dogs/tubby" element={<Tubby />} />
      <Route path="/dogs/whiskey" element={<Whiskey />} />
      <Route path="*" element={<Navigate to="/dogs" />} />
    </Routes>
  );
}

export default AppRoutes;
