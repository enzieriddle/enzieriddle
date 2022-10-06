import "./ProfileDescription.css";
import LinkedInLogo from "./linkedin-logo.png"
import GitHubLogo from "./github-logo.png";
import PdfIcon from "./pdf-icon.png";
import Resume from "./Resume.pdf";

export default function ProfileDescription() {
    return(
        
        <div className="container">
            <div className="profile-description">
                <h1 className="mb-3">Hello, my name is Enzie!</h1>
                <h2 className="lead">Enzie Riddle is a Web Developer from Wichita, Kansas. It is her goal to create the most elegant, intuitive websites she can, one line at a time. </h2>
                <p>Her skills as a web developer include knowledge of HTML, CSS, and JavaScript. She is currently learning React in order to develop dynamic, useful applications. This site is a React application itself <a href="https://github.com/enzieriddle/enzieriddle" rel="noreferrer" target="_blank">(GitHub link here)</a>! Not only does she understand the importance of responsive design, she is always striving to learn different languages and write more beautiful applications each day.</p>
                <p>She is flexible, reliable, and has a passion for technology. For a copy of her resume, click the PDF icon below or visit her LinkedIn profile.</p>
            </div>
            <div className="row profile-socials align-items-center mt-5 mb-5">
                <div className="col-4 profile-socials-col">
                    <a href="https://www.linkedin.com/in/enzieriddle/" rel="noreferrer" target="_blank"><img src={LinkedInLogo} alt="LinkedIn logo"/></a>
                </div>
                <div className="col-4 profile-socials-col">
                    <a href="https://github.com/enzieriddle" rel="noreferrer" target="_blank"><img src={GitHubLogo} alt="GitHub logo"/></a>
                </div>
                <div className="col-4 profile-socials-col">
                    <div className="row">
                        <div className="col">
                            <a href={Resume} download="Enzie_Riddle_Resume"><img src={PdfIcon} alt="PDF document download icon" /></a>
                            {/* <p className="mb-0">Resume</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}