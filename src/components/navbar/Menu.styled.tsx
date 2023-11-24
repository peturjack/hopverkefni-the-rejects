import styled from 'styled-components'

interface Props {
  open: boolean
}

export const StyledMenu = styled.nav<Props>`
  // This is the menu in larger screens
  display: flex;
  justify-content: space-evenly;

  a {
    color: #293437;
    text-decoration: none;
    font-size: 20px;
    font-weight: 400;   //Font weight 400 er Regular
    line-height: 24px;
  }
// This is the menu in smaller screens
  @media (max-width: 768px) {
    flex-flow: column wrap;
    background-color: #9FC7D1;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 16rem;
    list-style: none;
    display: flex;
    width: 40%;
    transition: transform 0.4s ease-in-out;
    align-items: center;
    border-radius: 0.8rem;
  }
`
