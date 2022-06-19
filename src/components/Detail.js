import React from 'react'
import { Box, Stack, Typography, Button } from "@mui/material"
import BodyPartImage from "../assets/icons/body-part.png"
import TargetImage from "../assets/icons/target.png"
import EquipmentImage from "../assets/icons/equipment.png"

function Detail({ exerciseDetail }) {
    const { name, equipment, bodyPart, target, gifUrl } = exerciseDetail
    const extraDetail = [
        {
            icon: BodyPartImage,
            name: bodyPart
        },
        {
            icon: TargetImage,
            name: target
        },
        {
            icon: EquipmentImage,
            name: equipment
        }
    ]

    return (
        <Stack
            gap="60px"
            sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}>

            <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />

            <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>

                <Typography variant="h3" sx={{ fontSize: { lg: '64px', xs: '30px' } }} textTransform="capitalize">{name}</Typography>

                <Typography variant="h6" color="#4F4C4C" sx={{ fontSize: { lg: '24px', xs: '18px' } }}>
                    Exercises keep you strong.{' '}
                    <span style={{ textTransform: 'capitalize' }}>{name}</span> bup is one
                    of the best  exercises to target your {target}. It will help you improve your{' '}
                    mood and gain energy.
                </Typography>
            
            {extraDetail.map((item, index) => {
                return (
                    <Stack key={index} direction="row" gap="24px" alignItems="center">
                        <Button sx={{ background: "#fff2db", borderRadius: "50%", width: "100px", height: "100px" }}><img src={item.icon} alt={bodyPart} height="50px" /></Button>
                        <Typography variant="h5" textTransform="capitalize" sx={{ fontSize: { lg: '30px', xs: '20px' } }}>{item.name}</Typography>
                    </Stack>
                )

            })}
            </Stack>
        </Stack>

    )
}

export default Detail