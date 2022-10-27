import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ProfileApp from "./ProfileApp/ProfileApp";
import CalcApp from "./CalculatorApp/CalculatorApp";
import "./index.css";
import ContactFormApp from './contactFormApp/ContactFormApp';

function App() {
  return (
    <div>
      <div className="top-banner mb-5"></div>
      <div className="container">
        <ProfileApp />
        <h2 className="text-center mt-5"><u>Projects</u></h2>
        <CalcApp />
        <div className="">
          <ContactFormApp />
        </div>
      </div>
      <div className="text-center mt-5 pt-5 pb-5 what-next bottom-banner">
        <p>What's she working on next? Enzie is currently working with APIs that will display different categories of YouTube videos.</p>
        <p>Check back soon!</p>
        
      </div>
    </div>
    
  );
}

export default App;
