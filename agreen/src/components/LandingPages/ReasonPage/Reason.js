import React from "react";
import "./ReasonPage.css";
import { DefaultButton } from "../../index.js";

const ReasonText =
  "In modern day live, people are getting more and more busy but at the same time spending more time indoor than every in history. As researches around the world shows that having plants indoor will help people with mental health, we have decieded to create an indoor greenhouse where we can have automated growth that requires minimum care whilst having plants at home with automation included into it.";
function ReasonPage() {
  return (
    <div className="ReasonWrapper">
      <div className="ReasonContainer">
        <div className="ReasonLeft">
          <img src={require("./ReasonPageImage.jpg")} alt=""></img>
        </div>
        <div className="ReasonRight">
          <div className="ReasonTitle">
            Why ?
          </div>
          <div className="ReasonText">{ReasonText}</div>

          <div className="buttonContainer">
            <DefaultButton text="Get started" size="Big" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReasonPage;
