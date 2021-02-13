import React, { useState } from 'react';
import NavigationMenu from "../NavigationMenu";

const MenuBurger = () => {

  const [menu, setMenu] = useState(false);

  const openMenu = () => {
   setMenu(true)
  };

  const closeMenu = () => {
    setMenu(false)
  };

  const openCloseMenu = () => {
    menu ? closeMenu() : openMenu();
  }

  return (
    <div className='burger'>
      <div>
       <button className='burger-button' onClick={() => {openCloseMenu()}}>∞ MENU</button>
      </div>
      {menu &&
      <NavigationMenu/>
      }
    </div>
  )
};

export default MenuBurger;