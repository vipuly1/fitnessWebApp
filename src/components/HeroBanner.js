import React from 'react'
import { Box, Typography, Stack, Button } from "@mui/material"
import HeroBannerImg from "../assets/images/banner.png"

function HeroBanner() {
    return (
        <div>
            <Box sx={{mt:{lg: "180px", xs: "70px"}, ml:{sm: "50px"}, p:{xs: "10px"}}} position="relative" >
                <Typography fontWeight="600" fontSize="26px" color="#FF2625">
                    Fitness Club
                </Typography>
                <Typography fontWeight={600} sx={{fontSize:{lg:"44px", xs:"40px"}}} >
                    Sweat, Smile <br /> and Repeat!
                </Typography >
                <Typography fontSize="22px" lineHeight="35px" mb={3}>
                    Check out the most effective exercises
                </Typography>
                <Button variant="contained" color="error" sx={{backgroundColor:"#FF2625", mb:"50px"}}>Explore Exercises</Button>
                <Typography fontWeight={600} color="#FF2625" sx={{opacity: "0.1", display:{lg: "block", xs: "none"}, fontSize:"200px"}}>Exercise</Typography>
                <img src={HeroBannerImg} alt="HeroBannerImage" className='hero-banner-img'/>
            </Box></div>
    )
}

export default HeroBanner