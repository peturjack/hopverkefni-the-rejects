
// TextWrapper is made as a style for all pages with text elements in between components. 

import React from "react";
import styled from "styled-components"

const StyledTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    align-items: center;
    @media (max-width: 768px) {
    align-items: center;
    }

`

interface Props {
    children: React.ReactNode;  // Adding children as props so the TextWrapper can be used anywhere
}

const TextWrapper: React.FC<Props> = ({ children }) => {
    return (
        <StyledTextWrapper>
            {children}
        </StyledTextWrapper>
    )
}

export default TextWrapper


