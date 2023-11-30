import React from 'react';
import styled from "styled-components";
import MoreOptions from "./MoreOptions";
import SignInPhone from "./SignInPhone";



const StyledIdPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 70vh;
    padding-top: 15rem;

`

interface Props {
    setNav: (nav: string) => void;  // this is added here for navigation
}

const IdPage: React.FC<Props> = ({setNav}) => {

    return (
    <StyledIdPage>
        <SignInPhone setNav={setNav}/>
        <MoreOptions/>
    </StyledIdPage>
    );
};

export default IdPage

   
