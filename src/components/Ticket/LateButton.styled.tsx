import styled from 'styled-components';
import { motion } from 'framer-motion';

export const popUpAnimation = {
  hidden:{
    opacity: 1,
    y: "100vh",
    x: "-50%",
  },
  visible:{
    opacity: 1,
    y: -250,
    x: "-50%",
    transition:{
      duration: 0.5
    }
  },
  exit:{
    opacity: 1,
    y: "100vh",
    x: "-50%",
    transition:{
      duration: 0.5
    }
  }
}

export const Modal = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  height: 400px;
  background-color: rgb(255, 255, 255);
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 8px rgba(39, 105, 137, 0.3);
  transform: translate(-50%, -50%);    

  @media (max-width: 768px) {
    width: 80%;
    height: 70%;
    }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  margin-bottom: 4rem;
  text-align: left;
  width: 75%;
`;

export const Paragraph = styled.p`
  margin-bottom: 3rem;
  padding: 1rem;
`;

export const QuestionButton = styled.button`
  border: 1px;
  border-radius: 0.5rem;
  background-color: transparent;
  padding: 0.5rem;
  transition: .2s ease-in-out;
  color: #293437;
  
  &&:hover {
    transform: scale(1.1);
  }
`

export const Button = styled.button`
  padding: 1rem;
  border: none;
  border-radius: 1rem;
  background-color: rgba(39, 105, 137);
  font-size: 1.6rem;
  color: white;
  transition: .3s ease-in-out;
    &&:hover {
        background-color: #293437;
    }
`;

