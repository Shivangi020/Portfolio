import React, { useState } from 'react'

const ProjectCard = ({imageLink , detailId}) => {

  const [projectId , setProjectId] = useState(0);

  const onClickAction = (detailId)=>{
    setProjectId(detailId)
  }

  return (
    <div className='project-card'>
           <div className='img-cn'><img src={imageLink}></img>

           <div className='image-overlay'>
           <button onClick={()=>onClickAction(detailId)}>View Details</button>
           </div>
           </div>

    </div>
  )
}

export default ProjectCard