import React, {Fragment} from 'react';

const Title = ({title, styleClass}) => {
  return (
    <Fragment>
      <h1 className={styleClass}>{title}</h1>
    </Fragment>
  )
};

export default Title;