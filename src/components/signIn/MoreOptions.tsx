import styled from 'styled-components';
import { AppLoginButton } from '../Button';
const Title = styled.p`
    color: #000;
    font-family: Roboto;
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

// const InsideText = styled.input `
//     border-radius: 5px;
//      border:none;
//      margin-top: 2rem;
//     background: #FFF;
//      width: 170px;
//     height:40px;
//     margin-top:10px;
//      padding-top:7px;
//      padding-left: 10px;
//      &&::placeholder {
//          font-size: 2rem;
//      }
//  ` 
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