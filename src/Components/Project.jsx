import React from 'react'
import ProjectCard from './Cards/ProjectCard'
import project1 from '../assets/glowupPoster.png'
import project2 from '../assets/meterosPoster.png'
import project3 from '../assets/pomodoroPoster.png'
import project4 from '../assets/decortalePoster.png'

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