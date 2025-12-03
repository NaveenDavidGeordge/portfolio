import React, { useContext, useEffect, useRef, useState } from 'react';
import { Appcontext } from '../services/Common.service';
import UseMemoRough from '../components/UseMemoRough';
import { Link, Navigate, NavLink, Outlet } from 'react-router-dom';
import MaterialTrail from '../components/MaterialTrail';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { useLocation } from 'react-router-dom';
import FolderIcon from '@mui/icons-material/Folder';
import TerminalIcon from '@mui/icons-material/Terminal';
import ExtensionIcon from '@mui/icons-material/Extension';
import ForumIcon from '@mui/icons-material/Forum';
import { useNavigate } from 'react-router-dom';
import { Mail } from '@mui/icons-material';
import { Phone } from '@mui/icons-material';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const AboutPage = () => {
  const ContextOptions = useContext(Appcontext)
  const aboutPageMenus = [{
        name : "info",
        submenu : [{
            name: "bio",
            icon : <FolderIcon fontSize="sm" htmlColor={"lightpink"} /> ,
            iconColor : "lightpink",
            routingLink : "bio"
        },{
            name : "interest",
            icon : <FolderIcon fontSize="sm" htmlColor={"aliceblue"} /> ,
            iconColor : "aliceblue",
            routingLink : "interest"
        },{
            name : "education",
            icon : <FolderIcon fontSize="sm" htmlColor={"lightyellow"} /> ,
            iconColor : "lightyellow",
            routingLink : "education",
        },{
          name : "experience",
          icon : <FolderIcon fontSize="sm" htmlColor={"skyblue"} />,
          routingLink : "experience",
          submenu : [{
            name : "Alphabet Techs",
            icon : 'AT',
            routingLink : 'alphabet-techs'
          },   
          {
            name : "Stradegi Solutions",
            icon : 'SS',
            routingLink : 'stradegi-solutions'
          }
        ]
        }
      ]
    },{
      name : "contact",
      submenu : [{
        name : "naveenkumar592.t@gmail.com",
        icon : <Mail fontSize="sm"/> ,
        iconColor : "currentColor",
        routingLink : "mailto: naveenkumar592.t@gmail.com",
        disableRouting : true
      },{
        name : "9952201603",
        icon : <Phone fontSize='sm' />,
        iconColor : "currentColor",
        routingLink : "tel:9952201603",
        disableRouting : true
      }
      ]
    }
    ]
  const [activeMenus,setActiveMenus]= useState([]);
  const navigateTo = useNavigate();
  const location = useLocation();
  const definitionContainer = useRef()
  const [pageLines,setPageLines]=useState([]);
  useEffect(()=>{
   setTimeout(() => {
     let lineCount = parseInt(definitionContainer.current.scrollHeight/24)-1;
    setPageLines(Array.from({length : lineCount}).map((a,i)=>i+1))
   }, 500);

  },[location.pathname])

  const showCaseCode = `
  `
  
  function handleActiveMenu(menuName){
    if(!activeMenus.find(menu=>menu==menuName)){
      setActiveMenus((prev)=>[...prev,menuName])
    }
  }

  function closeTabMenu(menuName){
    let filteredArray = activeMenus.filter(menu=>menu!=menuName.menu);
      filteredArray.length ? navigateTo(filteredArray[0]) : navigateTo("../about")
 
    setActiveMenus(filteredArray);

  }

  let svgIcon = <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-caret-down-fill" style={{marginTop:"-2px"}} viewBox="0 0 16 16"><path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"></path></svg>

  return (
   <>
   <div className='grid grid-cols-12 h-full '>
      <div className="col-span-12 lg:col-span-2 lg:border-r flex h-full border-0 border-theme-border-color">
        <div className='hidden lg:flex flex-col items-center py-3 gap-3 min-w-[15%] h-full border-r border-theme-border-color'>
          <ExtensionIcon  fontSize='small'/>
          <TerminalIcon htmlColor='#fff' fontSize='small' />
          <ForumIcon fontSize='small' />
        </div>
        <div className='w-full lg:max-w-[85%]'>
           {
          aboutPageMenus.map((menu,index)=>{
            return (
              <Accordion key={index} defaultExpanded>
                  <AccordionSummary
                    expandIcon={svgIcon}
                    aria-controls={menu.name}
                    id={menu.name}
                    htmlColor="#FFF"
                  >
                    <Typography component="span" >{menu.name}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul>
                      {menu.submenu.map((submenu,index)=>{
                        
                      return  <li key={index}>
                        {
                          submenu.submenu ? 
                           <Accordion key={index} >
                                  <AccordionSummary
                                    expandIcon={svgIcon}
                                    aria-controls={submenu.name}
                                    id={submenu.name}
                                  >
                                    {/* <Typography component="span" >{submenu.name}</Typography> */}
                                     <NavLink 
                                            to={submenu.routingLink} title={submenu.name} className={"ml-1"}
                                            onClick={()=>submenu.disableRouting?'' :handleActiveMenu(submenu.name)} 
                                          > <Typography component="span" >{submenu.name}</Typography></NavLink>
                                  </AccordionSummary>
                                  <AccordionDetails>
                                    <ul>
                                      {submenu.submenu.map((m,index)=>{
                                        
                                      return  <li key={index}>
                                        {
                                          <NavLink 
                                            to={m.routingLink} title={m.name}
                                            onClick={()=>m.disableRouting?'' :handleActiveMenu(m.routingLink)} 
                                          >
                                            {/* <FolderIcon fontSize="sm" htmlColor={submenu.iconColor} />  */}
                                            {m.icon}
                                              {" "+m.name}
                                          </NavLink>
                                        }
                                          
                                        </li>
                                        
                                      })}
                                    </ul>
                                  </AccordionDetails>  
                              </Accordion>
                          :
                          <NavLink 
                            to={submenu.routingLink} title={submenu.name}
                            onClick={()=>submenu.disableRouting?'' :handleActiveMenu(submenu.name)} 
                          >
                            {/* <FolderIcon fontSize="sm" htmlColor={submenu.iconColor} />  */}
                            {submenu.icon}
                              {" "+submenu.name}
                          </NavLink>
                        }
                          
                        </li>
                        
                      })}
                    </ul>
                  </AccordionDetails>  
              </Accordion>
            )
          })
        }
        </div>
      </div>
      <div className='col-span-12 lg:col-span-10 flex lg:flex-col  overflow-hidden'>
              {
                      activeMenus.length ?
                      <div className='border-b w-full hidden lg:flex border-theme-border-color'>
                        {activeMenus.map((menu,index)=>{
                          return(<>
                            <div key={index} className="px-3 py-2 h-[47px] flex items-center justify-between  border-r border-theme-border-color sub-menu-item">
                                <Link to={menu}>{menu}</Link> &nbsp; <span onClick={()=>closeTabMenu({menu})} className='close-btn'>x</span>
                            </div>
                          </>)
                        })}
                                
                    </div>  :''
                    }

                     <div className="flex flex-1 grid grid-cols-2 overflow-hidden">
                      <div className="col-span-2 lg:col-span-1  lg:border-r borde-0 border-theme-border-color flex overflow-auto  " ref={definitionContainer}>
                         <div className='min-w-10 text-center me-2 bg-black-200 h-full bg-[#0107164d]'>
                            <ul>
                              {pageLines.map((i)=><li key={i}>{i}</li>)}
                            </ul>
                          </div>
                        <div>
                          <Outlet></Outlet>
                        </div>
                      </div>
                      <div className="col-span-2 lg:col-span-1 hidden lg:block p-0 m-0 overflow-auto">        
                        <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}  
        showLineNumbers
        wrapLines
        className={"p-0"}
  >
{`/**
 * Meet Naveen Kumar
 * A developer built from curiosity, creativity, and a little creative chaos.
 */

class Developer {
  constructor() {
    this.name = "Naveen Kumar";
    this.education = "B.E (Bachelor of Engineering)";
    this.traits = ["curious", "calm", "creative", "team-friendly"];
    this.hobbies = ["bikes", "cars","music","video editing","coding vibes","cinema","cooking","spiritual learning"];
  }

  code() {
    return "Writing clean UI, breaking bugs, fixing bugs… and sometimes debugging the debugging.";
  }

  vibe() {
    return "If music is on, productivity mode is activated.";
  }

  weekend() {
    return "Watching a film, editing videos, experimenting in the kitchen, or exploring bike rides.";
  }

  spiritualMode() {
    return "Staying grounded, learning, and evolving every single day.";
  }
}

const naveen = new Developer();
`
}
  </SyntaxHighlighter>

      </div>
                    </div>
       </div>

   </div>
   
   
   </>
  )
}

export default AboutPage


