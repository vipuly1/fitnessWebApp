import React from 'react'
import { useState } from "react"
import { Box } from "@mui/material"
import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'
import { createContext } from "react"

export const bodyContext = createContext()
function Home() {
  const [exercise, setExercise] = useState([])
  const [bodyPart, setBodyPart] = useState("all")
  return (
    <div>
      <Box>
        <HeroBanner />
        <bodyContext.Provider value={{ setExercise, bodyPart, setBodyPart }}>
          <SearchExercises />
          <Exercises />
        </bodyContext.Provider>
      </Box>
    </div>
  )
}

export default Home