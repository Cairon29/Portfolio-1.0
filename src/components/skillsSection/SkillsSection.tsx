import { BiLogoTypescript } from "react-icons/bi";
import { FaJsSquare } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";


import { FaReact } from "react-icons/fa";
import { SiReactrouter } from "react-icons/si";

import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

import { SiTailwindcss } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiJest } from "react-icons/si";
import { FaPython } from "react-icons/fa6";

import { VscGithub } from "react-icons/vsc";
import { FaGitSquare } from "react-icons/fa";
import { RiVercelFill } from "react-icons/ri";
import { IoLogoFigma } from "react-icons/io5";
import { SiNetlify } from "react-icons/si";
import { SiNotion } from "react-icons/si";
import { SiVite } from "react-icons/si";


import './skills-section-styles.css'

export const SkillsSection = () => {
  return (
    <>
        <h2 id='skills-title'>Skills</h2>
        <section id="skills-section">
            <article className="skill-type">
                <h3>Programming Languages</h3>
                <div className="skill-icons">
                    <BiLogoTypescript id="type-script-logo"/>
                    <FaJsSquare/>
                    <FaCss3Alt/>
                    <FaHtml5/>
                </div>
            </article>
            <article className="skill-type">
                <h3>Front-end</h3>
                <div className="skill-icons">
                    <FaReact/>
                    <SiReactrouter/>
                </div>
            </article>
            <article className="skill-type">
                <h3>BackEnd</h3>
                <div className="skill-icons">
                    <SiExpress/>
                    <FaNodeJs/>
                </div>
            </article>
            <article className="skill-type">
                <h3>Learning</h3>
                <div className="skill-icons">
                    <SiTailwindcss/>
                    <SiRedux/>
                    <SiJest/>
                    <FaPython/>
                </div>
            </article>
            <article className="skill-type">
                <h3>Tools</h3>
                <div className="skill-icons">
                    <VscGithub/>
                    <FaGitSquare/>
                    <SiVite/>
                    <RiVercelFill/>
                    <SiNetlify/>
                    <IoLogoFigma/>
                    <SiNotion/>
                </div>
            </article>
        </section>
    </>
  )
}
