import React, { Dispatch, SetStateAction }  from 'react';
import { StyledMenu } from './Menu.styled';

interface Props {
  open: boolean,
  setNav: Dispatch<SetStateAction<string>>, 
}

const Menu: React.FC<Props> = ({ open, setNav }) => {
  return (
    <StyledMenu open = {open} >
      <button onClick={() => setNav("about")}>About Us</button>   
      <button onClick={() => setNav("contact")}>Contact</button>
    </StyledMenu>
  );
};

export default Menu;

// I have to make the about and contact as buttons. 
// and then use <button onClick={() => setNav("about")}>About</button> in app.tsx (or where) for the moving between pages