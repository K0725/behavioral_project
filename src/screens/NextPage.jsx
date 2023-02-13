import React from "react";
import { useNavigate } from "react-router-dom";

const nextPage = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="text-container">
        <h3>
        Click this button
        </h3>
      </div>
      <div className="next-button" onClick={()=>navigate("/6x6grid")}>
        nextPage
      </div>
    </div>
  );
};

export default nextPage;