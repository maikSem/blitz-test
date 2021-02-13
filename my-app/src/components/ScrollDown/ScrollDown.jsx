import React from 'react';
import Paragraph from "../Paragraph/Paragraph";

const ScrollDown = ({text}) => {
  return (
    <div className='scroll'>
      <Paragraph styleClassText='scroll-text' text={text}/>
      <span className='scroll-arrow'></span>
    </div>
  )
};

export default ScrollDown;