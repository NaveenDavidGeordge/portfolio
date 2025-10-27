import { ArrowTopRightOnSquareIcon } from '@heroicons/react/16/solid';
import ContactForm from '../components/ContactForm';
const ContactPage = () => {
  return (
    <>
    <div className='h-full flex'>
      <div className="w-[208px] border-r border-theme-border-color ">
        <div className=' '>
          <div className='p-3  border-b border-theme-border-color contact-accordion w-full text-white flex items-center gap-3 cursor-pointer' data-id="contact-section" >
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
            </svg>
            contact
          </div>
          {/* Accordion Section :: Begins  */}
          <div className='accordion-section p-4 flex flex-col gap-y-3' id="contact-section" >
              <a href="mailto:naveenkumar5927.t@gmail.com" className="inline-flex item-baseline gap-2  break-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-envelope-at-fill min-w-[16px] min-h-[16px] mt-1" viewBox="0 0 16 16">
                      <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671"/>
                      <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791"/>
                    </svg>
                    naveenkumar5927.t@gmail.com
              </a>
              <a href="tel:9952201603" className="inline-flex item-baseline gap-2  break-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-phone min-w-[16px] min-h-[16px] mt-1" viewBox="0 0 16 16">
                      <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                      <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                    </svg>
                    9952201603
              </a>
          </div>
          {/* Accordion Section :: Ends  */}
           <div className='p-3  border-b border-t border-theme-border-color contact-accordion w-full text-white flex items-center gap-3 cursor-pointer' data-id="social-urls" >
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
            </svg>
            find me in
          </div>
          {/* accordion section :: begins  */}
          <div className='accordion section p-4 flex flex-col gap-y-2' id="social-urls">
             <a href="" className="inline-flex item-baseline gap-2  break-all">
                   <ArrowTopRightOnSquareIcon width={15}></ArrowTopRightOnSquareIcon>
                    Instagram
              </a>
              <a href="" className="inline-flex item-baseline gap-2  break-all">
                   <ArrowTopRightOnSquareIcon width={15}></ArrowTopRightOnSquareIcon>
                    Leetcode
              </a>
              <a href="" className="inline-flex item-baseline gap-2  break-all">
                   <ArrowTopRightOnSquareIcon width={15}></ArrowTopRightOnSquareIcon>
                    LinkedIn
              </a>
              <a href="" className="inline-flex item-baseline gap-2  break-all">
                   <ArrowTopRightOnSquareIcon width={15}></ArrowTopRightOnSquareIcon>
                    Github
              </a>
              <a href="" className="inline-flex item-baseline gap-2  break-all">
                   <ArrowTopRightOnSquareIcon width={15}></ArrowTopRightOnSquareIcon>
                    facebook
              </a>
          </div>
        </div>
      </div>
      <div className='flex-1 flex flex-col'>
            <div className="p-3 border-b border-theme-border-color">
              <div className='invisible'> rough</div>
            </div>
            <ContactForm></ContactForm>
            
      </div>
    </div>
    </>
  )
}

export default ContactPage