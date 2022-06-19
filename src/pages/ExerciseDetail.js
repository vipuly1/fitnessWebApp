import React,{ useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {Box,Stack, Typography } from "@mui/material"
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'
import { fetchData } from '../utils/fetchData'
function ExerciseDetail() {
  const [exerciseDetail, setExerciseDetail]= useState({})
  const [exerciseVideos, setExerciseVideos] = useState([])
  const [targetMuscleData, setTargetMuscleData] = useState([])
  const [targetEquipmentData, setTargetEquipmentData] = useState([])


  const {id} = useParams()
  
  useEffect(()=>{
    const fetchExerciseDetailsData = async ()=>{
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com"
      const youtubeVideoUrl = "https://youtube-search-and-download.p.rapidapi.com"

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, "exerciseOptions")
      console.log(exerciseDetailData)
       await setExerciseDetail(exerciseDetailData)

      const youtubeVideosData = await fetchData(`${youtubeVideoUrl}/search?query=${exerciseDetailData.name}`, "youtubeOptions")
      setExerciseVideos(youtubeVideosData.contents)

      console.log(exerciseDetail)
      const targetMuscleExerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, "exerciseOptions")
      setTargetMuscleData(targetMuscleExerciseDetailData)

      const targetEquipmentExerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, "exerciseOptions")
      setTargetEquipmentData(targetEquipmentExerciseDetailData)
      
    }
    window.scrollTo(0, 0)
    fetchExerciseDetailsData()
  }, [id])
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail}/>
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
    <SimilarExercises targetMuscleExercises={targetMuscleData} equipmentExercises={targetEquipmentData}/> 
    </Box>
  )
}

export default ExerciseDetail