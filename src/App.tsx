import React from 'react';
import {useState} from "react";
import { Burger, Menu, Navbar, Logo,} from './components/navbar'
import "./index.css"
import { ContentWrapper } from './components/ContentWrapper';
import NoIdPage from './components/signIn/NoId';
import Ticket from './components/Ticket/Ticket';
import useTicket from './components/Ticket/useTicket';
import About from './components/About';
import Contact from './components/Contact';
import ChooseClinic from './components/chooseClinic/ChooseClinic';
import TextWrapper from './components/TextWrapper';
import IdPage from './components/signIn/Id';


function App () {
  const[open, setOpen] = React.useState(false)

  const { ticketNumber, lastNumber, waitTime, requestNewTicket } = useTicket();
                // const [ticketNumber, setTicketNumber] = useState(294);  // Initial ticket number for the Ticket page

                // const requestNewTicket = () => {
                //   // const newTicketNumber = /* Call your API here to get the new ticket number */;
                //   setTicketNumber(prevNumber => prevNumber + 7);  // Increment the ticket number as is
                // };

  const[nav, setNav] = useState("sign-in")  //The string inside the useState() should be our frontpage. It's inital page for the website

  const navChange = (actionNav: string) => {
    setNav(actionNav);  // 
    setOpen(false);  // this closes the menu when sth is clicked in menu
  };
  
  const pages: {[page:string]:JSX.Element} = {
    // "frontpage": < frontpage component  />,
    "clinic": <ChooseClinic />,    //'name of page' and component
    "ticket": <Ticket ticketNumber={ticketNumber} 
              lastNumber={lastNumber} 
              waitTime={waitTime.toString()}  //this has to be changed so it can pass as a string
              requestNewTicket={requestNewTicket}
              setNav={setNav} />,
    "about": <About />,
    "contact": <Contact />,
    "sign-in": <IdPage setNav={setNav}  />,
    "sign-in-two": <NoIdPage setNav = {setNav} />,
    

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

export default App
