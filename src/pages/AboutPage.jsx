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
const AboutPage = () => {
  const ContextOptions = useContext(Appcontext)
  const aboutPageMenus = [{
        name : "info",
        submenu : [{
            name: "bio",
            icon : "FolderIcon",
            iconColor : "lightpink",
            routingLink : "bio"
        },{
            name : "interest",
            icon : "FolderIcon",
            iconColor : "aliceblue",
            routingLink : "interest"
        },{
            name : "education",
            icon : "FolderIcon",
            iconColor : "lightyellow",
            routingLink : "education"
        }]
    },{
      name : "contact",
      submenu : [{
        name : "naveenkumar592.t@gmail.com",
        icon : "mail",
        iconColor : "currentColor",
        routingLink : "mailto: naveenkumar592.t@gmail.com",
        disableRouting : true
      },{
        name : "9952201603",
        icon : "mobile",
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
    let lineCount = parseInt(definitionContainer.current.offsetHeight/24)-1;
    setPageLines(Array.from({length : lineCount}).map((a,i)=>i+1))

  },[location.pathname])
  
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
   <div className='flex  w-full h-full '>
    <div className='w-[208px] max-w-[208px] flex h-full border-theme-border-color border-r ' >
      <div className='w-10 border-r code-editor-icons flex flex-columns gap-3 border-theme-border-color '>
        <ExtensionIcon />
        <TerminalIcon htmlColor='#fff' />
        <ForumIcon />
      </div>
      <div className="flex-1 overflow-hidden">
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
                          <NavLink 
                            to={submenu.routingLink} title={submenu.name}
                            onClick={()=>submenu.disableRouting?'' :handleActiveMenu(submenu.name)} 
                          >
                            <FolderIcon fontSize="sm" htmlColor={submenu.iconColor} /> 
                              {" "+submenu.name}
                          </NavLink>
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
    <div className="flex-1 flex flex-column">
      {
        activeMenus.length ?
         <div className='flex border-b border-theme-border-color'>
          {activeMenus.map((menu,index)=>{
            return(<>
              <div key={index} className="px-3 py-2 h-[47px] flex items-center justify-between  border-r border-theme-border-color sub-menu-item">
                  <Link to={menu}>{menu}</Link> &nbsp; <span onClick={()=>closeTabMenu({menu})} className='close-btn'>x</span>
              </div>
            </>)
          })}
                   
      </div>  :''
      }
      <div className='grid grid-cols-2 h-full overflow-auto'>
        <div className='col-span-2 p-1 overflow-auto flex lg:col-span-1 border-r border-theme-border-color' style={{maxHeight : "calc(100% +2px)"}} ref={definitionContainer}>
            <div className='min-w-10 text-center me-2 bg-black-200 bg-[#0107164d]'>
              <ul>
                {pageLines.map((i)=><li key={i}>{i}</li>)}
              </ul>
            </div>
            <Outlet></Outlet>

      </div>   

      </div>
    </div>

   </div>
   
   </>
  )
}

export default AboutPage