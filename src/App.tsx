import { useState } from 'react'
import Logo from './assets/doctor-svgrepo-com.svg'
import clockLogo from './assets/clock-circle-svgrepo-com.svg'
import './App.css'
import Button from './Button';

function App() {
  const [count, setCount] = useState(0)

  return (
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
          Skráðu þig inn á Biðstofuna og slakaðu á. Við látum þig vita þegar komið er að þér í röðinni. 
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
  )
}

export default App
