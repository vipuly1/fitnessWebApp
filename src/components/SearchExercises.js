import React from 'react'
import { Box, Stack, TextField, Typography, Button} from "@mui/material"
import { useState, useEffect, useContext} from "react"
import axios from "axios";
import HorizontalScrollbar from './HorizontalScrollbar';
import { bodyContext } from '../pages/Home';
import {fetchData} from "../utils/fetchData"


function SearchExercises() {

    const {setExercise} = useContext(bodyContext)

    const [search, setSearch] = useState("")
    
    const [bodyParts, setBodyParts] = useState([])

    
    useEffect(()=>{
            const fetchBodyParts = async () =>{ 
            const bodyParts = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', "exerciseOptions")
            setBodyParts(["all", ...bodyParts])
            }
            fetchBodyParts()
    },[])

    const handleClick = async () => {
        if (search) {

            let exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', "exerciseOptions")

            const searchedExercise = exerciseData.filter((item) => {
                return (item.name.toLowerCase().includes(search)
                    || item.target.toLowerCase().includes(search)
                    || item.bodyPart.toLowerCase().includes(search)
                    || item.equipment.toLowerCase().includes(search))
            })
            console.log(searchedExercise);
            setSearch("")
            setExercise(searchedExercise)

        }

    }
    return (
        <Stack alignItems="center" justifyContent="center" p="20px">
            <Typography fontWeight={700} sx={{
                fontSize: {
                    lg: "44px", sm: "30px"
                }, textAlign: "center", mt: "37px"
            }}>
                Awesome Exercises You<br />
                Should Know
            </Typography>
            <Box position="relative">
                <TextField placeholder="Search Exercises" type="text" sx={{
                    input: {
                        fontWeight: "700", border: "none", borderRadius: "4px"
                    }, width: { lg: "800px", xs: "300px" }, backgroundColor: "#ffff", borderRadius: "40px",
                }} value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())}        ></TextField>
                <Button className="search-btn" sx={{ backgroundColor: "#FF2625", color: "#ffff", textTransform: "none", width: { lg: "175px", xs: "80px" }, fontSize: { lg: "20px", xs: "14px" }, height: "56px", position: "absolute", right: "0" }} onClick={handleClick}>Search</Button>
            </Box>
            <Box sx={{position:"relative", p: "20px", width: "100%"}}>
                <HorizontalScrollbar data={bodyParts} isbodyPart />
            </Box>
        </Stack>
    )
}

export default SearchExercises