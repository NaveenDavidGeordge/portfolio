import { useEffect, useRef, useContext} from "react";
import Typewriter from "typewriter-effect/dist/core";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import Button from "@mui/material/Button";
import { Appcontext } from "../services/Common.service";
import { Link } from "react-router-dom";
const HomePage = () => {
const typewriterRef = useRef(null);
const ContextOptions = useContext(Appcontext);
console.log('from use context ', ContextOptions)
  const words = [
    "Full Stack Developer",
    "Front-End Developer",
    "Java Developer",
    "Designer",
    "WordPress Developer"
  ];



  useEffect(() => {
    const tw = new Typewriter(typewriterRef.current, {
      loop: true,
      delay: 75,
      deleteSpeed: 40
    });

    words.forEach((word) => {
      tw.typeString(`> ${word}`)
        .pauseFor(1500)
        .deleteAll();
    });

    tw.start();
  }, []);





  return (
    <>
      <div className="h-full grid grid-cols-12">
        <div className="col-span-12 lg:col-span-6 p-3 lg:p-0">
          <div className="flex justify-center text-start  items-center flex-col h-full">
            <div>
              <p>Hey Hi.. I am  </p>
            <h1 className="text-white text-5xl tracking-wider mt-3">Naveen Kumar</h1>
            <h4 className="text-2xl mt-2 text-indigo-400"  ref={typewriterRef} id="typewriter"> &gt; Full Stack Developer </h4>
            <div className='mt-15'>
              // find my profile on LinkedIn : 
              <p className="mt-3">
                <span className='text-indigo-500'>const </span>
                <span className="text-emerald-300">LinkedIn </span>
                <span className="text-white">= </span>
                <Link className="text-orange-300" to={ContextOptions.profileURL['linkedIn']}>"{ContextOptions.profileURL['linkedIn'].replaceAll('https://www.','')}"</Link>
                <span className='text-orange-300'></span>
              </p>
            </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 p-3 lg:p-0 ">
          <div className="flex items-center h-full p-2 justify-center">
            <div className="h-full w-full right-home-content ">
              <div className="super-glow">
                <div class="glow"></div>
                <img src="/particles.png" alt="" className="particles" />
              </div>
              <div className="super-background">
                <div className="glow"></div>
                <div className="glass"></div>
              </div>
              <div className="wrapper-content">
               </div>
                 <div className="wrapper-main-content h-min  p-2 z-1 relative top-0 lg:top-[8%] left-2 lg:left-[15%] flex w-full lg:w-[70%] lg:h-[80%] p-4 bg-white/20 border border-theme-border-color rounded-lg">
                      <div className="w-full h-min lg:h-full bg-white/70 rounded-md z-1 flex flex-col justify-center text-black p-5  font-sans">
                       <div className="flex  text-lg items-center gap-2">
                        {/* <img src="profile.jpg" className="rounded-full" alt="profile" width={25} height={25} /> */}
                       <AutoAwesomeIcon htmlColor="#0f172b"  className="text-sm text-blue"/>
                        Let’s Build Something Great Together
                        </div> 
                        <br />
                       <h3 className="font-medium">
                      
                       I’m excited to work with teams where ideas grow, challenges are shared, and learning never stops.
                      <br />
                      I believe in building great products through collaboration, clear communication, and clean, meaningful code.
                      <br />
                      For me, development is curiosity, creativity, and the joy of solving real problems.
</h3><br />

                      <p>

Explore my portfolio to see the projects I’ve built and the technologies I use.
You can also download my resume to know more about my journey.
                      </p> <br />
                    <div>
                      <Button
                        variant="contained"
                        color="action"
                        href="/NaveenKumar.pdf"  
                        download
                        className=""
                      >
                        Download Resume
                      </Button>
                    </div>
                      </div>
                   </div>
            </div>
           


             
           
          </div>
        </div>
      
      </div>
    </>
  )
}

export default HomePage