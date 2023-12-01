import { StyledTicket } from './Ticket.styled'
import LateButton from './LateButton';

interface Props {
    ticketNumber: number;    // Defining my props 
    lastNumber: number;
    waitTime: string;
    requestNewTicket: () => void;
    setNav: (nav: string) => void;
    clinic: string;  // this is added here for navigation on requestNewTicket click
  }

const Ticket: React.FC<Props> = ({ticketNumber, lastNumber, waitTime, requestNewTicket, setNav, clinic}) => {
    
    return (
        <>
            <h1>{clinic} </h1>  {/*This needs to be fetching the right choice from ChooseClinic Page*/}
            <div><p>You are now in line for a walk-in appointment.<br /><br />
            <strong>You will receive an SMS reminder 30 minutes before your appointment.<br />And another reminder 15 minutes before.</strong><br /><br />  
            Make sure to be on time!</p></div>
            <StyledTicket>
                <div>
                    <p>Your ticket number:</p>
                    <h1>{ticketNumber}</h1>
                </div>
                <div>
                    <p>Last number called:</p>
                    <h2>{lastNumber}</h2>
                </div>
                <div>
                    <p>Estimated wait time:</p>
                    <h2>{waitTime}</h2>
                </div>
            </StyledTicket>
            <br/>
            <LateButton requestNewTicket={requestNewTicket} setNav={setNav} />
        </>
    )
}

export default Ticket