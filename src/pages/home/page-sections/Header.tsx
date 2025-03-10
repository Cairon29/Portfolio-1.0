import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TbBrandGithubFilled } from "react-icons/tb";
import { IoDocumentText } from "react-icons/io5";

import '../home-styles.css'

export const Header = () => {
  return (
    <header id='header-home'>
      <section id="header-content">
        <div id="header-text">
          <h1>I'm David Jitomate</h1>
          <p>Bilingual Junior software developer looking to collaborate with professional teams to <b>maintain</b>, <b>enhance</b>, and <b>create</b> code.</p>
          <section id="contact-icons-sections">
            <a icon-description="LinkedIn" href="https://www.linkedin.com/in/jose-david-junco-4540811b1/" target="_blank" rel="noreferrer">
              <FaLinkedinIn/>
            </a>
            <a icon-description="Github" href="https://github.com/Cairon29" target="_blank" rel="noreferrer">
              <TbBrandGithubFilled/>
            </a>
            <a icon-description="Copy Email" href="">
              <MdEmail/>
            </a>
            <a icon-description="Download CV" href="">
              <IoDocumentText/>
            </a>
          </section>
        </div>
        <img src="./src/assets/nishinoya-profile-photo.png" alt="Profile photo"/>
      </section>
    </header>
  )
}
