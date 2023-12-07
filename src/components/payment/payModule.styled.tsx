import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";


export const Animate = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 65%;
    bottom: 0;
    background: rgb(255,255,255);
    background-image: linear-gradient(to top, #ffffff, #f3f7fe, #e1f0fc, #cbebf6, #D8EEFA); 
    position: absolute;
    border-radius:1rem ;
    &&::placeholder{
        color: red;
    }
`
 

export const MyModal = styled(motion.div)`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
`
export const ModalImg = styled.img`
    width: 5rem;
`

export const ModalParaStyle = styled.p`
    margin-top: 1rem;
    margin-bottom: .5rem;

`