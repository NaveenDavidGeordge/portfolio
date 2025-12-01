import { useState } from 'react'
import '@tailwindplus/elements';
import './App.css'
import HomePage from './pages/HomePage';
// import { CommonRouter } from './common/commonRouter.router';
import CommonRouter from './common/commonRouter.router';
import { RouterProvider } from 'react-router-dom';

import CommonContext from './services/Common.service';

function App() {
  const [count, setCount] = useState(0);
  let routerObj = CommonRouter();
  return (
    
    <>
    {/* <Mainlayout></Mainlayout> */}
    <CommonContext>
      <RouterProvider router={routerObj}></RouterProvider>
    </CommonContext>
      {/* <Home></Home> */}
      
    </>
  )
}

export default App
