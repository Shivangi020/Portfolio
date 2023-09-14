import React, { useState } from 'react'

const ProjectCard = ({imageLink }) => {


  return (
    <div className='project-card'>
           <div className='img-cn'><img src={imageLink}></img> </div>
           <h3>Glow up</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Nisi voluptatum exercitationem ipsam consequatur itaque a
              rchitecto quam hic nulla at natus mollitia quidem, e cumque.</p>
              <div>
              <a href='#' target='_blank' >Read Me</a>
           <a href='#' target='_blank'>Visit</a>
              </div>
    
    </div>
  )
}

export default ProjectCard