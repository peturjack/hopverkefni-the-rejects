import React from 'react';
import { Burger, Menu, Navbar, Logo } from './components/navbar'
import "./index.css"

function App () {
  const[open, setOpen] = React.useState(false)

  return (
    <>
      <Navbar>
        <Logo />
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} />
      </Navbar>
  
    </>
  )
}
export default App;