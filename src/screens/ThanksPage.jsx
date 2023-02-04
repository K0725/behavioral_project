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
        <h3>
        Thank you for participating
        Please **DO NOT** close this page and do let a staff member know you have finished to start your debriefing
        </h3>
      </div>
      <div className="start-button" onClick={() => exportExcelFile(data)}>
        Download
      </div>
    </div>
  );
};

export default ThanksPage;