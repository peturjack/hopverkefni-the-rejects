import styled from "styled-components";

 const ButtonPrimary = styled.button `
    font-size: 1.6rem;
    padding: 1rem;
    border: none;
    background-color: #276989;
    color: white;
    border-radius: 0.3rem;
    transition: .3s ease-in-out;
    &&:hover {
        background-color: #003C59
    }
`



const AppLoginButton = styled(ButtonPrimary)`
    color: black;
    
    background-color: beige;
    &&:hover {
        background-color: #dadaba;
    }
`



export { ButtonPrimary, AppLoginButton };

