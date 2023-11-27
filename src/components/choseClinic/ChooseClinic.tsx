
import { Boxes, Clinics } from './Boxes';
import { BoxWrapper } from './BoxWrapper';
import { ContentWrapper } from '../ContentWrapper';
import { Searchbar, SearchbarWrapper, SearchbarIcon } from './Searchbar';
import {useState} from "react";



 function ChooseClinic() {

  const [search, setSearch] = useState("")

  return (
    <>
    <ContentWrapper>
      <h1 style={{fontWeight:"500" ,letterSpacing: ".52rem", textAlign: "center", marginBottom:"1.2rem"}}>CHOOSE YOUR CLINIC</h1>
      <SearchbarWrapper> 
      <Searchbar onChange={(e) => setSearch(e.target.value)} placeholder='Search Clinic'></Searchbar> <SearchbarIcon></SearchbarIcon>
      </SearchbarWrapper>
    <BoxWrapper>
      {Clinics.filter((item) => {
        return search.toLowerCase() === "" ? item : item.name.toLowerCase().includes(search)
      }).map((clinic) => {
        return(
          <Boxes key={clinic.name}> { clinic.name }</Boxes>
          
        )
      })}
      </BoxWrapper>
      </ContentWrapper>
    </>
  )
}
export default ChooseClinic;