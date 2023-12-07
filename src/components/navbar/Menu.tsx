import React from 'react';
import { StyledMenu } from './Menu.styled';

// Defines the properties that the Menu component will accept
interface Props {
  open: boolean,   // A boolean to control the open state of the menu
  setNav: (navItem: string) => void,   // A function to set the navigation item
  // setNav is a function that performs an action: updating state
}

const Menu: React.FC<Props> = ({ open, setNav }) => {
  return (
    // Renders the StyledMenu component with the open state
    <StyledMenu open = {open} >
      <button onClick={() => setNav("about")}>About Us</button>   
      <button onClick={() => setNav("contact")}>Contact</button>
    </StyledMenu>
  );
};

export default Menu

//Buttons navigate to their connected pages when clicked. 
