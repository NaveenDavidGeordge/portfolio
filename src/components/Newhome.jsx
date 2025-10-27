import React from 'react'
import { Link, NavLink } from 'react-router-dom';


const Newhome = () => {

    let menu = [
        {title : "_hello",routePath : "home"}
    ]
  return (
    <>
      <header>
            <nav className='flex px-2 justify-between border-b border-theme-border-color'>
                <div className='flex'>
                    <div className='logo-title min-w-[200px] pe-5 ps-2 py-3 border-r border-theme-border-color'>naveen-kumar</div>
                    <div className='nav-menu'>
                        <ul className='flex'>
                            
                            <li className='px-5 py-3 border-r border-theme-border-color'>
                                <NavLink to={'/'}>_hello</NavLink> 
                                </li>
                            <li className='px-5 py-3 border-r border-theme-border-color'>
                                <NavLink to={"about"}>_about-me</NavLink></li>
                            <li className='px-5 py-3 border-r border-theme-border-color'>
                                <NavLink to={"projects"}>_projects</NavLink></li>
                                 <li className='px-5 py-3 border-r border-theme-border-color'>
                                <NavLink to={"rough"}>rough</NavLink></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="nav-item px-5 py-3 border-l border-theme-border-color">
                        <NavLink to="contact">_contact-me</NavLink></div>
                </div>
            </nav>
        </header>
    </>
  )
}

export default Newhome