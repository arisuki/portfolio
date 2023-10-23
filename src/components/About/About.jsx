import Babyalice from "./babyalice.jpg"
import Sparkle3 from "../../Images/sparkle3.png"
import Sparkle2 from "../../Images/sparkle2.png"

export default function About() {
  return (
    <div class="row">
      <div className="about">
        <div class="col m8 offset-m2 s12">
        <div className="about-inner">

        <h3>Hello, I'm Alice!</h3>
          <p>
            With roots in Romania, I was raised in the vibrant Canadian
            landscape. A French language teacher from bustling Toronto, moonlighting as an artist,
            musician, coder and content creator by night.
          </p>
          <div className="sparkles">
          <img  src={Sparkle3} alt="" />
          </div>
       
                  <p>
            My passion for web dev was ignited in the early 00's as a teen, 
            via Geocities - a way to showcase fanart and poetry (which has mysteriously disappeared into oblivion). 
           Using just Notepad and web 1.0 
            aesthetics, I made websites for everyone, from my mother's painting portfolio to my University's video
            game club. A lot has changed in the world of web development, but that spark of curiosity and passion remains.
          </p>
          <div className="sparkles">
            <img className="sparkle" src={Sparkle2} alt="" />
            </div>
            <div class="col m8 offset-m2 s12">
          <img className="babyalice" src={Babyalice} alt="" />
        </div>
          </div>
        </div>

      </div>
    </div>
  );
}
