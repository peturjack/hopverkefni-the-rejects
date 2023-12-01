import styled from "styled-components";

export const MyModule = styled.div`
    display: none;
    left: 0;
    right: 0;
    height: 65%;
    background: rgb(255,255,255);
    background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(182,230,233,1) 100%);
    position: absolute;
    bottom: 0;
    border-radius:1rem ;
    &&::placeholder{
        color: red;
    }
`
