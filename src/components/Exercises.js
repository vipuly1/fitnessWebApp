import React,{useState, useEffect, useContext} from 'react'
import { Pagination } from '@mui/material'
import {Box, Stack, Typography} from '@mui/material'
import { bodyContext } from '../pages/Home'
import ExerciseCard from './ExerciseCard'
import { fetchData } from './SearchExercises'


function Exercises() {
  const [currentPage , setCurrentPage] = useState(1)
  const {exercise, setExercise, bodyPart} = useContext(bodyContext)

  const exercisesPerPage = 9
  const indexOfLastExercise = currentPage * exercisesPerPage
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage
  const currentExercises = exercise.slice(indexOfFirstExercise, indexOfLastExercise)
  
  const paginate=(e, value)=>{
    setCurrentPage(value)
    window.scrollTo({top: 1550, behavior: "smooth"})
  }
  useEffect(()=>{
      const fetchBodyPartExercises = async () =>{
        let bodyExercises
        if(bodyPart === "all"){
          bodyExercises = await fetchData(`https://exercisedb.p.rapidapi.com/exercises`)
        }
        else{
          bodyExercises = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`)
        }
        setExercise(bodyExercises)
      }
      fetchBodyPartExercises()
  },[bodyPart])

  return (
    <Box id="exercises" sx={{mt:{lg: "110px"}, mt: "50px", p:"20px"}}>
      <Typography variant='h3' mb="46px">Showing Exercises</Typography>
      <Stack direction="row" flexWrap="wrap" justifyContent="center" sx={{gap:{lg:"110px", xs:"50px"}}}>
      {currentExercises.map((item, index)=>{
        return(
         <ExerciseCard key={index} exercise={item}/>
        )
      })}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercise.length > exercisesPerPage && <Pagination
        variant='outlined'
        shape="rounded"
        count={Math.ceil(exercise.length/exercisesPerPage )}
        page={currentPage}
        onChange={paginate}
        
        
        
        />}
      </Stack>


    </Box >
  )
}

export default Exercises