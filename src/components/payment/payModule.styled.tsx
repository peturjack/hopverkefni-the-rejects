import styled from "styled-components";

export const MyModule = styled.div`
    
    left: 0;
    right: 0;
    height: 65%;
    background: rgb(255,255,255);
    background-image: linear-gradient(to top, #ffffff, #f3f7fe, #e1f0fc, #cbebf6, #D8EEFA); 
    position: absolute;
    bottom: 0;
    border-radius:1rem ;
    &&::placeholder{
        color: red;
    }
`
