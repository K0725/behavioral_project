import React from "react";
import { useNavigate } from "react-router-dom";


const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="headerText">Welcome</div>
      <div className="text-container">
        <h3>
        Welcome to x
        For this experiment you will be presented with three 3 by 3 grids of photos that depict people interacting in different social ques, one of which will depict a flirtatious act. 
        Please select the target photo (flirtation) as accurately and as fast as you can. If a photo is  inaccurately identified, don't worry they will simply disappear till the correct photo is selected. When the correct photo is selected the next grid will be automatically presented. After the three trials, you will be presented with ten 6 by 6 grid with the same system as the first three. When complete, please keep the window open and let the staff know that you have finished.When ready, please click the button to continue.
        </h3>
      </div>
      <div className="start-button" onClick={()=>navigate("/3x3grid")}>
        Start
      </div>
    </div>
  );
};

export default LandingPage;