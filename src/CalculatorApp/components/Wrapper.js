import "./Wrapper.css";

const Wrapper = ({ children }) => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="wrapper col-lg-4">
            {children}
        </div>
        <div className="mt-3 mb-5 col-lg-7">
          <p>This calculator application is made up of 4 components: a wrapper, a screen to display numbers, the wrapper to contain all the buttons, and the buttons themselves.</p>
          <p>It can perform the calculations of a basic calculator by utilizing the state lifecycle hook to track the current number, the mathematical sign selected for the equation, and its result.</p>
          <p className="github-links"><a href="https://github.com/enzieriddle/enzieriddle/tree/main/src/CalculatorApp" rel="noreferrer" target="_blank">Click here</a> to view code on Github.</p>
        </div>
      </div>
    </div>
    );
};

export default Wrapper;
