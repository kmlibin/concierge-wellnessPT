import React from 'react'
import {Outlet} from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import AOS from 'aos';
import 'aos/dist/aos.css'; 


const App = () => {
AOS.init(); 
  return (
   <>
   <NavBar />
 
    <Outlet />
   
   <Footer/>
   </>
  )
}

export default App