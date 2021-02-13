import React, {useEffect, useState} from 'react';
import NavigationMenu from '../Navigation/NavigationMenu';
import MenuBurger from "../Navigation/MenuBurger/MenuBurger";

const Header = () => {

  const [width, setWidth] = useState(() => window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth)
    })
  }, [width]);

  return (
    <header className='header'>
      {width > 768 ? <NavigationMenu/> : <MenuBurger/>}
    </header>
  )
};

export default Header;