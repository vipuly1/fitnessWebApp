import React from 'react'
import { Box, Stack, TextField, Typography, Button } from "@mui/material"
import { useState, useEffect } from "react"
import axios from "axios";

function SearchExercises() {
    const [search, setSearch] = useState("")

    const handleClick = async () => {
        if(search){
        const options = {
            method: 'GET',
            url: 'https://exercisedb.p.rapidapi.com/exercises',
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
        };

        await axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
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
        </Stack>
    )
}

export default SearchExercises