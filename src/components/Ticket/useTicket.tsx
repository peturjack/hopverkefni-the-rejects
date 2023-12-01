import { useState } from 'react';

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
    const [waitTime, setWaitTime] = useState('38:16');  // Initial estimated wait time

    const requestNewTicket = () => {
        setTicketNr(prevNumber => prevNumber + 7);  // Increment the ticket number. This is a fix until an API.
        setLastNumber(prevNumber => prevNumber + 6);  // Increment the last number called
        setWaitTime(prevTime => prevTime + '')   // Here we have a problem bc of the format for time. Find Fix
     };

  return { ticketNumber, lastNumber, waitTime, requestNewTicket };
}

export default useTicket



/*  THIS IS WHAT I GOT FOR THE TIME PROBLEM... asked ai
I see the issue. The problem is that you’re trying to add a string (prevTime) and a string representation of time (41:57) as if they were numbers. This won’t work because these are strings representing time in the format minutes:seconds, not numbers.

If you want to add time, you need to convert the minutes and seconds to seconds, perform the addition, and then convert back to the minutes:seconds format. Here’s how you can do it:

const requestNewTicket = () => {
  setTicketNr(prevNumber => prevNumber + 7);  // Increment the ticket number
  setLastNumber(prevNumber => prevNumber + 7);  // Increment the last number called

  setWaitTime(prevTime => {
    // Convert waitTime and added time to seconds
    const [prevMinutes, prevSeconds] = prevTime.split(':').map(Number);
    const [addMinutes, addSeconds] = '41:57'.split(':').map(Number);
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
};

In this code, prevTime.split(':').map(Number) splits the prevTime string into minutes and seconds and converts them to numbers. The same is done for the added time. Then, both times are converted to seconds and added together. Finally, the total time in seconds is converted back to the minutes:seconds format. The newSeconds < 10 ? '0' : '' part ensures that seconds are always two digits. If newSeconds is less than 10, it adds a leading zero. Please make sure that prevTime is not null or undefined to prevent any potential errors. If prevTime could be null or undefined, you might want to check that before performing the operation. For example, prevTime ? ... : "". This will prevent any potential errors. Also, ensure that the setWaitTime function and the component using the waitTime state can handle it as a string.*/