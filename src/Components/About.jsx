import React from "react";
import SkillCard from "./Cards/SkillCard";
import Heading from "./Heading";
import avatar from "../assets/Avatar.jpeg";
import { PiLinkedinLogo } from "react-icons/pi";
import { CgWebsite } from "react-icons/cg";
import { VscTools, VscGithubAlt } from "react-icons/vsc";
import { MdOutlineSettingsInputComposite } from "react-icons/md";
import { GoMail } from "react-icons/go";

const About = () => {
  return (
    <div className="about-cn" id="About">
      <section className="about-s">
        <img src={avatar} className="avatar"></img>
        <Heading heading={"About me"} />
        <h3>I'm Shivangi</h3>
        <p>
        An India-based web and software developer ,with a strong interest in coding as a
        means of problem-solving. My experience in the world of technology has been exciting. 
        I derive immense pleasure in converting website designs into functional and visually 
        appealing websites through my coding skills. Witnessing my code's translation into a tangible
         website always feels magical.<br/>
        I'm excited to collaborate on unique and interesting projects. <br/>
        Let's connect and 
        explore the possibilities technology has to offer together.
        </p>
        <div className="links-on-about">
          <a href="mailto: shivangi.singh113qa@gmail.com" className="mail-link">
            <GoMail/>
          </a>
          <a href="https://github.com/Shivangi020" target="_blank" className="git-link">
            <VscGithubAlt />
          </a>
          <a
            href="https://www.linkedin.com/in/shivangi-singh-305751192/"
            target="_blank"
          >
            <PiLinkedinLogo />
          </a>
          <a href="#" className="resume-btn" target="_blank">
            Resume
          </a>
        </div>
      </section>

      <section className="skill-s">
        <Heading
          heading={"Skills"}
          comment={"// Navigating the Web with My Full Stack Skills"}
        />
        <div className="skill-card-cn">
          <SkillCard
            title="FrontEnd"
            skillList={["HTML5", "CSS3", "SASS", "JavaScript", "ReactJS"]}
            Icon={CgWebsite}
          />
          <SkillCard
            title="BackEnd"
            skillList={["NodeJs", "Expressjs", "RestAPI", "MongoDB", "SQL"]}
            Icon={VscTools}
          />
          <SkillCard
            title="Other Tools"
            skillList={["Git", "Deployment", "Figma", "Testing"]}
            Icon={MdOutlineSettingsInputComposite}
          />
        </div>
      </section>
    </div>
  );
};

export default About;
