import styled from "styled-components";


 const Boxes = styled.div`
    font-size: 1.6rem;
    padding: 3rem 2.2rem;
    transition: .3s ease-in-out;
    cursor: pointer;
    background-color: #276989;
    color: white;
    border-radius: 0.5rem;
    text-align: center;
    &&:hover {
        background-color: #003C59;
    }
`

const Clinics = [
    {
        name: "Heilsugæsla Urðarhvarfi",
    },
    {
        name: "Heilsugæsla Kopavogi",
      
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
        name: "Heilsugæsla Solvangi"
    },
    {
        name: "Heilsugæsla Fjörður"
    },
    {
        name: "Heilsugæsla Hliðum"
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