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
import { ChoosePaymentContainer, LiveLocation } from "./choosePaymentMethod";
import { MyModule } from "./payModule.styled";
import { CardDetails } from "./cardDetails";
import React from "react";

interface Props {
  clinic: string
  setNav: (nav: string) => void;  
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

  return (
    <>
      <FlexContainerColumn
        style={{
          width: "100%",
          gap:"4rem"
        }}
      >
        <h1>{clinic}</h1>
        <LiveLocation>
          <FlexContainerColumn style={{height:"100%"}}>
            
          <FlexContainer
            style={{
              paddingTop: "1.5rem",
            }}
          >
            <div
              style={{
                height: "0.7rem",
                width: "0.7rem",
                borderRadius: "50%",
                backgroundColor: "#A44346",
              }}
            ></div>
            <span
              style={{
                color: "#A44346",
                fontWeight: "600",
                fontSize: "2rem",
              }}
            >
              Live from this location
            </span>
            
          </FlexContainer>
          <span style={{fontSize:"5rem"}} >196</span>
          <p style={{paddingBottom:"1.5rem"}}>Estimated wait time is 42 minutes</p>
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
            <img
              style={{ width: "70%" }}
              src={masterCard}
              alt="mastercard payment option"
            />
          </PaymentButtons>
          <PaymentButtons onClick={handleModalOpen}>
            <img
              style={{ width: "70%" }}
              src={visa}
              alt="visa payment option"
            />
          </PaymentButtons>
        </FlexContainer>
        <FlexContainer>
          <PaymentButtons onClick={handleModalOpen}>
            <img
              style={{ width: "70%" }}
              src={applePay}
              alt="apple payment option"
            />
          </PaymentButtons>
          <PaymentButtons onClick={handleModalOpen}>
            <img
              style={{ width: "70%" }}
              src={googlePlay}
              alt="google payment option"
            />
          </PaymentButtons>
        </FlexContainer>
      </PaymentButtonContainer>

             
      </FlexContainerColumn  >
      {modalOpen &&(
              <MyModule>
              <h1 style={{textAlign:"center", padding:"2rem 0"}}>PAYMENT METHODS</h1>
              <FlexContainer style={{padding:"1.5rem 15%", justifyContent:"space-evenly"}}>
                <img style={{ height: "2.5rem" }} src={masterCard} alt="mastercard payment option" />
                <img style={{ width: "5rem" }} src={visa} alt="visa payment option" />
                <img style={{ width: "5rem" }} src={applePay} alt="apple payment option" />
                <img style={{ width: "5rem" }} src={googlePlay} alt="google payment option" />
              </FlexContainer >

              <FlexContainerColumn style={{padding:" 0 15%", gap:"1rem"}}>
              <FlexContainerColumn style={{width:"100%", alignItems:"start", }}>
                <p style={{marginTop:"2rem", marginBottom:"0.5rem"}}>Name</p>
                <CardDetails />
                <p style={{marginTop:"2rem", marginBottom:"0.5rem"}}>Card Number</p>
                <CardDetails/>
              </FlexContainerColumn>
              <FlexContainer>
                <FlexContainerColumn style={{alignItems:"start"}}>
                  <p style={{marginTop:"2rem", marginBottom:"0.5rem"}}>Expiry Date</p>
                  <CardDetails />
                </FlexContainerColumn>
                <FlexContainerColumn style={{alignItems:"start"}}>
                  <p style={{marginTop:"2rem", marginBottom:"0.5rem"}}>CVV</p>
                  <CardDetails />
                </FlexContainerColumn>
              </FlexContainer>
              <ButtonPrimary onClick={handleModalClose} setNav={setNav} clinic={clinic} style={{width:"100%", height:"5.4rem", marginTop:"2rem"}}>ADD PAYMENT</ButtonPrimary>
             </FlexContainerColumn>

             </MyModule>
      )}

   
    </>
  );
};

export default Payment;
