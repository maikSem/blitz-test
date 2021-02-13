import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationMenu = ({addClassList, addClassItem, addClassLink}) => {
  return (
    <nav className='nav'>
      <ul className={`nav-list ${addClassList ? addClassList : ''}`}>
        <NavigationItem section='home' addClassItem={addClassItem} addClassLink={addClassLink}/>
        <NavigationItem section='about me' addClassItem={addClassItem} addClassLink={addClassLink}/>
        <NavigationItem section='portfolio' addClassItem={addClassItem} addClassLink={addClassLink}/>
        <NavigationItem section='contact' addClassItem={addClassItem} addClassLink={addClassLink}/>
      </ul>
    </nav>
  )
};

export default NavigationMenu;