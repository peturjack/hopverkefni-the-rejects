import {

    FlexContainer,
    FlexContainerColumn,
  
  } from "./paymentButtons";
  import masterCard from "../../assets/mastercard.svg";
  import visa from "../../assets/visa.svg";
  import applePay from "../../assets/apple-pay.svg";
  import googlePlay from "../../assets/google-pay.svg";
  import { MyModal, ModalImg, ModalParaStyle } from "./payModule.styled";
  import { CardDetails } from "./cardDetails";
import { PropsWithChildren } from "react";





const PopupModal = ({children}:PropsWithChildren) => {
    return ( 


        <MyModal>
        <h1 style={{textAlign:"center", padding:"2rem 0", letterSpacing:"0.42rem"}}>PAYMENT METHODS</h1>
        <FlexContainer style={{padding:"1.5rem 15%", justifyContent:"space-evenly"}}>
          <ModalImg style={{ height: "2.5rem" }} src={masterCard} alt="mastercard payment option" />
          <ModalImg  src={visa} alt="visa payment option" />
          <ModalImg  src={applePay} alt="apple payment option" />
          <ModalImg src={googlePlay} alt="google payment option" />
        </FlexContainer >

        <FlexContainerColumn style={{padding:" 0 15%", }}>
        <FlexContainerColumn style={{width:"100%", alignItems:"start", }}>
          <ModalParaStyle >Name</ModalParaStyle>
          <CardDetails />
          <ModalParaStyle style={{marginTop:"1rem", marginBottom:"0.5rem"}}>Card Number</ModalParaStyle>
          <CardDetails/>
        </FlexContainerColumn>
        <FlexContainer>
          <FlexContainerColumn style={{alignItems:"start"}}>
            <ModalParaStyle >Expiry Date</ModalParaStyle>
            <CardDetails />
          </FlexContainerColumn>
          <FlexContainerColumn style={{alignItems:"start"}}>
            <ModalParaStyle >CVV</ModalParaStyle>
            <CardDetails />
            
          </FlexContainerColumn>
          
        </FlexContainer>
            {children}
       </FlexContainerColumn>
       
       </MyModal>
       
     );
}
 
export default PopupModal;