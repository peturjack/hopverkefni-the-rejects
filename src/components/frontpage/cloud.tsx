import styled from "styled-components";
import { motion } from "framer-motion"

const CloudContainer = styled.div`
    top: 0;
    overflow: hidden;
    position: absolute;
    z-index: -19;
    width: 100%;
    height: 100%;
`

const Cloud = styled(motion.img)`
   width: 120%;
    margin-top: -15%;
    z-index: -20;
`


export { Cloud, CloudContainer }