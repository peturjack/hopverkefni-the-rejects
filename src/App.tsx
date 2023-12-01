import React from 'react';
import { ButtonPrimary, AppLoginButton } from './components/Button';
import {useState} from "react";
import ChooseClinic from './components/chooseClinic/ChooseClinic';
import { Burger, Menu, Navbar, Logo } from './components/navbar'
import "./index.css"
import { ContentWrapper } from './components/ContentWrapper';
import Frontpage from './components/frontpage';
import cloud from "./assets/cloudmain.svg"
import { CloudContainer,Cloud } from './components/frontpage/cloud';
import Payment from './components/paymentSite/payment';


function App () {
  const[open, setOpen] = React.useState(false)


  const[nav, setNav] = useState("payment")
  const pages: {[page:string]:JSX.Element} = {
    "frontpage": <Frontpage/>,
    "clinic" : <ChooseClinic />,
    "payment": <Payment />
  }

  return (
    <>
    <CloudContainer>
      <Cloud initial={{x:-100 }} animate={{x:0}} transition={{repeat: Infinity, repeatType: "mirror", duration: 20, ease: [0.67, 0.67, 0.83, 0.67] }} src={cloud} />
      </CloudContainer>
    <ContentWrapper>
      
      <Navbar>
        <Logo />
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} />
      </Navbar>
      {pages[nav]}
    </ContentWrapper>  
    </>
  )
}
export default App;
