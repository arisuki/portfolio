import {Link} from "react-scroll"

export default function Nav(){
    return(
        <div className="nav-class">

        <nav className="nav">  
        <Link to="hero" href="#hero"
        >Main
        </Link>

        <Link to="projects" href="#projects"
        >Projects
        </Link>

        <Link to="about" href="#about"
        >About
        </Link>

        <Link to="contact" href="#contact"
        >Contact
        </Link>
        </nav>
        </div>

    )
}