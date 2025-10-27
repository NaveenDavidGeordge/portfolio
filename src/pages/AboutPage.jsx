import React, { useContext } from 'react';
import { Appcontext } from '../services/Common.service';
import UseMemoRough from '../components/UseMemoRough';

const AboutPage = () => {
  const ContextOptions = useContext(Appcontext)
  console.log('from the about page context menu ', ContextOptions)
  return (
   <>
   </>
  )
}

export default AboutPage