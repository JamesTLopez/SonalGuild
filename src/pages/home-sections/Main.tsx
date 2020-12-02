import React from "react";
import { LoginPic } from "../../images/imageList";

function Main() {
  return (
    <section id="description" className="description-container">
      <div className="login-section-description">
        <img src={LoginPic} alt="login pic"></img>
        <div className="login-title">
          <h1>Create an account!</h1>
          <p>Start writing your songs and keep track of progress!</p>
        </div>
      </div>
    </section>
  );
}

export default Main;
