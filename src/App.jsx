import { useState } from 'react'
import '@tailwindplus/elements';
import './App.css'
import HomePage from './pages/HomePage';

import Mainlayout from './layout/Mainlayout';
import { createBrowserRouter, createRoutesFromElements, Route,RouterProvider } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ProjectPage from './pages/ProjectPage';
import ContactPage from './pages/ContactPage';
import Home from './components/Home';
import CommonContext from './services/Common.service';

function App() {
  const [count, setCount] = useState(0)
  const routeObj = createBrowserRouter(
      createRoutesFromElements(
        <Route path='/' element={<Mainlayout/>}>
          <Route index element={<HomePage></HomePage>}></Route>
          <Route  path='about' element={<AboutPage />}></Route>
          <Route  path='projects' element={<ProjectPage />}></Route>
          <Route  path='rough' element={<Home />}></Route>

          <Route  path='contact' element={<ContactPage />}></Route>
        </Route>
      )
    )
  return (
    
    <>
    {/* <Mainlayout></Mainlayout> */}
    <CommonContext>
    <RouterProvider router={routeObj}></RouterProvider>
    </CommonContext>
      {/* <Home></Home> */}
      
    </>
  )
}

export default App
