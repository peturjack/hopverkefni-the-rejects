import styled from "styled-components";

const PaymentButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    align-items: center;
    
`
const FlexContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`

const FlexContainerColumn = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

const PaymentButtons = styled.button`
    width: 10rem;
    height: 8.8rem;
    border-radius: 1rem;
    border: none;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .3s ease-in-out;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    &&:hover {
        scale: 1.1;
    }
`

export {PaymentButtonContainer, FlexContainer, PaymentButtons, FlexContainerColumn}