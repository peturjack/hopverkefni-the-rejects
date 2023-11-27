import React from 'react';
import { StyledMenu } from './Menu.styled';

interface Props {
  open: boolean,
}

const Menu: React.FC<Props> = ({ open }) => {
  return (
    <StyledMenu open = {open} >
      <a href="/">About Us</a>
      <a href="/">Contact</a>
    </StyledMenu>
  );
};

export default Menu;

