import React from "react";
import { exportExcelFile } from "../functions/downloadExcelFile";
import { useSelector } from "react-redux";

const ThanksPage = () => {
  const data = useSelector((state) => state.Jsondata.jsonData);
  console.log(data);
  return (
    <div className="container">
      <div className="headerText">Thanks for Participation</div>
      <div className="text-container">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ex
          cum, dolor veniam provident porro tempore quae quasi sequi qui saepe
          voluptatum aliquid illum iste in nisi non dolore at eum numquam
          laboriosam exercitationem laudantium ab? Aliquam quia, magni possimus
          veniam itaque minus aperiam. Unde dolore tempora adipisci dolorum nam!
        </p>
      </div>
      <div className="start-button" onClick={() => exportExcelFile(data)}>
        Download
      </div>
    </div>
  );
};

export default ThanksPage;