import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

const Navigation = (props) => {
  return (
    <ul>
      <NavigationItem section='home' />
      <NavigationItem section='about me' />
      <NavigationItem section='portfolio' />
      <NavigationItem section='contact' />
    </ul>
  )
};

export default Navigation;