import {useState} from 'react';
import FormSubmit from './ContactSubmit';
import React from "react";

interface Props {
    setNav: (nav: string) => void;  
  }

const Contact: React.FC<Props> = ({setNav}) => {
    const [result, setResult] = React.useState("");

    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
        };

        // this is the Form API //
    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "494213e6-4e78-462d-adbe-21a9573eba30");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };

  return (
    <div>
      <h1>CONTACT US</h1>
      <p>Our team is dedicated to improving your healthcare experience. <br />
       Let's make the uncertainty of the waiting room a thing of the past!</p>
       <div>
        <form onSubmit={onSubmit}>
            <label>
                <input type="text" name="name" placeholder="Your name" required/>
            </label>
            <label>
                <input type="email" name="email" placeholder="Your email" required/>
            </label>
            <label>
                <textarea name="message" placeholder="Write your message here..." required></textarea>
            </label>
            <button type="submit" onClick={handleOpenModal} >Submit Form</button>
                {showModal && (<FormSubmit setNav={setNav}></FormSubmit>)}
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
}

export default Contact


// const Contact = () => {

//     const [showModal, setShowModal] = useState(false);
//     const [nav, setNav] = useState('');

//     const handleOpenModal = () => {
//         setShowModal(true);
//       };

//     return (
//         <>
//             <h1>CONTACT US</h1>
//             <p>Our team is dedicated to improving your healthcare experience. <br />
//             Let's make the uncertainty of the waiting room a thing of the past!</p>
//             <div>
//                 <form action="https://api.web3forms.com/submit" method="POST">
//                 <input type="hidden" name="access_key" value="494213e6-4e78-462d-adbe-21a9573eba30"/>
//                 <label>
//                     <input type="text" name="name" placeholder="Your name" required/>
//                 </label>
//                 <label>
//                     <input type="email" name="email" placeholder="Your email" required/>
//                 </label>
//                 <label>
//                     <textarea name="message" placeholder="Write your message here..." required></textarea>
//                 </label>

//                 <button type="submit" onClick={handleOpenModal} >Submit Form</button>
//                 {showModal && (<FormSubmit setNav={setNav}></FormSubmit>)}

//                 </form>
//             </div>
//         </>
//     );
// };

// export default Contact