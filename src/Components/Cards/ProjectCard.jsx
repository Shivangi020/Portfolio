import React, { useState } from 'react'

const ProjectCard = ({imageLink }) => {


  return (
    <div className='project-card'>
           <div className='img-cn'><img src={imageLink}></img>
           
       
      
           </div>

    </div>
  )
}

export default ProjectCard