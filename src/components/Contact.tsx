import {useState} from 'react';
import FormSubmit from './ContactSubmit';
import React from "react";
import styled from 'styled-components';
import { ButtonPrimary } from './Button';

const StyledForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    gap: 2rem;

    @media (max-width: 768px) { 
        align-items: center;
        width: 90%;
`

const FormDiv = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Input = styled.input`
    border: none;
    padding: 1rem;
    border-radius: 1rem;
    width: 100%;
    margin-bottom: 2rem;
    outline: none;
`

const Textarea = styled.textarea`
    border: none;
    border-radius: 1rem;
    padding: 0.7rem;
    min-height: 15rem;  //adding bounds to messagebox so user can't minimize or change width.     min-width: 100%;
    width: 100%;
    max-width: 100%;
    margin-bottom: 3rem;
    outline: none;
`

// Below is our Contact Form. You can not click submit unless you fill in all the required fields. 

interface Props {
    setNav: (nav: string) => void;  
  }

const Contact: React.FC<Props> = ({setNav}) => {
    const [result, setResult] = React.useState("");
    const [isValid, setIsValid] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {   //to prevent click on submit without filling in input fields
        if (isValid) {
            setShowModal(true);
        }
        };

        // this is the Form API //
    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        if (name && email && message) {
            setIsValid(true);
            setResult("Sending....");
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "494213e6-4e78-462d-adbe-21a9573eba30");  //this is our access to this API and allows for it to send message to the site email

    const res = await fetch( "https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    if (res.success) {
                console.log("Success", res);
                setResult(res.message);
            } else {
                console.log("Error", res);
                setResult(res.message);
                setShowModal(true);
            }
        } else {
            setIsValid(false);  
            setResult("Please fill in all the required fields.");  // This checks to see if all fields have been filled in. If not it will tell the user to fill it in. 
        }
    };

  return (
    <StyledForm>
      <div><h1>CONTACT US</h1></div>
      <div><p>Our team is dedicated to improving your healthcare experience. <br />
       Let's make the uncertainty of the waiting room a thing of the past!</p>
       </div>
       
        <FormDiv onSubmit={onSubmit}>
            <br/>
                <Input type="text" name="name" placeholder="Your name" required/>
                <br/>
                <Input type="email" name="email" placeholder="Your email" required/>
                <br/>
                <Textarea name="message" placeholder="Write your message here..." required></Textarea>
                <br/>
                <ButtonPrimary type="submit" onClick={handleOpenModal} >Submit Form</ButtonPrimary>
                {showModal && (<FormSubmit setNav={setNav}></FormSubmit>)}
        </FormDiv>
            <span>{result}</span>
        
    </StyledForm>
  );
}

export default Contact

