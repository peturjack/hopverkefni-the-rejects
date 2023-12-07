import styled from 'styled-components'

interface Props {
  open: boolean
}

export const StyledBurger = styled.button<Props>`
  width: 3rem;
  height: 3rem; 
  display: none;
  border: none;
  cursor: pointer;
  background: transparent;

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    z-index: 20; 
  }

  div {
    width: 3rem;
    height: 0.32rem;
    background-color: ${({ open }) => open ? '#276989' : '#276989'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    position: relative;

    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }

    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;