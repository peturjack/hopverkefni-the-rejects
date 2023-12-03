import styled from 'styled-components';
import CheckBox from "../CheckBox";
import {ButtonPrimary} from "../Button";

const Title = styled.h2`
   font-size: 30px;
   font-weight: 500;
   line-height: normal;
   letter-spacing: 1.2px;
   margin-top: -7rem;
`
const Container = styled.div `
    display: Flex;
    justify-content: Center;
    flex-direction: column;
    align-items: Center;
    gap: 0rem;
`
const PhoneBar = styled.input `
    border-radius: 5px;
    background: #FFF;
    width: 283px;
    height: 55px;
    flex-shrink: 0;
    margin-top:10px;
    padding-top:10px;
    border: none;
    padding-left: 7px;
    &&::placeholder {
        font-size: 2rem;
    }
`
const StylePhoneNr = styled.div `
     font-size: 16px;
     font-style: normal;
     font-weight: 400;
     line-height: normal;
     padding-left: 3px;
     border:none;  
 `
const AuthenticateButton = styled(ButtonPrimary)`
    margin-top: 3rem;
    margin-bottom: 10rem;
    padding: 20px 30px;
    padding-top: 20px;
    padding-bottom: 20px;
`

interface Props {
        setNav: (nav: string) => void;  // this is added here for navigation
    }
    

const PageTwoSignIn: React.FC<Props> = function ({setNav}){ 
    return ( <Container> 
       <Title>Sign In</Title>
       <div>
        <StylePhoneNr></StylePhoneNr>
        <PhoneBar placeholder='Name' type='Text'></PhoneBar>
        </div>
      <div>
        <StylePhoneNr></StylePhoneNr>
        <PhoneBar placeholder='Phone Number' type='Text'></PhoneBar>
        <CheckBox text={"Remember me"}/>
      </div>
      <AuthenticateButton onClick={() => setNav("clinic")} >Authenticate</AuthenticateButton>
      </Container>
      )
}

export default PageTwoSignIn