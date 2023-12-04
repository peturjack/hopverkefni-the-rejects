
import React from 'react';
import styled from "styled-components";
import MoreOptions from "./MoreOptions";
import PageTwoSignIn from './PageTwoSignIn';

const StyledNoIdPage = styled.div`
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

const NoIdPage: React.FC<Props> = ({setNav, nav}) => {

    return (
    <StyledNoIdPage>
        <PageTwoSignIn setNav={setNav} nav={nav}/>
        <MoreOptions setNav={setNav} nav={nav}/>
    </StyledNoIdPage>
    );
};

export default NoIdPage