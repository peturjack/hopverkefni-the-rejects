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

import PopupModal from "./popupModal";
import React from "react";
import { AnimatePresence } from "framer-motion";





interface Props {
  clinic: string
  setNav: (nav: string) => void;  
}

export const dropIn = {
  hidden: { 
      opacity: 1 ,
      y: "100vh"
  },
  visible: { 
      opacity: 1,
      y: "0vh",
      transition: {
        duration:0.5
      }
    
   },
   exit: {
      opacity: 0 ,
      y: "100vh",
      transition: {
        duration:0.5
      }
 
   }
}

const Payment: React.FC<Props> = ({ setNav, clinic }) => {
  
  const [modalOpen, setModalOpen] = useState(false)
  const handleModalOpen = () => {
    setModalOpen(true)
  }
  const handleModalClose = () => {
    setModalOpen(false)
    setNav("ticket")
    
  }

  const handleModalOnlyClose = () => {
    setModalOpen(false)
   
  }

  return (
    <>
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
          <h3 style={{ fontWeight: "600rem", fontSize: "2rem" }}>
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
      {modalOpen && (
        
   
        
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
