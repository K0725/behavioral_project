import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="headerText">Welcome</div>
      <div className="text-container">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ex
          cum, dolor veniam provident porro tempore quae quasi sequi qui saepe
          voluptatum aliquid illum iste in nisi non dolore at eum numquam
          laboriosam exercitationem laudantium ab? Aliquam quia, magni possimus
          veniam itaque minus aperiam. Unde dolore tempora adipisci dolorum nam!
        </p>
      </div>
      <div className="start-button" onClick={()=>navigate("/3x3grid")}>
        Start
      </div>
    </div>
  );
};

export default LandingPage;