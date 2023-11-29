import React, { useState } from 'react';
import styled from 'styled-components';

const Modal = styled.div`
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
    // how to position right for smaller screen?
    }
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  text-align: left;
`;

const CloseModal = styled.div`  // I want this to be part of when requesting new ticket, there should be no need for this
  height: 2rem;
  width: 100%;
  top: 10px;
  right: 10px;
  cursor: pointer;
  padding: 6rem;
  font-size: 1.6rem;
  text-align: center;

`;

const Paragraph = styled.p`
  margin-bottom: 20px;
  padding: 1rem;
`;

const Button = styled.button`
  padding: 1rem;
  border: none;
  border-radius: 1rem;
  background-color: rgb(39, 105, 137);
  font-size: 1.6rem;
  color: white;
  transition: .3s ease-in-out;
    &&:hover {
        background-color: #293437;
    }
`;

function LateButton () {
  
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const requestNewTicket = () => {
    console.log("new ticket");
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Are you running late?</button>
      {showModal && (
        <Modal>
          <ModalContent>
            <Paragraph><span style={{display: 'flex', justifyContent: 'center', fontWeight: 500,}}>LIFE HAPPENS!</span><br/><br/>If you run into trouble getting to your appointment and are running late, you can click here and request a new ticket number. 
              <br/><br/>If the clinic is about to close you will get the option to get a new ticket tomorrow. Please contact your clinic if that doesn't work for you. 
            </Paragraph>
            <Button onClick={requestNewTicket}>NEW TICKET</Button>
            <CloseModal onClick={handleCloseModal}>Click to close</CloseModal>
          </ModalContent>
        </Modal>
      )}
    </div>
  );
}

export default LateButton
