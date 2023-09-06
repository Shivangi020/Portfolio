import React from 'react'
import SkillCard from './Cards/SkillCard'
import {CgWebsite} from 'react-icons/cg';
import {VscTools} from 'react-icons/vsc' ;
import {MdOutlineSettingsInputComposite} from 'react-icons/md'

const About = () => {
  return (
    <div className='about-cn' id='About'>

        <section className='about-s'>
        <h1>{`{ About me }`}</h1>
        <h3>I am Shivangi</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>
            Alias maxime distinctio quos corporis <br/>
            sequi, quisquam perspiciatis autem explicabo omnis modi  <br/>
            sint architecto laudantium fugiat officia, facilis minima <br/>
            voluptates laborum porro.</p>
        </section>
   

      <section className='skill-s'>
      <h1>{`{ Skills }`}</h1> <span>// Navigating the Web with My Full Stack Skills</span>
      <div className='skill-card-cn'>
      <SkillCard  title="FrontEnd" skillList={['HTML5', 'CSS3' ,'SASS' ,'JavaScript' ,'ReactJS']} Icon={CgWebsite} />
      <SkillCard  title="BackEnd" skillList={['NodeJs', 'Expressjs' , 'RestAPI','MongoDB' ,'SQL']} Icon={VscTools} />
      <SkillCard  title="Other Tools" skillList={['Git', 'Netlify' ,'Figma' ,'Testing']} Icon={MdOutlineSettingsInputComposite} />
      </div>
     </section>
    </div>
  )
}

export default About