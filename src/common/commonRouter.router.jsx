import Mainlayout from '../layout/Mainlayout';
import { createBrowserRouter, createRoutesFromElements, Route,RouterProvider } from 'react-router-dom';
import AboutPage from '../pages/AboutPage';
import ProjectPage from '../pages/ProjectPage';
import ContactPage from '../pages/ContactPage';
import Home from '../components/Home';
import HomePage from '../pages/HomePage';
import InterestAbout from '../components/Interest-About';
import BioAbout from '../components/Bio-About';
import EducationAbout from '../components/Education-About';
import AlphabetTechs from '../components/Alphabet-Techs';
import StradegiSolutions from '../components/Stradegi-Solutions';
import ExperienceAbout from '../components/ExperienceAbout';


const CommonRouter = ()=>{
    const routeObj = createBrowserRouter(
      createRoutesFromElements(
        <Route path='/' element={<Mainlayout/>}>
          <Route index element={<HomePage></HomePage>}></Route>
          <Route  path='about' element={<AboutPage />}>
            <Route path='bio' element={<BioAbout />}></Route>
            <Route path='interest' element={<InterestAbout /> }></Route>
            <Route path='education' element={<EducationAbout />}></Route>
            <Route path='experience' element={<ExperienceAbout />}></Route>
              <Route path='alphabet-techs' element={<AlphabetTechs />}></Route>
              <Route path='stradegi-solutions' element={<StradegiSolutions />}></Route>
          </Route>
          <Route  path='projects' element={<ProjectPage />}></Route>
          <Route  path='rough' element={<Home />}></Route>

          <Route  path='contact' element={<ContactPage />}></Route>
        </Route>
      )
    )
    return routeObj;
        
    
}

export default CommonRouter;