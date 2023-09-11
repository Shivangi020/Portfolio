import React from 'react'
import SkillCard from './Cards/SkillCard'
import {CgWebsite} from 'react-icons/cg';
import {VscTools} from 'react-icons/vsc' ;
import {MdOutlineSettingsInputComposite} from 'react-icons/md'
import Heading from './Heading';
import avatar from '../assets/Avatar.jpeg'

const About = () => {
  return (
    <div className='about-cn' id='About'>

        <section className='about-s'>
        {/* <img src={avatar}></img> */}
        <Heading heading={'About me'}/>
        <h3>I am Shivangi</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>
            Alias maxime distinctio quos corporis <br/>
            sequi, quisquam perspiciatis autem explicabo omnis modi  <br/>
            sint architecto laudantium fugiat officia, facilis minima <br/>
            voluptates laborum porro.</p>
        </section>
   

      <section className='skill-s'>
      <Heading heading={'Skills'} comment={'// Navigating the Web with My Full Stack Skills'}/>
      <div className='skill-card-cn'>
      <SkillCard  title="FrontEnd" skillList={['HTML5', 'CSS3' ,'SASS' ,'JavaScript' ,'ReactJS']} Icon={CgWebsite} />
      <SkillCard  title="BackEnd" skillList={['NodeJs', 'Expressjs' , 'RestAPI','MongoDB' ,'SQL']} Icon={VscTools} />
      <SkillCard  title="Other Tools" skillList={['Git', 'Deployment' ,'Figma' ,'Testing']} Icon={MdOutlineSettingsInputComposite} />
      </div>
     </section>
    </div>
  )
}

export default About