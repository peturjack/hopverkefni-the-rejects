
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
// Defines the properties that the TextWrapper component will accept
interface Props {
    children: React.ReactNode;  // Adding children as props so the TextWrapper can be used anywhere with any divs inside
}
// Functional Component TextWrapper that accepts props of type Props
const TextWrapper: React.FC<Props> = ({ children }) => {
    return (
        // Renders the children inside the StyledTextWrapper component
        // children prop allows you to pass any React elements as children to the component.
        <StyledTextWrapper>
            {children}
        </StyledTextWrapper>
    )
}

export default TextWrapper


