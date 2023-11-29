import { StyledNav} from './Navbar.styled'
import React from 'react';

interface Props {
    children: React.ReactNode;
}

const Navbar: React.FC<Props> = ({ children }) => {
    return (
        <StyledNav>
            {children}
        </StyledNav>
    
    )     
};

export default Navbar
 