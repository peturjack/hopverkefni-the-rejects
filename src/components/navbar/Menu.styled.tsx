import styled from 'styled-components'

interface Props {
  open: boolean
}

export const StyledMenu = styled.nav<Props>`
  display: none;

  a {
    padding: 18px 10px;
    color: #000000;
    text-decoration: none;
    font-size: 20px;
    font-weight: 200;
    line-height: 24px;
  }

  @media (max-width: 768px) {
    flex-flow: column wrap;
    background-color: #E5E5E5;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 16rem;
    list-style: none;
    display: flex;
    width: 40%;
    padding-top: 3.5rem;
    transition: transform 0.4s ease-in-out;
    align-items: center;
    border-radius: 0.8rem;
  }

`
