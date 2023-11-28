import styled from 'styled-components'

export const StyledTicket = styled.div`
    width: 250px;
    height: 300px;
    border-radius: 1rem;
    background-color: #ffffff;
    margin: 2rem;
    text-align: center;

    @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    margin: 0rem;
    width: 200px;
  }

  
`

