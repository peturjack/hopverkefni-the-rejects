
import React from 'react';
import styled from "styled-components";
import MoreOptions from "./MoreOptions";
import SignIn from './SignIn';

const StyledIdPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 70vh;
    padding-top: 15rem;

`

interface Props {
    setNav: (nav: string) => void;  // this is added here for navigation
    nav: string;
}

const IdPage: React.FC<Props> = ({setNav, nav}) => {

    return (
    <StyledIdPage>
        <SignIn setNav={setNav} nav={nav}/>
        <MoreOptions setNav={setNav} nav={nav}/>
    </StyledIdPage>
    );
};

export default IdPage