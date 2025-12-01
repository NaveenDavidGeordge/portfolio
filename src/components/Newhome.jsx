import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Newhome = () => {
    const [showMenu, setShowMenu]=useState(false)
    let menu = [
        {title : "_hello",routePath : "home"}
    ]
  return (
    <>
    <header>
         <nav className='grid grid-cols-12 border-b border-theme-border-color'>
                    <div className="py-2 pl-3 col-span-11 lg:col-span-2 border-r border-theme-border-color">naveen-kumar</div>
                    <NavLink to={"/"} className='py-2 lg:block hidden col-span-1 text-center border-r border-theme-border-color'>_hello</NavLink>
                    <NavLink to={"about"} className='py-2 lg:block hidden col-span-1 text-center border-r border-theme-border-color'>_about_me</NavLink>
                    <NavLink to={"projects"} className='py-2 lg:block hidden col-span-1 text-center border-r border-theme-border-color'>_projects</NavLink>
                    <div className='col-span-6 lg:block md:hidden'></div>
                    <NavLink to={"contact"} className='py-2 col-span-1 lg:block hidden text-center border-l border-theme-border-color'>_contact</NavLink>
                    <div className='block lg:hidden '><Button onClick={()=>setShowMenu((prev)=>!prev)}><MenuIcon /></Button></div>
        </nav>
    </header>
    {showMenu && <div className='block lg:hidden fixed top-[42px] border border-theme-border-color left-1 right-1 z-9 h-[calc(100%-41px)] bg-[#020a1c]  '>
       <ul>
        <li className='py-2  text-center border-b border-theme-border-color'>
             <NavLink to={"/"} className="w-full h-full block" onClick={()=>setShowMenu(false)} >_hello</NavLink>
        </li>
        <li className='py-2  text-center border-b border-theme-border-color'><NavLink className="w-full h-full block" to={"about"} onClick={()=>setShowMenu(false)} >_about_me</NavLink></li>
        <li className='py-2  text-center border-b border-theme-border-color'><NavLink className="w-full h-full block" to={"projects"} onClick={()=>setShowMenu(false)}>_projects</NavLink></li>
        <li className='py-2  text-center border-b border-theme-border-color'><NavLink className="w-full h-full block" to={"contact"} onClick={()=>setShowMenu(false)} >_contact</NavLink></li>
       </ul>
                    
    </div>}
    </>
  )
}

export default Newhome