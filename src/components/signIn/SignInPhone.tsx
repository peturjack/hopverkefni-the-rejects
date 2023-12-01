import React, { useState} from 'react';
import styled from 'styled-components';
import CheckBox from "../CheckBox";
import { ButtonPrimary } from "../Button";

const Title = styled.h2`
   font-family: Roboto;
   font-size: 24px;
   font-style: normal;
   font-weight: 500;
   line-height: normal;
   letter-spacing: 1.2px;
`
const Container = styled.div `
    display: Flex;
    justify-content: Center;
    flex-direction: column;
    align-items: Center;
    gap: 2rem;
`
const PhoneBar = styled.input `
    border-radius: 5px;
    background: #FFF;
    width: 283px;
    height: 60px;
    flex-shrink: 0;
    margin-top:10px;
    padding-top:10px;
    padding-left: 2px;
    &&::placeholder {
        font-size: 2.6rem;
    }
`
const StylePhoneNr = styled.div `
     font-family: Roboto;
     font-size: 16px;
     font-style: normal;
     font-weight: 400;
     line-height: normal;
     padding-left: 3px;
`

interface Props {
    setNav: (nav: string) => void;  // this is added here for navigation
}

const SignInPhone: React.FC<Props> = function ({setNav}){ 

    return ( 
    <Container> 
       <Title>Sign In</Title>
       <div>
        <StylePhoneNr>Phone Number</StylePhoneNr>
        <PhoneBar placeholder='000-000' type='Text'></PhoneBar>
        <CheckBox text={"Remember me"}/>
      </div>
      <ButtonPrimary onClick={() => setNav("clinic")}>Authenticate</ButtonPrimary>
    </Container>
    )
}
export default SignInPhone