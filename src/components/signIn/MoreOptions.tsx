import styled from 'styled-components';
import { AppLoginButton } from '../Button';

const Title = styled.p`
    color: #000;
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

    const toggleId = () => {
        if (nav === "sign-in") {
            setNav("sign-in-two");
        } else {
            setNav("sign-in");
        }
    } 

    return ( 
    <Container> 
       <Title>More Options</Title>
       <div>
       <AppLoginButton>App Login</AppLoginButton>
      </div>
      <div>
      <AppLoginButton onClick={toggleId}>{nav==="sign-in"?"No Electronic ID":"Electronic ID"}</AppLoginButton>
      </div>
    </Container>
    )
}

export default MoreOptions