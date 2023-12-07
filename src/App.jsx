import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Health from "./pages/Health"
import Entertainment from './pages/Entertainment'
import Technology from './pages/Technology'
import Sport from './pages/Sport'
import MainLayOut from './layout/MainLayOut'
import Business from './pages/Business'
import Economy from './pages/Economy'
import { Education } from './pages/Education'




const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayOut />}>
        <Route index element={<Home />} />
        <Route path="/business" element={<Business />} />
        <Route path="/economy" element={<Economy />} />
        <Route path="/health" element={<Health />} />
        <Route path="/sport" element={<Sport />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/education" element={<Education />} />
      </Route>
    </Routes>
  );
}

export default App