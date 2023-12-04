import styled from 'styled-components';
import CheckBox from "../CheckBox";
import {ButtonPrimary} from "../Button";
import { createTheme, ThemeProvider } from '@mui/material';
import TextField from '@mui/material/TextField';
import { purple } from '@mui/material/colors';

const theme = createTheme({
    typography: {
        fontSize: 20
    },
    palette:{
        primary:{
            main: "#276989"
        },
        secondary: purple
    },
    unstable_sxConfig: {
        outlineColor:{
            themeKey:"white"
        },
        outline: {
            themeKey: "none"
        },
       border: {
        themeKey: "none"
       } 
    }
})

const Title = styled.h2`
   font-size: 30px;
   font-weight: 500;
   line-height: normal;
   letter-spacing: 1.2px;
   margin-top: -7rem;
`
const Container = styled.div `
    display: Flex;
    justify-content: Center;
    flex-direction: column;
    align-items: Center;
    gap: 0rem;
`
const PhoneBar = styled.input.attrs({
    pattern: "\\d*",
    inputMode: "numeric"   //adding this bc it hints to browsers to open numeric pad
    }) `
    border-radius: 5px;
    background: #FFF;
    width: 283px;
    height: 55px;
    flex-shrink: 0;
    margin-top:10px;
    padding-top:10px;
    border: none;
    padding-left: 7px;
    font-size: 2.6rem;

    &&::placeholder {
        font-size: 2rem;
    }
`
const AuthenticateButton = styled(ButtonPrimary)`
    margin-top: 3rem;
    margin-bottom: 10rem;
    padding: 20px 30px;
    padding-top: 20px;
    padding-bottom: 20px;
`

interface Props {
        setNav: (nav: string) => void;  // this is added here for navigation
        nav: string;
    }
    

const PageTwoSignIn: React.FC<Props> = function ({setNav, nav}){ 
    return ( <Container> 
       <Title>Sign In</Title>
       {nav==="sign-in"? null: 
        <div>
            <ThemeProvider theme={theme}>
            <TextField sx={{width:"30rem", background:"white", borderRadius:"0.5rem", marginTop:"2rem","& fieldset": { border: 'none', },}}  color='primary' id="outlined-basic" label="Name" variant="outlined" />
            </ThemeProvider>
        </div>}

      <div>
      <ThemeProvider theme={theme}>
      <TextField sx={{width:"30rem", background:"white",borderRadius:"0.5rem", marginTop:"2rem","& fieldset": { border: 'none' },}} color='primary' id="outlined-basic" label="Phone number" variant="outlined" />
            </ThemeProvider>
        
        <CheckBox text={"Remember me"}/>
      </div>
      <AuthenticateButton onClick={() => setNav("clinic")} >Authenticate</AuthenticateButton>
      </Container>
      )
}

export default PageTwoSignIn