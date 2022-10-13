import Name from './components/Name';
import Email from './components/Email';
import Subject from './components/Subject';
import Content from './components/Content';
import "./ContactFormApp.css";
import { useEffect } from 'react';
import { useState } from "react";
import { send } from 'emailjs-com';


export default function ContactFormApp() {

    useEffect(() => {
        const form = document.getElementById("contact-form");
        form.action = "mailto:enzie";
        form.action+= "riddle@";
        form.action+= "gmail.com";
    }, []);

    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: '',
        message: '',
        reply_to: '',
      });
    
      const onSubmit = (e) => {
        e.preventDefault();
        e.preventDefault();
        send(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          toSend,
          process.env.REACT_APP_EMAILJS_USER_ID
        )
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
          })
          .catch((err) => {
            console.log('FAILED...', err);
          });
      };
    
      const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };
    

    return (
        
        <div className="row">
            <div className="contact-form-app col-lg-6">
                <form id="contact-form" onSubmit={onSubmit}>
                    <div className="form-row">
                        <div className="form-group col-lg-6">
                        <label htmlFor="nameInput">Name</label>
                        <input type="name" name="from_name" className="form-control" id="nameInput" value={toSend.from_name} onChange={handleChange} aria-describedby="nameHelp" required></input>
                    </div>
                    <div className="form-group col-lg-6">
                        <label htmlFor="emailInput">Email address</label>
                        <input type="email" className="form-control" id="emailInput" name="reply_to" value={toSend.reply_to} onChange={handleChange} aria-describedby="emailHelp" required></input>
                        <small id="emailHelp" className="form-text text-muted">Your email will never be shared with anyone else.</small>
                    </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="subjectInput">Subject</label>
                        <input type="subject" className="form-control" id="subjectInput" aria-describedby="subjectHelp" required></input>
                    </div>
                    <div className="form-group">
                        {/* <label for="contentInput">Content</label> */}
                        <textarea type="content" className="form-control" id="contentInput" name="message" value={toSend.message} onChange={handleChange} aria-describedby="contentHelp" placeholder="How can Enzie help you?" required></textarea>
                    </div>
                    <input name="email" className="d-none spam-catcher" tabIndex="-1" autoComplete="off"></input>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                
            </div>
            <div className="col-lg-6">
                <p>This project is a form that sends an email to Enzie. It has __ components. It attempts to catch bots with a hidden input that will reject any form submissions that include text from this hidden input.</p>
                <p>She used the EmailJS library to recieve emails, and stored the necessary keys in an .env file flagged to be ignored for security.</p> 
            </div>
        </div>
    );
}