import React, {useState} from 'react';
import { Burger, Menu, Navbar, Logo,} from './components/navbar'
import "./index.css"
import { ContentWrapper } from './components/ContentWrapper';
import Frontpage from './components/frontpage';
import cloud from "./assets/cloudmain.svg"
import { CloudContainer,Cloud } from './components/frontpage/cloud';
import Payment from './components/paymentSite/payment';

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

  const[nav, setNav] = useState("frontpage");  //The string inside the useState() should be our frontpage. It's inital page for the website

  const [clinic, setClinic] = useState("");

  const navChange = (actionNav: string) => {
    setNav(actionNav);  // 
    setOpen(false);  // this closes the menu when sth is clicked in menu
  };
  
  const pages: {[page:string]:JSX.Element} = {
    // "frontpage": < frontpage component  />,
    "clinic": <ChooseClinic setNav={setNav} setClinic={setClinic} />,    //'name of page' and component
    "ticket": <Ticket ticketNumber={ticketNumber} 
              lastNumber={lastNumber} 
              waitTime={waitTime.toString()}  //this has to be changed so it can pass as a string
              requestNewTicket={requestNewTicket}
              setNav={setNav}
              clinic={clinic} />,
    "about": <About />,
    "contact": <Contact />,
    "sign-in": <IdPage setNav={setNav}  />,
    "sign-in-two": <NoIdPage setNav = {setNav} />,
    "frontpage": <Frontpage/>,
    "payment": <Payment />
  }     

  return (
    <>
    <CloudContainer>
      <Cloud initial={{x:-100 }} animate={{x:0}} transition={{repeat: Infinity, repeatType: "mirror", duration: 20, ease: [0.67, 0.67, 0.83, 0.67] }} src={cloud} />
      </CloudContainer>
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
