import React from 'react';

const Image = ({imgUrl, alt}) => {
  return (
    <div>
      <img src={imgUrl} alt={alt}/>
    </div>
  )
};

export default Image;