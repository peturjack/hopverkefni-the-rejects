import styled from 'styled-components'

interface Props {
  open: boolean
}

export const StyledMenu = styled.nav<Props>`
  // This is the menu in larger screens
  display: flex;
  justify-content: space-evenly;

  button {
    color: #293437;
    text-decoration: none;
    font-size: 20px;
    font-weight: 400;   //Font weight 400 er Regular
    line-height: 24px;
    margin: 0 10px; // this adds a horizontal margin
    background: transparent;
    border: none;
  }

  a {
    color: #293437;
    text-decoration: none;
    font-size: 20px;
    font-weight: 400;   //Font weight 400 er Regular
    line-height: 24px;
    margin: 0 10px; // this adds a horizontal margin
  }

// This is the menu in smaller screens
  @media (max-width: 768px) {
    flex-flow: column wrap;
    background-color: rgb(182,230,233);
    padding: 1.5rem 0;
    z-index: 10; 
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(120%)'};
    top: 3%;   // Position of menu 
    right: 7%;
    height: 16rem;
    list-style: none;
    display: flex;
    width: 37%;
    height: 18%;
    transition: transform 0.5s ease-in-out ;
    align-items: center;
    border-radius: 0.8rem;
  }
`
