import React, {Fragment} from 'react';

const Paragraph = ({text, styleClassText}) => {
  return (
    <Fragment>
      <p className={styleClassText}>{text}</p>
    </Fragment>
  )
};

export default Paragraph;