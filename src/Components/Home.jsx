import {VscGithubAlt} from 'react-icons/vsc' ;
import {CiLinkedin} from 'react-icons/ci' ;


function Home() {
  return (
    <div id='Home'>
      <div className='home-cn'>
         <p>{`<Hello/>`}</p>
         <p>I am a </p>
         <p>Full Stack Developer</p>
      </div>
      <div className='links-on-home'>
       <a href='https://github.com/Shivangi020'  target='_blank'><VscGithubAlt/></a>
       <a href='https://www.linkedin.com/in/shivangi-singh-305751192/'  target='_blank'><CiLinkedin/></a>
       <a href="#" className='resume-btn' target='_blank' >Resume</a>
      </div>

    </div>
  )
}

export default Home ;