import React from 'react';
import { StyledLogo } from './Logo.styled';
import myLogo from '../../assets/logo.svg';

interface Props {
    setNav: (navItem: string) => void, 
    // the prop setNav takes the argument navItem and returns nothing. This changes the navigation state. 
}


const Logo: React.FC<Props> = ({setNav}) => {
 
    return (
        <StyledLogo onClick={() => setNav("frontpage")}>  
            <img src={myLogo} alt="A blue and white medical cross logo" />
        </StyledLogo>
    )
};

export default Logo;

// Need to fix the onClick for the logo 