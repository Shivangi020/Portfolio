import React from 'react'
import ProjectCard from './Cards/ProjectCard'
import project1 from '../assets/1.png'
import project2 from '../assets/2.png'
import project3 from '../assets/3.png'
import project4 from '../assets/4.png'

const Project = () => {
  return (
    <div className='project-cn' id='Project'>
         <h1>{`{ Project }`}</h1> <span>// Crafting Code, Shaping Experiences</span>
         <section className='project-card-cn'>
          <ProjectCard imageLink={project1} detailId={0}/>
          <ProjectCard imageLink={project2} detailId={1}/>
          <ProjectCard imageLink={project3} detailId={2}/>
          <ProjectCard imageLink={project4} detailId={3}/>
         </section>
    </div>
  )
}

export default Project