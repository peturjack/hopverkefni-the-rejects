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
    width:2 rem;
    height:3px;
`

interface Props {
    setNav: (nav: string) => void; 
}

const MoreOptions: React.FC<Props> = function ({setNav}){ 

    return ( 
    <Container> 
       <Title>More Options</Title>
       <div>
       <AppLoginButton>App Login</AppLoginButton>
      </div>
      <div>
      <AppLoginButton onClick={() => setNav("sign-in-two")}>Electronic ID</AppLoginButton>
      </div>
    </Container>
    )
}

export default MoreOptions