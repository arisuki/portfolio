import {Link} from "react-scroll"

export default function Nav(){
    return(
        <nav className="nav">  
        <Link to="hero" href="#hero"
        >Main
        </Link>&nbsp;&nbsp;

        <Link to="projects" href="#projects"
        >Projects
        </Link>&nbsp;&nbsp;

        <Link to="about" href="#about"
        >About
        </Link>&nbsp;&nbsp;

        <Link to="contact" href="#contact"
        >Contact
        </Link>
        </nav>
    )
}