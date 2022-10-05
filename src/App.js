import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ProfileApp from "./ProfileApp/ProfileApp";
import CalcApp from "./CalculatorApp/CalculatorApp";
import "./index.css";

function App() {
  return (
    <div className="container">
      <ProfileApp />
      <h2 className="text-center mt-5"><u>Projects</u></h2>
      <CalcApp />
    </div>
    
  );
}

export default App;
