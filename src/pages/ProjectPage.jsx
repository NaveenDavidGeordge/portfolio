import React from 'react'

const ProjectPage = () => {
  return (
    <div className='flex h-full' style={{flexDirection:"column"}} >
      <div className='flex px-2 border-b border-theme-border-color' >
        <div className='w-[200px] pe-5 ps-2 py-3 border-r border-theme-border-color text-white '>
          projects
        </div>
        <div className="border-r border-theme-border-color px-3 py-3">
            React
            <span className="pl-3 cursor-pointer">x</span>
          </div>
          <div className="border-r border-theme-border-color px-3 py-3">
            React
            <span className="pl-3 cursor-pointer">x</span>
          </div>
          <div className="border-r border-theme-border-color px-3 py-3">
            React
            <span className="pl-3 cursor-pointer">x</span>
          </div>
      </div>
      <div className='flex flex-1 px-2'>
          <div className='w-[200px] h-full pe-5 ps-2 py-3 border-r border-theme-border-color text-white '>
            projects
          </div>
          <div className='flex-1 h-full'>
            {/* <UseMemoRough></UseMemoRough>               */}
            
          </div>
      </div>
    </div>
  )
}

export default ProjectPage