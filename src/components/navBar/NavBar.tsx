import { AiFillCode } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";
import './nav-bar-styles.css'

export const NavBar = () => {
    return (
        <nav id="nav">
            <a href="#" className="nav-container">
                <AiFillCode className="nav-svg"/>
                <span>Jito</span>
            </a>
            <section className="nav-container-menu">
                <ul id="nav-bar-menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#projects-title">Projects</a></li>
                    <li><a href="#contact-me-section">Contact</a></li>
                    <li>About</li>
                </ul>
            </section>
            <a href="https://github.com/Cairon29" target="_blank" className="nav-container">
                <VscGithub className="nav-svg"/>
            </a>
        </nav>
    )
}
