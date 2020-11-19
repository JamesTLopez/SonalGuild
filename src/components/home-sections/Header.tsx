import React from "react";
import {ShieldLogo,Ray1,Ray2,Cloud1,Cloud2,TinyCloud1,TinyCloud2} from "../../images/imageList"


function Header() {
  return (
    <section id="header" className="header-container">
      <header className="row header">
        <img src={ShieldLogo} alt="shieldlogo">
        </img>
        <nav>
          <a href="/authentication/login">Login</a>
        </nav>
      </header>
      <div className="row title-container">
        <h2>des</h2>
      </div>
      <div aria-hidden="true" className="imageContainer">
        <img id="ray1" className="bg-img" src={Ray1} alt="Ray1"></img>
        <img id="ray2" className="bg-img" src={Ray2} alt="Ray2"></img>
        <img id="cloud1" className="bg-img" src={Cloud1} alt="cloud1"></img>
        <img id="cloud2" className="bg-img" src={Cloud2} alt="cloud2"></img>
        <img id="tinyCloud1" className="bg-img" src={TinyCloud1} alt="TinyCloud1"></img>
        <img id="tinyCloud2" className="bg-img" src={TinyCloud1} alt="TinyCloud2"></img>
        <img id="tinyCloud3" className="bg-img" src={TinyCloud1} alt="TinyCloud3"></img>
        <img id="tinyCloud4" className="bg-img" src={TinyCloud2} alt="TinyCloud2"></img>
        <img id="tinyCloud5" className="bg-img" src={TinyCloud2} alt="TinyCloud2"></img>
        {/* <img id="cloud" className="rays" src={Cloud} alt="Couds"></img> */}

      </div>
    </section>
  );
}

export default Header;
