import styled from 'styled-components'

export const StyledTicket = styled.div`
    display: inline-block;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 2rem;
    width: 250px;
    height: 350px;
    border-radius: 1rem;
    background-color: #ffffff;
    margin: 1rem;
    text-align: center;
    box-shadow: 0px 4px 8px rgba(182,230,233, 0.6); //drop shadow

    @media (max-width: 768px) {
    display: inline-block;
    justify-content: space-around;
    flex-flow: column nowrap;
    margin: 0rem;
    width: 200px;
    }

    //Style for Your ticket number div
    div:nth-child(1) {
      display: inline-block;
      flex-direction: column;
      margin-bottom: 1rem;
      margin-top: 1rem;
     
      h1 {
        font-size: 6.5rem;
        padding: 1rem;
      }
    
    }
    //Style for Last number called div
    div:nth-child(2), :nth-child(3) {
      h2 {
        font-size: 2.4rem;
        font-weight: 500;
        padding: 1rem;
      }
    }
  

`;
/* Note about styling divs:
When you have a component div that has multiple div's inside it 
and you want to style them independently without having to create different styled components for them, 
you can pass the styles to them throught the nth-child selector. 
The nth-child is 1-indexed, so div:nth-child(1) refers to the first div. 
If you have other elements inside your styled component (here StyledTicket) 
and you want to skip them, you can use div:nth-of-type(n). This will only count div elements. 
For example, div:nth-of-type(1) will select the first div, even if it’s not the first child of its parent.
*/
