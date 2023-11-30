import React from 'react';
import { ButtonPrimary, AppLoginButton } from './components/Button';
import {useState} from "react";

import { Burger, Menu, Navbar, Logo,} from './components/navbar'
import "./index.css"
import SignInPhone from './components/SignInPhone';
import { ContentWrapper } from './components/ContentWrapper';
import MoreOptions from './components/MoreOptions';
import PageTwoSignIn from './components/PageTwoSignIn';
 function App() {
const [open, setOpen]= React.useState (false)
  
return (
    <>
    <ContentWrapper>
      <Navbar>
        <Logo />
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} />
      </Navbar>
      {/*<div style={{display:"flex", paddingTop: "15rem", flexDirection:"column", justifyContent:"space-between", height:"70vh"}}>
      <SignInPhone/>
      <MoreOptions/>
      </div>*/}
      <div style={{display:"flex", border:"none", paddingTop: "15rem", flexDirection:"column", justifyContent:"space-between", height:"70vh"}} >
        <PageTwoSignIn/>
          <MoreOptions/>
      </div>
    </ContentWrapper>  
    </>
  )
}
export default App;
//