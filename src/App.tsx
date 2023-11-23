import React from 'react';
import { ButtonPrimary, AppLoginButton } from './components/Button';
import { GlobalStyles } from './styles/Global';
import Navbar from './components/navbar/Navbar';
import { Burger, Menu } from './components/navbar'

const App: React.FC = () => {
  const[open, setOpen] = React.useState(false)

  return (
    <>
  
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} />
  
  
    </>
  )
}
export default App;