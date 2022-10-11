import Name from './components/Name';
import Email from './components/Email';
import Subject from './components/Subject';
import Content from './components/Content';
import "./ContactFormApp.css";

export default function ContactFormApp() {
    return (
        
        <div className="row">
            <div className="contact-form-app col-lg-6">
                <form id="contact-form">
                    <input type="hidden" id="g-recaptcha-response" name="g-recaptcha-response"></input>
                    <input type="hidden" name="action" value="validate_captcha"></input>
                    
                    <div className="form-row">
                        <Name/>
                        <Email/>
                    </div>
                    <Subject/>
                    <Content/>
                    <input name="spamcatcher" className="d-none" tabIndex="-1" autoComplete="off"></input>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                
            </div>
            <div className="col-lg-6">
                <p>This project is a form that sends an email to Enzie. It has __ components. It attempts to catch bots with a hidden input that will reject any form submissions that include text from this hidden input.</p>
            </div>
        </div>
    );
}