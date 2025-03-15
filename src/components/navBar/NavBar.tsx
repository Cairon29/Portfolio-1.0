import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { AiFillCode } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";
import './nav-bar-styles.css'

export const NavBar = () => {
    return (
        <nav id="nav">
            <Link to='/home' className="nav-container">
                <AiFillCode className="nav-svg"/>
                <span>Jito</span>
            </Link>
            <section className="nav-container-menu">
                <ul id="nav-bar-menu">
                    <li><Link to="/home">Home</Link></li>
                    <li><HashLink to="/home#projects-title">Projects</HashLink></li>
                    <li><HashLink to="/home#contact-me-section">Contact</HashLink></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </section>
            <a href="https://github.com/Cairon29" target="_blank" className="nav-container">
                <VscGithub className="nav-svg"/>
            </a>
        </nav>
    )
}
