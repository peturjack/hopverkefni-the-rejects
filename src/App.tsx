import { useState } from 'react'
import Logo from './assets/doctor-svgrepo-com.svg'
import clockLogo from './assets/clock-circle-svgrepo-com.svg'
import './App.css'
import Button from './Button';
import { device } from './styles/BreakPoints'
import { theme } from './styles/Theme'
import styled, { ThemeProvider } from 'styled-components'

const Title = styled.h1`
  color: ${(props) => props.theme.colors.primaryTextColor};
  font-size: 48px;
  @media ${device.md} {
    font-size: 32px;
  }
`


function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={theme}>
    <>
      <div>
        <a href="" target="_blank">
          <img src={clockLogo} className="logo" alt="Clock logo" />
        </a>
        <a href="" target="_blank">
          <img src={Logo} className="logo" alt="Waiting Logo" />
        </a>
      </div>
      <h1>Velkomin/n á Biðstofuna</h1>
      <div className="card">
        <p>
          Skráðu þig inn á Biðstofuna og slakaðu á. <br />Við látum þig vita þegar komið er að þér í röðinni. 
        </p>
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
      </div>
        <div>
          <Button></Button>
        </div>
      <p className="read-the-docs">
        allskonar frábært
      </p>
    </>
    </ThemeProvider>
  )
}

export default App
