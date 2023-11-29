import React from 'react';
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

  const[nav, setNav] = useState("ticket")  //The string inside the useState() should be our frontpage. It's inital page for the website
  
  const navChange = (actionNav: string) => {
    setNav(actionNav);  // this is the 
    setOpen(false);  // this closes the menu when sth is clicked in menu
  };
  
  const pages: {[page:string]:JSX.Element} = {
    // "frontpage": < frontpage component  />,
    "clinic": <ChooseClinic />,    //'name of page' and component
    "ticket": <Ticket />,
    "about": <About />,
    "contact": <Contact />,
    // "late": 
    // in here we'll add all our pages as they are created.

  }     

  return (
    <>
    <ContentWrapper>
      <Navbar>
        <Logo setNav={navChange} />
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setNav={navChange}/>
      </Navbar> 
      <TextWrapper>
        {pages[nav]}   {/*Navigation function for site */}
      </TextWrapper>
    </ContentWrapper>  
    </>
  )
}
export default App;
