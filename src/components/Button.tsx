import styled from "styled-components";
import { motion } from "framer-motion";

 const ButtonPrimary = styled.button `
    font-size: 2rem;
    padding: 2rem;
    border: none;
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
    justify-content: center;
    align-items: center;
    &&:hover {
        background-color: #dadaba;
    }
`



export { ButtonPrimary, AppLoginButton };

