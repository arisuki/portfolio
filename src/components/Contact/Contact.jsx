import EmailContactForm from "../EmailContactForm/EmailContactForm";
import Twitter from "../../Images/twitter.png";
import Github from "../../Images/github.png";
import Itch from "../../Images/itch.png";
import Linkedin from "../../Images/linkedin.png";
import Sparkle3 from "../../Images/sparkle3.png";

export default function Contact() {
  return (
        <div className="contact-wrapper">
    <div class="row">
      <div class="col m8 s12 offset-m2">

        <div className="contact">
          <h3>GOT A PROBLEM TO SOLVE? </h3>
          <h4>Contact me!</h4>
          <div className="sm-icons">
            <a
              href="https://twitter.com/alisuca3"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Twitter} alt="Twitter" title="Twitter" />
            </a>
            <a
              href="https://github.com/arisuki"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Github} alt="Github" title="Github" />
            </a>
            <a href="https://arisuki.itch.io/" target="_blank" rel="noreferrer">
              <img src={Itch} alt="Itch" title="Itch" />
            </a>
            <a
              href="https://linkedin.com/in/alicestancu"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Linkedin} alt="Linkedin" title="LinkedIn" />
            </a>
          </div>
          <div className="sparkles">
            <img src={Sparkle3} alt="" />
          </div>

          <p>
            <EmailContactForm />
          </p>
        </div>
      </div>
    </div>
    </div>

  );
}
