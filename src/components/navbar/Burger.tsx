import React from 'react'
import { StyledBurger } from './Burger.styled'

//  Defining the properties that the Burger component will accept. 
/*  open is a boolean property that represents the state of the burger menu. 
If open is true, it means the burger menu is open. 
If open is false, it means the burger menu is closed. 

setOpen is a function that updates the open state. It accepts a boolean parameter. 
When you call setOpen(true), it opens the burger menu, and when you call setOpen(false), it closes the burger menu.
*/
interface Props {
  open: boolean   // A boolean to control the open state of the burger menu
  setOpen: (open: boolean) => void     // A function to set the open state of the burger menu
}

// our component that accepts props setopen and open
const Burger: React.FC<Props> = ({ setOpen, open }) => {
  return (
     // Renders the StyledBurger component with the open state
    // The onClick handler toggles the open state when the burger is clicked
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

export default Burger
