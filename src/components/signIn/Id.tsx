import styled from "styled-components"
import MoreOptions from "./MoreOptions"
import SignInPhone from "./SignInPhone"


const StyledIdPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 70vh;
    padding-top: 15rem;

`
const IdPage = () => {

    return (
    <StyledIdPage>
        <SignInPhone/>
        <MoreOptions/>
    </StyledIdPage>
    );
};

export default IdPage

   
