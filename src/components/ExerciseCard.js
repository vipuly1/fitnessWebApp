import React from 'react'
import { Link } from "react-router-dom"
import { Button, Stack, Typography } from "@mui/material"

function ExerciseCard({ exercise }) {
    return (
        <Link to={`exercise/${exercise.id}`} className="exercise-card">
            <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />

            <Stack direction="row">
                <Button sx={{ ml: "21px", color: "#ffff", backgroundColor: "#ffa9a9", fontSize: "14px", borderRadius: "20px", texTransform: "none" }}>
                    {exercise.bodyPart}
                </Button>
                <Button sx={{ ml: "21px", color: "#ffff", backgroundColor: "#fcc757", fontSize: "14px", borderRadius: "20px", texTransform: "lowercase" }}>
                    {exercise.target}
                </Button>
            </Stack>
            <Typography ml="21px" color="#000" fontWeight="bold" sx={{ fontSize: { lg: '24px', xs: '20px' } }} mt="11px" pb="10px" textTransform="capitalize">
                {exercise.name}
            </Typography>
        </Link>
    )
}

export default ExerciseCard