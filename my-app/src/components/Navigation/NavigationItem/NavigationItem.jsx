import React from 'react';

const NavigationItem = ({section, addClassItem, addClassLink}) => {
  return (
    <li className={`nav-item ${addClassItem ? addClassItem : ''}`}>
      <a className={`nav-link ${addClassLink ? addClassLink : ''}`} href="#">{section}</a>
    </li>
  )
};

export default NavigationItem;