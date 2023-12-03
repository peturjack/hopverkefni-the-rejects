import {useState} from 'react';
import styled from 'styled-components';

// This is the Modal after submitting form. 


const FormStyle = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  height: 400px;
  background-color: rgb(255, 255, 255);
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  box-shadow: 0px 2px 8px rgba(39, 105, 137, 0.9);
  transform: translate(-50%, -50%);

  @media (max-width: 768px) {
    width: 80%;
    height: 70%;
    };
`
const Paragraph = styled.p`
  margin-bottom: 3rem;
  padding: 1rem;
`
const Button = styled.button`
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
`
const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  margin-bottom: 8rem;
  text-align: left;
  width: 75%;
`
;


interface Props {
    setNav: (nav: string) => void;  
  }

const FormSubmit: React.FC<Props> = ({ setNav })  => {

    const handleCloseModal = () => {
        setNav('frontpage');  
        console.log('close Modal');
    };

    return (
        <FormStyle>
            <ModalContent>
                <Paragraph><span style={{display: 'flex', justifyContent: 'center', fontWeight: 600, letterSpacing: 1,}}><h1>THANK YOU!</h1></span>
                <br /><br />
                <p>Our team has received your message.<br /><br />
                Thank you so much for taking the time to write to us!</p>
                </Paragraph>
                <Button onClick={handleCloseModal} >click to close</Button>
            </ModalContent>
        </FormStyle>
    );
};

export default FormSubmit