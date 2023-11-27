<<<<<<< HEAD
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
=======
import { ButtonPrimary, AppLoginButton } from './components/Button';
import {useState} from "react";
import ChooseClinic from './components/choseClinic/ChooseClinic';
import "./index.css"


 function App() {

  return (
    <ChooseClinic />
  )
}
export default App;


>>>>>>> a370aad5102d670af569b077be314009c035eb75
