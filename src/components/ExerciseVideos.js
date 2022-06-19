import React from 'react'
import { Box, Stack, Typography, Button } from "@mui/material"

function ExerciseVideos({exerciseVideos, name}) {
   // console.log(exerciseVideos)
    if(!exerciseVideos) return "loading..."
  return (
    <Box sx={{ marginTop: { lg: '100px', xs: '20px' } }} p="20px">
    <Typography variant="h3" mb="33px">Watch <span style={{color:"#ff2625", textTransform:"capitalize"}}>{name}</span> exercise videos</Typography>
    <Stack justifyContent="flex-start" alignItems="center" flexWrap="wrap" 
    sx={{flexDirection: {lg:"row"}, gap:{lg:"100px", xs:"0"}, ml: {lg:"36px"}, mb:"0"} }>
        {exerciseVideos?.slice(0,6).map((item, index)=>{
            return(
                <a key={index}
                className="exercise-video"
                target="_blank"
                rel='noreferrer'
                href={`https://www.youtube.com/watch?v=${item.video.videoId}`}>
                    <img style={{margin:"0",borderTopLeftRadius: '20px' ,borderBottomRightRadius: '20px'}} src={item.video.thumbnails[0].url} alt={item.video.title}/>
                <Box textAlign="center">
                    <Typography variant="h6" sx={{color:"#808080", fontWeight:500}}>{item.video.title} </Typography>
                    <Typography variant="h6" fontSize="17px"sx={{color:"#060613"}}>{item.video.channelName} </Typography>

                </Box>
                </a>
            )
        })}

    </Stack>
    
    
    </Box>
  )
}

export default ExerciseVideos