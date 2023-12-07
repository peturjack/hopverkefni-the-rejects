import styled from "styled-components";

 const Boxes = styled.div`
    font-size: 2rem;
    padding: 3rem 2.2rem;
    transition: .3s ease-in-out;
    cursor: pointer;
    background-color: #fffffff8;
    color: #293437;
    border-radius: 0.5rem;
    text-align: center;
    box-shadow: 0px 2px 4px rgba(39, 104, 137, 0.3);

    &&:hover {
        box-shadow: 0px 2px 8px rgba(39, 104, 137, 0.9);
    }
`
// Array of objects for the Clinic boxes. 
const Clinics = [
    {
        name: "Heilsugæsla Urðarhvarfi",
    },
    {
        name: "Heilsugæsla Kópavogi",
      
    },
    {
        name: "Heilsugæsla Árbæ",
        
    },
    {
        name: "Heilsugæsla Glæsibæ",
        
    },
    {
        name: "Heilsugæsla Grafarvogi",
        
    },
    {
        name: "Heilsugæsla Miðbæ"
      
    },
    {
        name: "Heilsugæsla Sólvangi"
    },
    {
        name: "Heilsugæsla Fjörður"
    },
    {
        name: "Heilsugæsla Hlíðar"
    },
    {
        name: "Heilsugæsla Efstaleiti"
    },
    {
        name: "Heilsugæsla Hvammur"
    },
    {
        name: "Heilsugæsla Mjódd"
    },
]

export {Boxes, Clinics}