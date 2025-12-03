import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Appcontext } from '../services/Common.service';

const Footer = () => {
  const contextOptions = useContext(Appcontext);
  return (<>

    <footer >
      <div className="grid grid-cols-2  border-t border-theme-border-color">
        <div className="col-span-2 lg:col-span-1 flex  ">
          <div className='px-3 border-r border-theme-border-color py-2'>
            find me in : 
          </div>
          <div className='px-2 border-r border-theme-border-color py-2'>
            <Link target="_blank"  to={contextOptions.profileURL.instagram} > <InstagramIcon  fontSize="small" /></Link>  
          </div>
          <div className='px-3 border-r border-theme-border-color py-2'>
             <Link target="_blank" to={contextOptions.profileURL.linkedIn} > 
                <LinkedInIcon fontSize="small" />
             </Link>
          </div>
          <div className='px-3 border-r border-theme-border-color py-2 block lg:hidden'>
             <Link target="_blank" to={contextOptions.profileURL.gitHub} > 
             <GitHubIcon fontSize="small" />
             </Link>
          </div>
        </div>
        <div className='hidden lg:flex justify-end col-span-1'>
          <div className="border-l py-2 px-3 border-theme-border-color">
             <Link target="_blank" to={contextOptions.profileURL.gitHub} > 

            @NaveenDavidGeordge &nbsp;
             <GitHubIcon fontSize="small" />
             </Link>

          </div>
        </div>
      </div>
    </footer>

  </>)
}

export default Footer