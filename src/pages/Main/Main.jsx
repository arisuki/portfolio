import Hero from "../../components/Hero/Hero";
import Projects from "../../components/Projects/Projects";
import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import Nav from "../../components/Nav/Nav";
import "./main.css";
import {useRef} from "react"

export default function Main() {


  return (
    <>
    <Nav/>
      <Hero />
      <Projects />
    <About/>
      <Contact/>
    </>
  );
}
