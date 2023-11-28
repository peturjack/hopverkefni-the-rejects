import React from 'react';
import { ButtonPrimary, AppLoginButton } from './components/Button';
import {useState} from "react";
import ChooseClinic from './components/choseClinic/ChooseClinic';
import { Burger, Menu, Navbar, Logo } from './components/navbar'
import "./index.css"
import { ContentWrapper } from './components/ContentWrapper';
import Ticket from './components/Ticket/Ticket';
import TextWrapper from './components/TextWrapper';
import About from './components/About';
import Contact from './components/Contact';


function App () {
  const[open, setOpen] = React.useState(false)

  const[nav, setNav] = useState("ticket")  //The string insid the useState() should be our frontpage. It's inital page for the website
  const pages: {[page:string]:JSX.Element} = {
    "clinic": <ChooseClinic />,    //component
    "ticket": <Ticket />,
    "about": <About />,
    "contact": <Contact />,
    // in here we'll add all our pages
  }     

  return (
    <>
    <ContentWrapper>
      <Navbar>
        <Logo />
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setNav={setNav}/>
      </Navbar> 
      <TextWrapper>
        {/* <ButtonPrimary onClick={setNav("clinic")} /> this is what move between pages might look like... */}
        {pages[nav]}   {/*Navigation function for site */}
      </TextWrapper>
    </ContentWrapper>  
    </>
  )
}
export default App;
