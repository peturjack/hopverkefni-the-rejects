import React, { useState } from 'react';
import { Modal, ModalContent, Paragraph, QuestionButton, Button } from "./LateButton.styled";

interface Props {
  requestNewTicket: () => void;  // defining the props for the requestNewTicket button
  setNav: (nav: string) => void;  
}

const LateButton: React.FC<Props> = ({ requestNewTicket, setNav }) => {
  
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);  
    setNav('ticket');  // This is for navigation when requestNewTicket is clicked
    console.log('close Modal');
  };

  return (
    <div>
      <QuestionButton onClick={handleOpenModal}>Are you running late?</QuestionButton>
      {showModal && (
        <Modal>
          <ModalContent>
            <Paragraph><span style={{display: 'flex', justifyContent: 'center', fontWeight: 600, letterSpacing: 1,}}>LIFE HAPPENS!</span><br/><br/>If you run into trouble getting to your appointment and are running late, you can click here and request a new ticket number. 
              <br/><br/>If the clinic is about to close you will get the option to get a new ticket tomorrow. Please contact your clinic if that doesn't work for you. 
            </Paragraph>
            <Button onClick={() => {requestNewTicket(); handleCloseModal();}}>NEW TICKET</Button>
            {/* Commenting out bc it is not used anymore <CloseModal onClick={handleCloseModal}>Click to close</CloseModal> */}
          </ModalContent>
        </Modal>
      )}
    </div>
  );
}

export default LateButton
