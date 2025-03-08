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
            <FaLinkedinIn/>
            <TbBrandGithubFilled/>
            <MdEmail/>
            <IoDocumentText/>
          </section>
        </div>
        <img src="./src/assets/nishinoya-profile-photo.png" alt="Profile photo"/>
      </section>
    </header>
  )
}
