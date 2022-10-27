import "./ContactFormApp.css";
import emailjs from 'emailjs-com';
import { useRef } from 'react';

export default function ContactFormApp() {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      const spamCatcher = document.getElementById("spam-catcher").value;

      if (spamCatcher) {
        console.log('Not today, bots!');
      } else {
        emailjs.sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE_ID, 
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID, 
          form.current, 
          process.env.REACT_APP_EMAILJS_USER_ID
          )
          .then((result) => {
              console.log(result.text);
              console.log("SUCCESS!");
              e.target.reset();
              document.getElementById('contact-form-app').innerHTML = '<div class="alert alert-success">Your message was sent successfully. Enzie will respond as soon as she can!</div>'
          }, (error) => {
              console.log(error.text);
              console.log("FAILED...", error);
          });
      }
    };

    return (

      <div>
        <div className="row">
            <div id="contact-form-app" className="contact-form-app col-lg-6">
                <form id="contact-form" ref={form} onSubmit={sendEmail}>
                    <div className="form-row">
                        <div className="form-group col-lg-6">
                        <label htmlFor="nameInput">Name</label>
                        <input type="name" name="from_name" className="form-control" id="nameInput" aria-describedby="nameHelp" required></input>
                    </div>
                    <div className="form-group col-lg-6">
                        <label htmlFor="emailInput">Email address</label>
                        <input type="email" className="form-control" id="emailInput" name="reply_to" aria-describedby="emailHelp" required></input>
                        <small id="emailHelp" className="form-text text-muted">Your email will never be shared with anyone else.</small>
                    </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="subjectInput">Subject</label>
                        <input type="subject" className="form-control" id="subjectInput" aria-describedby="subjectHelp" required></input>
                    </div>
                    <div className="form-group">
                        <textarea type="content" className="form-control" id="contentInput" name="message" aria-describedby="contentHelp" placeholder="How can Enzie help you?" required></textarea>
                    </div>
                    <input name="email" id="spam-catcher" className="d-none" tabIndex="-1" autoComplete="off"></input>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                
            </div>
            <div className="col-lg-6">
                <p>This project is a form that sends an email to Enzie. It attempts to catch bots with a hidden input that will halt any form submissions that include text from this hidden input.</p>
                <p>She used the EmailJS library to recieve emails, and stored the necessary keys in an .env file flagged to be ignored for security.</p> 
                <p>After the form is submitted, it is replaced with a success message to prevent consecutive submissions.</p>
                <p className="github-links"><a href="https://github.com/enzieriddle/enzieriddle/tree/main/src/contactFormApp" rel="noreferrer" target="_blank">Click here</a> to view code on Github.</p>
            </div>
        </div>
        </div>
    );
}