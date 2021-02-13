import React, {Fragment} from 'react';
import Paragraph from "../Paragraph/Paragraph";

const Text = (props) => {
  return (
    <Fragment>
      <Paragraph styleClassText='description-text'
                 text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      />
      <Paragraph styleClassText='description-add-text'
                 text='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      />
      <Paragraph styleClassText='description-signature'
                 text='Jason Wood'
      />
    </Fragment>
  )
};

export default Text;