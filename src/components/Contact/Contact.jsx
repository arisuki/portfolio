import EmailContactForm from "../EmailContactForm/EmailContactForm"
export default function Contact(){
    return(
        <div class="row">
        <div class="col m8 s12 offset-m2">
        <div className="contact">
            <h1>Got a problem to solve? </h1>
            <h3>Contact me!</h3>
            
            <p>
               <EmailContactForm/>
            </p>
        </div>
        </div>
        </div>
    )
}