import styled from 'styled-components';
import CheckBox from "../CheckBox";
import { ButtonPrimary } from "../Button";




const Title = styled.h2`
   font-size: 30px;
   font-weight: 500;
   letter-spacing: 1.2px;
   margin-top: -7rem;
   justify-content: center;
`
const Container = styled.div `
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
   
`
const PhoneBar = styled.input.attrs({
    pattern: "\\d*",
    inputMode: "numeric"   //adding this bc it hints to browsers to open numeric pad
    }) `
        border-radius: 5px;
        background: #FFF;
        width: 283px;
        height: 60px;
        flex-shrink: 0;
        margin-top: 10px;
        padding-top: 10px;
        padding-left: 7px;
        outline: none;
        border: none;
        font-size: 2.6rem;

        &&::placeholder {
            padding-left: 7px;
            font-size: 2.6rem;
        }
    `

interface Props {
    setNav: (nav: string) => void;  // this is added here for navigation
}

const SignInPhone: React.FC<Props> = function ({setNav}){ 

    return ( 
    <Container> 
       <Title>Sign In</Title>
       <div>
        

       
        <CheckBox text={"Remember me"}/>
      </div>
      <br></br>
      <ButtonPrimary onClick={() => setNav("clinic")}>Authenticate</ButtonPrimary>
     </Container>
    )
}
export default SignInPhone

