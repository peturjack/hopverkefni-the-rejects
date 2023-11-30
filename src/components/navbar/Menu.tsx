import React from 'react';
import { StyledMenu } from './Menu.styled';

interface Props {
  open: boolean,
  setNav: (navItem: string) => void,
}

const Menu: React.FC<Props> = ({ open, setNav }) => {
  return (
    <StyledMenu open = {open} >
      <button onClick={() => setNav("about")}>About Us</button>   
      <button onClick={() => setNav("contact")}>Contact</button>
    </StyledMenu>
  );
};

export default Menu
