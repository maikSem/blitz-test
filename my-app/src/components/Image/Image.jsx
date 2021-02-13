import React from 'react';
import isRetina from "../../additional/Retina";
import image_mobile_1x from '../../img/Jason_Wood_mobile@1x.jpg';
import image_mobile_2x from '../../img/Jason_Wood_mobile@2x.jpg';
import image_table_1x from '../../img/Jason_Wood_table@1x.jpg';
import image_table_2x from '../../img/Jason_Wood_table@2x.jpg';

const Image = ({alt}) => {
  return (
    <div className='wrapper'>
      <picture>
        <source media='(min-width: 468px)' srcSet={isRetina(image_table_1x, image_table_2x)}/>
        <img className='img img-main' src={isRetina(image_mobile_1x, image_mobile_2x)} alt={alt}/>
      </picture>
    </div>
  )
};

export default Image;