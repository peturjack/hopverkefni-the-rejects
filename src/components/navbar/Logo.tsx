import { StyledLogo } from './Logo.styled';
import myLogo from '../../assets/healthcare-hospital-medical-47-svgrepo-com.svg'

const Logo = () => {

    return (
        <StyledLogo>
            <img src={myLogo} alt="Image of a clock" />
        </StyledLogo>
    )
};

export default Logo;