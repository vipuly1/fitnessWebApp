import React from 'react'
import { useContext } from "react"
import { bodyContext } from '../pages/Home'
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';


function BodyPart({ item }) {

  const { bodyPart, setBodyPart } = useContext(bodyContext)
  console.log(bodyPart)
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={bodyPart === item ? { borderTop: '4px solid #FF2625', background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' , margin: "0 15px", pointerEvents: "none"} : { background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px', margin: "0 15px", pointerEvents: "none"}}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      }}
      >
      <img src={Icon} alt="dumbbell" style={{ width: '40px', height: '40px' }} />
    <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize"> {item}</Typography>
     </Stack>
  )
}

export default BodyPart