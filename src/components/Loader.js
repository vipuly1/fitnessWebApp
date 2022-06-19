import React from 'react'
import { Stack } from "@mui/material"
import { ThreeDots } from "react-loader-spinner"
function Loader() {
    return (
        <Stack justifyContent="center" alignItems="center" width="100%" direction="row">
            <ThreeDots color="#00BFFF" height={80} width={80} />    
        </Stack>
    )
}

export default Loader