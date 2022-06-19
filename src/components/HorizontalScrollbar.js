import React,{useContext} from 'react'
import {Box, Typography} from "@mui/material"
import {ScrollMenu, VisibilityContext} from "react-horizontal-scrolling-menu"
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import BodyPart from "./BodyPart"
import ExerciseCard from './ExerciseCard';

function HorizontalScrollbar({data, isbodyPart}) {
  const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollPrev()} className="right-arrow">
        <img src={LeftArrowIcon} alt="right-arrow" />
      </Typography>
    );
  };
  
  const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollNext()} className="left-arrow">
        <img src={RightArrowIcon} alt="right-arrow" />
      </Typography>
    );
  };

  return(
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item , index)=>{
        return (<Box key={index}
          m="0 20px">
            {isbodyPart ? <BodyPart item={item} /> : <ExerciseCard exercise={item}/>}
        </Box>)
      })}
    </ScrollMenu>
  )
}

export default HorizontalScrollbar