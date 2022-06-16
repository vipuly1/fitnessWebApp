import './App.css';
import React from "react"
import { Box } from "@mui/material"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import ExerciseDetail from "./pages/ExerciseDetail"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="exercise/:id" element={<ExerciseDetail/>}></Route>
          </Routes>
        </Router>
        <Footer />
      </Box>
    </div>
  );
}

export default App;
