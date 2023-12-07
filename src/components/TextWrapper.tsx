
// TextWrapper is made as a style for all pages that have text elements in between components.  It works on About page, contact page and ticket page. 

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
        p {
            max-width: 300px;
        }
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


