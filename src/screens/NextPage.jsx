import React from "react";
import { useNavigate } from "react-router-dom";

const NextPage = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="text-container">
        <h3>
        For this part of the experiment, you will be presented with ten 
        6 by 6 grids of photos that depict people interactng in different
        social ques, one of whch will depict a flirtatious act. 
        Please select the target photo(flirtation) as accurately and as fast as you can.
        If a photo is inaccurately identified, don't worry they will simply disappear
        till the correct photo is selected. When the correct photo is selected, the next grid
        will be automatically presented. 
        When complete, please keep the window open and let the staff know that you have finished.
        When you are ready, please click the button to continue. 
        </h3>
      </div>
      <div className="start-button" onClick={()=>navigate("/6x6grid")}>
        START
      </div>
    </div>
  );
};

export default NextPage;