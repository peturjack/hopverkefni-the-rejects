import React from 'react'
import { StyledTicket } from './Ticket.styled'

const Ticket = () => {
    
    return (
        <>
            <div><h1>Heilsugæslan Árbæ </h1></div>  {/*This needs to be fetching the right choice from ChooseClinic Page*/}
            <div><p>You are now in line for a walk-in appointment.<br /><br />
            <strong>You will receive an SMS reminder 30 minutes before your appointment.<br />And another reminder 15 minutes before.</strong><br /><br />  
            Make sure to be on time!</p></div>
            <StyledTicket>
                <h1>294</h1>
            </StyledTicket>
            <div><p>Are you running late?</p></div>
        </>
    )
}

export default Ticket