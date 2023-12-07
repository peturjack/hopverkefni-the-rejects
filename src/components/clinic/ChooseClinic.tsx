import {useState} from 'react';
import { Boxes, Clinics } from './Boxes';
import { BoxWrapper } from './BoxWrapper';
import { Searchbar, SearchbarWrapper, SearchbarIcon } from './Searchbar';

interface Props {
  setNav: (nav: string) => void;
  setClinic: (nav: string) => void;
}

 function ChooseClinic ({ setNav, setClinic }: Props) {

  const [search, setSearch] = useState("")

  const boxClick = (clinicName:string) => {
    console.log(clinicName);
    setNav("payment");   // calling the setNav function with the string payment. Setting navigation to the payment page when user chooses a clinic 
    setClinic(clinicName);  // calling the setClinic function with the value of the clinicname. When user chooses a clinic box that clinic's name will be set in the app state. 
  }

  return (
    <>
      <h1 style={{fontWeight:"500", letterSpacing: ".42rem", textAlign: "center", marginBottom:"0.5rem",}}>CHOOSE YOUR CLINIC</h1>
      <SearchbarWrapper> 
      <Searchbar onChange={(e) => setSearch(e.target.value)} placeholder='Search Clinic'></Searchbar> <SearchbarIcon></SearchbarIcon>
      </SearchbarWrapper>
      <BoxWrapper>
        {Clinics.filter((item) => {         // The Clinics array is filtered based on the search term. If the search term is an empty string, all items in the Clinics array are returned. If the search term is an empty string, all items in the Clinics array are returned.
          return search.toLowerCase() === "" ? true : item.name.toLowerCase().includes(search)   
        }).map((clinic) => {                                                                            
          return(     
            <Boxes key={clinic.name} onClick={() => boxClick(clinic.name)}> { clinic.name }</Boxes> // When a clinic box is clicked, the name 
          )   // For each clinic in the filtered array, a Boxes component is returned.
              // The key prop of the Boxes component is set to the name of the clinic.
              // An onClick event handler is added to the Boxes component which calls the boxClick function with the clinic's name as an argument when the Boxes component is clicked.
              //The name of the clinic chosen will be included in the following pages (payement and ticket)
        })}
      </BoxWrapper>
    </>
  )
}
export default ChooseClinic;