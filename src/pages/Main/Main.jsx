import Hero from "../../components/Hero/Hero";
import Projects from "../../components/Projects/Projects";
import About from "../../components/About/About";
import "./main.css";
import {useRef} from "react"

export default function Main() {

  // window.scrollTo({
  //   top: elementRef.current.offsetTop, 
  //   behavior: "smooth",

  // })

  return (
    <>
      <Hero />
      <Projects />
    <About/>
      
    </>
  );
}
