import React from 'react'

const SkillCard = ({title , skillList ,Icon}) => {

  return (
    <div className='skill-card'>
      <Icon className='skill-icon'/>
      <p>{title}</p>
      <ul>
      { skillList.map((skill) => {
         return <li>{skill}</li>
      })}
      </ul>
    </div>
  )
}

export default SkillCard