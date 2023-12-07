import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

 const Searchbar = styled.input`
    width: 100%;
    padding: 1.5rem;
    border: none;
    border-radius: .5rem;
    outline: none;
    font-size: 1.6rem;
    &&::placeholder {
        font-size: 1.6rem;
     }
`

const SearchbarWrapper = styled.div`
    width: 100%;
    max-width: 52rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    margin-bottom: 1rem;
    box-shadow: 0px 2px 4px rgba(39, 104, 137, 0.3);
`

const SearchbarIcon = styled(FaSearch)`    //search icon
    font-size: 2rem;
    position: absolute;
    right: 2rem;
    color: grey;
`

export {Searchbar, SearchbarWrapper, SearchbarIcon}