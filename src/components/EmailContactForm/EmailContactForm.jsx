import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Sparkle2 from "../../Images/sparkle2.png";

const EmailContactForm = () => {
  const form = useRef();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    if (!isFormSubmitted) {
      emailjs
        .sendForm(
          "service_c5k5gbd",
          "template_eoto77u",
          form.current,
          "UhzxHgyaT6Za4-848"
        )
        .then((result) => {
          // Show the user a success message
          setIsFormSubmitted(true);

          // Reset the form fields
          form.current.reset();
        })
        .catch((error) => {
          // Show the user an error message
        });
    }
  };

  return (
    <div className="form">
      <div class="row">
        <div class="col m6 s12 offset-m3">
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" 
            placeholder="Hello, I was interested in..."
            />
       <br /><br />
            <input
              className="submit"
              type="submit"
              value={isFormSubmitted ? "SENT" : "SEND"}
              disabled={isFormSubmitted}
            />
                 <div className="sparkles">
              <img src={Sparkle2} alt="" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmailContactForm;
