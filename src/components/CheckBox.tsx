import styled from 'styled-components';


type Props={ 
  text: string; 
  }
  
const CheckboxContainer = styled.label`  
  display: flex;
  align-items: Center;
  padding-top: 0.8rem;
  

`;

const CheckboxInput = styled.input`
  margin-right:10px;
 
`;

const CheckboxText = styled.p`
  margin: 0;
  `;

const CheckBox = ({ text }:Props) => (
  <CheckboxContainer>
    <CheckboxInput type="checkbox"/>
    <CheckboxText>{text}</CheckboxText>
  </CheckboxContainer>
);
export default CheckBox;