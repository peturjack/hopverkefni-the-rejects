import styled from 'styled-components'

export const StyledLogo = styled.div`
    display: flex;
    justify-content: flex-start;
    max-width: 70px;
    max-height: 70px; //making sure the logo doesn't get too big on desktop
    padding: 0px;

    img {
        max-width: 100%;  //Added this to make sure the image doesn't exceed the div size
        max-height: 100%;
    }

    @media (max-width: 768px) {
    display: flex;
    justify-content: flex-start;
    height: 50px;
    width: 50px;
    }
`