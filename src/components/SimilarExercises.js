import React from 'react'
import {Box, Stack, Typography} from "@mui/material"
import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'

function SimilarExercises({targetMuscleExercises, equipmentExercises}) {
  return (
    <Box sx={{mt:{lg:"100px", xs: "0"}}}>
        <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#000" mb="33px">
      Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Target Muscle</span> exercises
    </Typography>
    <Stack direction="row" sx={{p:"2", position: "relative", mb:"30px"}}>
            {targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises}/> : <Loader/>}
    </Stack>
    <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#000" mb="33px">
      Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Equipment</span> exercises
    </Typography>
    <Stack direction="row" sx={{p:"2", position: "relative"}}>
            {equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises}/> : <Loader/>}
    </Stack>
    


    </Box>
  )
}

export default SimilarExercises