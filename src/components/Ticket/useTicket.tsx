import { useState } from 'react';

//This code should be replaced when an actual API is used for the ticket system.

// this file is a HOOK, not a component

interface TicketState {
    ticketNumber: number;     // Props are accessed differently in Hooks then they are in components. 
    lastNumber: number;
    waitTime: string;
    requestNewTicket: () => void;
  }

    const useTicket = (): TicketState => {
    const [ticketNumber, setTicketNr] = useState(294);  // Initial ticket number
    const [lastNumber, setLastNumber] = useState(286);  // Initial last number called
    const [waitTime, setWaitTime] = useState('28:16');  // Initial estimated wait time

    const requestNewTicket = () => {
        setTicketNr(prevNumber => prevNumber + 7);  // Increment the ticket number. This is a fix until an API.
        setLastNumber(prevNumber => prevNumber + 6);  // Increment the last number called
        
        /*In this code, prevTime.split(':').map(Number) splits the prevTime string into minutes and seconds and converts them to numbers. The same is done for the added time. Then, both times are converted to seconds and added together. 
         Finally, the total time in seconds is converted back to the minutes:seconds format. The newSeconds < 10 ? '0' : '' part ensures that seconds are always two digits. If newSeconds is less than 10, it adds a leading zero.*/
        setWaitTime(prevTime => {
          // Convert waitTime and added time to seconds
          const [prevMinutes, prevSeconds] = prevTime.split(':').map(Number);
          const [addMinutes, addSeconds] = '3:17'.split(':').map(Number);
          const totalPrevTimeInSeconds = prevMinutes * 60 + prevSeconds;
          const totalAddTimeInSeconds = addMinutes * 60 + addSeconds;
      
          // Add the times
          const totalNewTimeInSeconds = totalPrevTimeInSeconds + totalAddTimeInSeconds;
      
          // Convert back to minutes:seconds format
          const newMinutes = Math.floor(totalNewTimeInSeconds / 60);
          const newSeconds = totalNewTimeInSeconds % 60;
      
          // Return new time as a string
          return `${newMinutes}:${newSeconds < 10 ? '0' : ''}${newSeconds}`;
        });

        //setWaitTime(prevTime => prevTime + '')   // Here we have a problem bc of the format for time. Find Fix
     };

  return { ticketNumber, lastNumber, waitTime, requestNewTicket };
}

export default useTicket

