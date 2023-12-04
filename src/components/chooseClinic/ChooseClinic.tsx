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
    setNav("payment");
    setClinic(clinicName);
  }

  return (
    <>
      <h1 style={{fontWeight:"500" ,letterSpacing: ".42rem", textAlign: "center", marginBottom:"1.2rem"}}>CHOOSE YOUR CLINIC</h1>
      <SearchbarWrapper> 
      <Searchbar onChange={(e) => setSearch(e.target.value)} placeholder='Search Clinic'></Searchbar> <SearchbarIcon></SearchbarIcon>
      </SearchbarWrapper>
      <BoxWrapper>
        {Clinics.filter((item) => {
          return search.toLowerCase() === "" ? true : item.name.toLowerCase().includes(search)
        }).map((clinic) => {
          return(
            <Boxes key={clinic.name} onClick={() => boxClick(clinic.name)}> { clinic.name }</Boxes> // added the onClick to try to fetch clinicnames
          )
        })}
      </BoxWrapper>
    </>
  )
}
export default ChooseClinic;