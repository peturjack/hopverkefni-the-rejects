import React from 'react';
import { ButtonPrimary, AppLoginButton } from './components/Button';
import {useState} from "react";
import ChooseClinic from './components/choseClinic/ChooseClinic';
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
      <ChooseClinic />
    </>
  )
}
export default App;
