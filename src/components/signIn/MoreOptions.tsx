import styled from 'styled-components';
import { AppLoginButton } from '../Button';
const Title = styled.p`
    color: #000;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    justify-content: center;
    display: flex;
`
const Container = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0px;
    flex-direction:column;
`
const InsideText = styled.input `
    border-radius: 5px;
    border:none;
    margin-top: 2rem;
    background: #FFF;
    width: 170px;
    height:40px;
    margin-top:10px;
    padding-top:7px;
    padding-left: 10px;
    &&::placeholder {
        font-size: 2rem;
    }
`
const MoreOptions= function (){ 
    return ( 
    <Container> 
       <Title>More Options</Title>
       <div>
        <InsideText placeholder='App Login'></InsideText>
      </div>
      <div>
      <InsideText onClick={() => setNav("clinic")} placeholder='No Electronic ID'></InsideText>
      </div>
    </Container>

    )
}
export default MoreOptions