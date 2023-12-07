import { StyledNav} from './Navbar.styled'
import React from 'react';

// Defines the properties that the Navbar component will accept
interface Props {
    children: React.ReactNode;
}

const Navbar: React.FC<Props> = ({ children }) => {
    return (
        // children prop allows you to pass any React elements as children to the Navbar component.
        <StyledNav>
            {children}
        </StyledNav>
    )     
};

export default Navbar
 