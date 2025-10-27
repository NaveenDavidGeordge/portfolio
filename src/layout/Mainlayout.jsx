import React from 'react'
// import Home from './components/Home'
// import Newhome from './components/Newhome';
// import Footer from './components/Footer';
import Newhome from '../components/Newhome'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom';

const Mainlayout = () => {
  return (
     <>
     
      <div className='h-screen p-1'>
        <div className='h-full flex flex flex-col bg-theme border-solid border rounded-md border-theme-border-color'>
        <Newhome></Newhome>
        <div className=' flex-1'>
            <Outlet></Outlet>
        </div>
        <Footer></Footer>
        

        </div></div>
     </>
  )
}

export default Mainlayout