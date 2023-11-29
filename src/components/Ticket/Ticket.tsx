import {useState}  from 'react';
import { StyledTicket } from './Ticket.styled'
import LateButton from './LateButton';

const Ticket = () => {
    
    return (
        <>
            <div><h1>Heilsugæslan Árbæ </h1></div>  {/*This needs to be fetching the right choice from ChooseClinic Page*/}
            <div><p>You are now in line for a walk-in appointment.<br /><br />
            <strong>You will receive an SMS reminder 30 minutes before your appointment.<br />And another reminder 15 minutes before.</strong><br /><br />  
            Make sure to be on time!</p></div>
            <StyledTicket>
                <div>
                    <p>Your ticket number:</p>
                    <h1>294</h1>
                </div>
                <div>
                    <p>Last number called:</p>
                    <h2>286</h2>
                </div>
                <div>
                    <p>Estimated wait time:</p>
                    <h2>38:16</h2>
                </div>
            </StyledTicket>
            <br/>
            <LateButton />
            
        </>
    )
}

export default Ticket