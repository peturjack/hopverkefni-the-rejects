
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
}

const NoIdPage: React.FC<Props> = ({setNav}) => {

    return (
    <StyledNoIdPage>
        <PageTwoSignIn setNav={setNav}/>
        <MoreOptions setNav={setNav}/>
    </StyledNoIdPage>
    );
};

export default NoIdPage