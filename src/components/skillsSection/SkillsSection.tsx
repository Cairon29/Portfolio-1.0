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
import { SiPostman } from "react-icons/si";



import './skills-section-styles.css'

export const SkillsSection = () => {
  return (
    <div>
        <h2 id='skills-title'>Skills</h2>
        <section id='skills-section'>
            <article className='skills-article'>
                <h4>Technologies</h4>
                <div className="skill-icons">
                    <span><BiLogoTypescript id="type-script-logo"/> Typescript</span>
                    <span><FaJsSquare/>Javascript</span>
                    <span><FaCss3Alt/>CSS</span>
                    <span><FaHtml5/>HTML</span>
                    <span><FaReact/>React</span>
                    <span><SiRedux/> Redux</span>
                    <span><SiReactrouter/>React Router</span>
                    <span><FaNodeJs/>Node Js</span>
                    <span><SiExpress/>Express</span>
                </div>
            </article>

            <article className='skills-article'>
                <h4>Tools</h4>
                <div className="skill-icons">
                    <span><VscGithub/> Github</span>
                    <span><FaGitSquare/> Git</span>
                    <span><SiPostman/> Postman</span>
                    <span><RiVercelFill/> Vercel</span>
                    <span><SiNetlify/> Netlify</span>
                    <span><IoLogoFigma/> Figma</span>
                </div>
            </article>
            <article className='skills-article'>
                <h4>Learning</h4>
                <div className="skill-icons">
                    <span><SiTailwindcss/> Tailwind CSS</span>
                    <span><SiJest/> Jest</span>
                    <span><FaPython/> Python</span>
                </div>
            </article>
        </section>
    </div>
  )
}
