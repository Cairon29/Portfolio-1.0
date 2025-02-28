import { AiFillCode } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";
import './nav-bar-styles.css'

export const NavBar = () => {
    return (
        <nav id="nav">
            <section className="nav-container">
                <AiFillCode/>
                <span>Jito</span>
            </section>
            <section>
                <ul id="nav-bar-menu">
                    <li>Home</li>
                    <li>Projects</li>
                    <li>Contact</li>
                    <li>About</li>
                </ul>
            </section>
            <section className="nav-container">
                <VscGithub/>
            </section>
        </nav>
    )
}
