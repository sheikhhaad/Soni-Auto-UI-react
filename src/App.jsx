
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.css'
import Footer2 from './components/Footer2'



const App = () => {

  
  return (
    <>
    
    <Navbar/>
    <Outlet/>

    <Footer2/>
    

    </>
  )
}

export default App
