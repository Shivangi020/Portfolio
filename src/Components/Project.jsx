import React from 'react'
import ProjectCard from './Cards/ProjectCard'
import project1 from '../assets/glowupPoster.png'
import project2 from '../assets/meterosPoster.png'
import project3 from '../assets/pomodoroPoster.png'
import project4 from '../assets/decortalePoster.png'
import Heading from './Heading'

const Project = () => {
  return (
    <div className='project-cn' id='Project'>
         <Heading heading='Projects' comment='// Crafting Code, Shaping Experiences'/>
         <section className='project-card-cn'>
          <ProjectCard imageLink={project1}/>
          <ProjectCard imageLink={project2}/>
          <ProjectCard imageLink={project3}/>
          <ProjectCard imageLink={project4}/>
         </section>
    </div>
  )
}

export default Project