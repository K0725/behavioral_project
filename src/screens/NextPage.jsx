import React from "react";
import { useNavigate } from "react-router-dom";

const NextPage = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="text-container">
        <h3>
        For the rest of the experiment, you will be presented with 6 by 6 grids of photos that depict people interacting in different social cues, one of which will depict a flirtatious act. Please select the target photo (flirtation) as accurately and quickly as possible. If a photo is inaccurately identified, do not worry they will disappear till the correct photo is selected. When the correct photo is selected, the following grid will be automatically presented. When complete, please keep the window open and let the staff know you have finished.
When ready, please click the button to continue.
        </h3>
      </div>
      <div className="start-button" onClick={()=>navigate("/6x6grid")}>
        START
      </div>
    </div>
  );
};

export default NextPage;