import styled from 'styled-components';
import { AppLoginButton } from '../Button';

const Title = styled.p`
    color: #293437;
    font-size: 16px;
    font-style: normal;
`
const Container = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-direction:column;
    height:3px;
`

interface Props {
    setNav: (nav: string) => void;
    nav: string;
}

const MoreOptions: React.FC<Props> = function ({setNav, nav}){ 

    // Function that toggles between our two sign-in pages.   Still need to add the third toggle function for the App Login page (plus create and connect) for the first app login button
    const toggleId = () => {
        if (nav === "sign-in") {
            setNav("sign-in-two");
        } else {
            setNav("sign-in");
        }
    } 

    return ( 
        // AppLoginButton has an onClick handler that toggles the nav prop between “sign-in” and “sign-in-two”. The text of this button changes based on the current nav prop.
    <Container> 
       <Title>More Options</Title>
       <div>
       <AppLoginButton style={{boxShadow: "rgba(0, 0, 0, 0.09) 0px 3px 12px"}}>App Login</AppLoginButton>
      </div>
      <div>
      <AppLoginButton style={{boxShadow: "rgba(0, 0, 0, 0.09) 0px 3px 12px"}} onClick={toggleId}>{nav==="sign-in"?"No Electronic ID":"Electronic ID"}</AppLoginButton>
      </div>
    </Container>
    )
}

export default MoreOptions


/* about the onclick on apploginbutton:  
The standard onClick is an event handler that triggers the toggleId function when the button is clicked. 
The toggleId function is defined in my component and it toggles the nav state between “sign-in” and “sign-in-two”.

The nav=== etc is a ternary operator, which is a shorthand way of writing an if-else statement. 
It checks if nav is equal to “sign-in”. If it is, it will display “No Electronic ID”. 
If nav is not equal to “sign-in”, it will display “Electronic ID”.


*/