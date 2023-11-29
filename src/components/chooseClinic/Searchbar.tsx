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
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    margin-bottom: 2rem;
`

const SearchbarIcon = styled(FaSearch)`
    font-size: 2rem;
    position: absolute;
    right: 2rem;
    color: grey;
`

export {Searchbar, SearchbarWrapper, SearchbarIcon}