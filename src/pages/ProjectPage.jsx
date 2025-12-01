import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const ProjectPage = () => {
  let svgIcon = <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-caret-down-fill" style={{marginTop:"-2px"}} viewBox="0 0 16 16"><path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"></path></svg>
  let projects =[{
                    title : "Java",
                    icon : "java",
                    projects :[
                      {name :"DSA Problems", description : "Solved over 50+ problems related on Arrays, Queue, Stack and Tree",},
                      {name : "Booking Systems", description : "Console based java application releated on booking tickets in Flights/ Travels" },
                      {name : "Admin Application", description : "Springboot application on management admin process for an organization"}
                    ]
                  },{
                    title : "React Js",
                    icon : "react",
                    projects : [
                      {name:"Portfolio", description : "Simple react applicaiton to build personal portfolio", icon : "profile-portfolio-icon"},
                      {name : "Adminto", description : "Detailed dashboard based application for managing admin operations", icon : "adminto-icon"},
                      {name :"Ignira", description : "Backoffice application for event company managing entire management operations", icons : "ignira-icon"}
                    ]
                  },{
                    title : "Angular Js",
                    icon : "angular",
                    projects : [{name : "nFlows",description :" Development on no-code platform application "}]
                  }
  ];

  const [activeProjectMenus,setActiveMenus]=useState([]) 


  function handleProjectMenu(e){
    let title = e.currentTarget.getAttribute('name'), isChecked = e.currentTarget.checked;
    isChecked ? setActiveMenus((menu)=>[...menu,projects.find(p=>p.title == title) ] ) : setActiveMenus((menu)=>menu.filter(m=>m.title!=title))  
  } 
  return (
    <div className='flex h-full' style={{flexDirection:"column"}} >
      <div className='grid grid-cols-12 h-full' >
        <div className="col-span-12 lg:col-span-2 border-r border-theme-border-color">
          <Accordion  defaultExpanded>
                            <AccordionSummary
                              expandIcon={svgIcon}
                              aria-controls={"projects"}
                              id="projects"
                              >
                              <Typography component="span" >projects</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <ul className='project-list'>
                                {projects.map((project,index)=>{
                                  return (<li key={index}>
                                    <input type="checkbox" id={project.title} name={project.title} onChange={handleProjectMenu} />
                                    <label htmlFor={project.title}>{project.title}</label>
                                  </li>)
                                })}
                              </ul>
                            </AccordionDetails>  
                        </Accordion>
        </div>
        <div className="col-span-12 lg:col-span-10 max-h-full overflow-hidden">
                <div className='border-b flex  border-theme-border-color h-[48px]'>
                        {activeProjectMenus.map((menu,index)=>{
                          return <div className='p-2' key={index}>{menu.title}</div>
                        })
                        }
                </div>
                {activeProjectMenus.length ? 
                  <div className="p-2 grid grid-cols-3 overflow-auto max-h-[calc(100% - 50px)]" style={{maxHeight:"calc(100% - 48px)"}}>
                    {activeProjectMenus.map((menu,index)=>{
                      
                      if(menu.projects){
                        let projectIndex = 1;
                       return  menu.projects.map((project,i)=>{

                          return (
                            <div className="col-span-1 p-1">
                          <div class=" text-md mb-3">
                            <span className='font-semibold tracking-wide text-indigo-500'>Project-{projectIndex++} </span> // {project.name}</div>
                          <div class="overflow-hidden border border-theme-border-color rounded-xl bg-[#060910ab] shadow-md ">

                            <div class="">
                             <img
                                  class="h-45 w-full object-cover bg-[#27314b52] "
                                  src="/img/building.jpg"
                                  alt={project.name}
                                />
                              <div class="p-5">
                                
                                <p class="mt-2 text-gray-500">
                                  {project.description}
                                </p>
                                <button className="btn cursor-pointer my-2">View Project</button>
                              </div>
                            </div>
                          </div>
                        </div>
                          )
                        })
                      }
                    })
                    }
                  </div> 
                :"" }
                
        </div>

      </div>
    </div>
  )
}

export default ProjectPage