import {
  PaymentButtons,
  FlexContainer,
  FlexContainerColumn,
  PaymentButtonContainer,
} from "./paymentButtons";
import { useState } from "react";
import { ButtonPrimary } from "../Button";
import masterCard from "../../assets/mastercard.svg";
import visa from "../../assets/visa.svg";
import applePay from "../../assets/apple-pay.svg";
import googlePlay from "../../assets/google-pay.svg";
import { BackgroundClose,ChoosePaymentContainer, LiveLocation, PaymentImage, LiveLocationText, LiveLocationBall } from "./choosePaymentMethod";
import { Animate } from "./payModule.styled";
import { dropIn } from "./popupModal";
import PopupModal from "./popupModal";
import React from "react";
import { AnimatePresence } from "framer-motion";




// Define the properties for the Payment component
interface Props {
  clinic: string
  setNav: (nav: string) => void;  
}


// Define the Payment component
const Payment: React.FC<Props> = ({ setNav, clinic }) => {
  
   // State for managing the modal's open/close status
  const [modalOpen, setModalOpen] = useState(false)

  // Function to open the modal
  const handleModalOpen = () => {
    setModalOpen(true)
  }

  // Function to close the modal and navigate to "ticket"
  const handleModalClose = () => {
    setModalOpen(false)
    setNav("ticket")
    
  }

    // Function to only close the modal
  const handleModalOnlyClose = () => {
    setModalOpen(false)
   
  }

  // Render the Payment component
  return (
    <>
      {/* AnimatePresence is a component from Framer Motion that enables exit animations. 
    It allows components to animate out when they're removed from the React tree. */}
    <AnimatePresence >
      <FlexContainerColumn
        style={{
          width: "100%",
        }}
      >
        <h1 style={{ marginBottom: "2rem" }}>{clinic}</h1>
        <LiveLocation>
          <FlexContainerColumn style={{ height: "100%" }}>
            <FlexContainer
              style={{
                paddingTop: "1.5rem",
              }}
            >
            <BackgroundClose onClick={handleModalOnlyClose} />
          
              <LiveLocationBall />
              <LiveLocationText>Live from this location</LiveLocationText>
            </FlexContainer>
            <span style={{ fontSize: "5rem" }}>196</span>
            <p style={{ paddingBottom: "1.5rem" }}>
              Estimated wait time is 42 minutes
            </p>
          </FlexContainerColumn>
        </LiveLocation>

        <ChoosePaymentContainer>
          <h3 style={{ fontWeight: "500rem", fontSize: "2rem", color: "#293437" }}>
            CHOOSE PAYMENT METHOD
          </h3>
          <p style={{ padding: "1.2rem" }}>
            Fee for open clinic visits depend upon individual status in the
            Icelandic health care system.
            <br /> <br />
            Please note that payments are automatic after your appointment and
            are non-refundable. <br /> <br />
            Your card will be charged in case of a no-show.
          </p>
        </ChoosePaymentContainer>

        <PaymentButtonContainer>
          <FlexContainer>
              {/* The PaymentButtons component triggers the handleModalOpen function upon a click event, 
              which controls the opening of the modal. */}            
          <PaymentButtons onClick={handleModalOpen}>
              <PaymentImage src={masterCard} alt="mastercard payment option" />
            </PaymentButtons>
            <PaymentButtons onClick={handleModalOpen}>
              <PaymentImage src={visa} alt="visa payment option" />
            </PaymentButtons>
          </FlexContainer>
          <FlexContainer>
            <PaymentButtons onClick={handleModalOpen}>
              <PaymentImage src={applePay} alt="apple payment option" />
            </PaymentButtons>
            <PaymentButtons onClick={handleModalOpen}>
              <PaymentImage src={googlePlay} alt="google payment option" />
            </PaymentButtons>
          </FlexContainer>
        </PaymentButtonContainer>
      </FlexContainerColumn>
      {/* If modalOpen is true, render the PopupModal with an exit animation */}
      {modalOpen && (
        
   
       //* Animate is a component from Framer Motion that allows you to animate the children components.
    //"key" prop helps React identify which items have changed, are added, or are removed, and is useful in animations when you're animating one item in or out.
   // "variants" prop is used to define animation states.
    //"dropIn" is an object that defines the animation states (hidden, visible, exit).
    //"initial" prop defines the initial state of the animation. Here it's set to "hidden".
    //"animate" prop defines the state to animate to. Here it's set to "visible".
   // "exit" prop defines the state when the component is exiting the React tree. Here it's set to "exit".
         <Animate key="modal" variants={dropIn} initial="hidden" animate="visible" exit="exit">
   
            <PopupModal>
              <ButtonPrimary
                onClick={handleModalClose}
                style={{ width: "100%", height: "5.4rem", marginTop: "4rem" }}
              >
                ADD PAYMENT
              </ButtonPrimary>
            </PopupModal>
          </Animate>
         
        
      )}
      </AnimatePresence>
    </>
  );
};

export default Payment;
