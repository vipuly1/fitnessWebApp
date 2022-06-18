import React, { useContext } from 'react'
import { Stack, Typography } from "@mui/material"
import Icon from "../assets/icons/gym.png"
import { bodyContext } from '../pages/Home'

function BodyPart({ item }) {
    const { bodyPart, setBodyPart } = useContext(bodyContext)
    return (
        <Stack
            type="button"
            alignItems="center"
            justifyContent="center"
            className="bodyPart-card"
            sx={bodyPart === item ? { borderTop: '4px solid #FF2625', background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' } : { background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' }}
            onClick={() => {
                setBodyPart(item);
                window.scrollTo({ top: 1300, left: 100, behavior: 'smooth' });
            }}
        >
            <img src={Icon} alt="dumbell" style={{ width: "40px", height: "40px" }} />
            <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize"> {item}</Typography>
        </Stack>
    )
}

export default BodyPart