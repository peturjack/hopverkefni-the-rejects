import styled from "styled-components";
import { motion } from "framer-motion";

 const ButtonPrimary = styled(motion.button) `
    font-size: 1.6rem;
    padding: 1rem;
    border: none;
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
    background-color: beige;
    &&:hover {
        background-color: #dadaba;
    }
`



export { ButtonPrimary, AppLoginButton };

