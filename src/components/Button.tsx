import styled from "styled-components";


 const ButtonPrimary = styled.button `
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    padding: 2rem;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width:200px;
    background-color: #276989;
    color: white;
    border-radius: 1rem;
    transition: .3s ease-in-out;
    &&:hover {
        background-color: #003C59;
    }
`

const AppLoginButton = styled(ButtonPrimary)`
    color: black;
    background-color:white;
    font-size:1.6rem;
    height: 45px;
    width: 200px;
    &&&:hover {
        background-color: rgb(182,230,233);
    }
`


export { ButtonPrimary, AppLoginButton };

