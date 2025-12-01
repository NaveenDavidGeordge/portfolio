import { ArrowTopRightOnSquareIcon } from '@heroicons/react/16/solid';
import ContactForm from '../components/ContactForm';
import { Appcontext } from '../services/Common.service';
import { useContext, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Mail } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { Phone } from '@mui/icons-material';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";



const ContactPage = () => {
  const ContextOptions = useContext(Appcontext);
  let svgIcon = <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-caret-down-fill" style={{marginTop:"-2px"}} viewBox="0 0 16 16"><path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"></path></svg>

  const [childFormData, setChildFormData] = useState({});

  const handleChildData = (updatedForm) => {
    setChildFormData(updatedForm);
  };

   const code = `const button = document.getElementById("#submitResponse");

   const message = {
      name : "${childFormData.name??""}",
      email : "${childFormData.email??""}",
      message : "${childFormData.message??""}",
      date and time : ${new Date().toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
})}
   }

   button.addEventListener('click',()=>{
     form.send(message);
    })
  `;

  
  
  return (
    <>
    <div className="grid grid-cols-12 h-full">
      <div className="col-span-12 md:col-span-2 border-r border-theme-border-color ">
        
        <Accordion defaultExpanded>
                  <AccordionSummary
                    expandIcon={svgIcon}
                    aria-controls={"contact"}
                    id={"contact"}
                  >
                    <Typography component="span" >contact</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul>
                      <li>
                        <Link to="mailto:naveenkumar592.t@gmail.com" title='naveenkumar592.t@gmail.com'>
                          <Mail className='me-2' fontSize='sm'></Mail> 
                          naveenkumar592.t@gmail.com
                        </Link>
                      </li>
                      <li>
                        <Link to="tel:9952201603" title='9952201503'>
                          <Phone className='me-2' fontSize='sm' /> 
                          9952201603
                        </Link>
                      </li>
                    </ul>
                  </AccordionDetails>  
              </Accordion>
              <Accordion defaultExpanded>
                  <AccordionSummary
                    expandIcon={svgIcon}
                    aria-controls={"findMe"}
                    id={"findMe"}
                  >
                    <Typography component="span" >find me in</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul>
                      <li>
                        <Link className='flex gap-2'> 
                          <ArrowTopRightOnSquareIcon width={15}></ArrowTopRightOnSquareIcon>
                          instagram
                        </Link>
                      </li>
                    </ul>
                  </AccordionDetails>  
              </Accordion>
      </div>
      <div className="col-span-12 md:col-span-10">
        <div className="grid grid-cols-2 h-full">
          <div className="col-span-2 flex items-center justify-center lg:col-span-1 border-0 lg:border-r border-theme-border-color">
            <ContactForm onFormChange={handleChildData} />
          </div>
          <div className="col-span-2 md:col-span-1">
             {/* <pre>{JSON.stringify(childFormData, null, 2)}</pre> */}
              {/* <pre>
         <code>
          {code.split("\n").map((line, index) => (
            <div key={index} className="code-line">
              <span className="line-number">{index + 1}</span>
              <span
                className="line-content"
                dangerouslySetInnerHTML={{ __html: highlight(line) }}
              />
            </div>
          ))}
        </code>
      </pre> */}
       <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}   // VS Code dark theme
        showLineNumbers
        wrapLines
         customStyle={{
    background: "transparent",
  }}

      >
        {code}
      </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ContactPage