import React from 'react'

const ContactForm = () => {
  return (
    <div className='flex-1 flex '>
        <div className='flex w-1/2 border-r border-theme-border-color  items-center justify-center '>
                <form action="">
                    <div >
                        <label htmlFor="name">_name</label><br />
                    <input type="text" name='name' placeholder='Enter full name' />
                    </div>
                    <div className='mt-2'>
                        <label htmlFor="mailid">_name</label><br />
                        <input type="email" name='email' placeholder='Enter email' />
                    </div>
                    <div></div>
                </form>
        </div>
        <div className='flex w-1/2 '>
                asfe
        </div>
      
    </div>
  )
}

export default ContactForm
