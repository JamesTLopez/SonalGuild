import React from "react";
import {
  ShieldLogo,
  Ray1,
  Ray2,
  Cloud1,
  Cloud2,
  TinyCloud1,
  TinyCloud2,
  Note1,
  Note3,
  Note4
} from "../../images/imageList";
// import { useQuery } from "urql";
// import { ME_QUERY } from "../../urql/queries";

function Header() {


  // const [result] = useQuery({
  //   query: ME_QUERY,
  // });




  return (
    <section id="header" className="header-container">
      <header className="row header">
        <img src={ShieldLogo} alt="shieldlogo"></img>
        <nav>
          <a href="/authentication/login">Why?</a>
          <a href="/authentication/login">What does it do?</a>
          <a href="/authentication/login">How its made</a>
          <a href="/authentication/login">Contact</a>
        </nav>
        <div className="button-container">
          <a href="/authentication/login">Login</a>
        </div>
      </header>
      <div className="row title-container">
        <h2>Sonals Guild</h2>

        <div className="title-description">
            <p>Aspiring artist? or musical hobbiest? <br/>Sonalsguild maintains and records your ideas while providing you <br/> the nesscesary tools to enable your creativity! </p>
        </div>
        <a href="/authentication/login">Try it out!</a>
      </div>
      <div aria-hidden="true" className="imageContainer">
        <img id="ray1" className="bg-img" src={Ray1} alt="Ray1"></img>
        <img id="ray2" className="bg-img" src={Ray2} alt="Ray2"></img>
        <img id="cloud1" className="bg-img" src={Cloud1} alt="cloud1"></img>
        <img id="cloud2" className="bg-img" src={Cloud2} alt="cloud2"></img>
        <img id="note1" className="bg-img" src={Note1} alt="note1"></img>
        <img id="note2" className="bg-img" src={Note1} alt="note2"></img>
        <img id="note3" className="bg-img" src={Note3} alt="note3"></img>
        <img id="note4" className="bg-img" src={Note4} alt="note4"></img>
        <img
          id="tinyCloud1"
          className="bg-img"
          src={TinyCloud1}
          alt="TinyCloud1"
        ></img>
        <img
          id="tinyCloud2"
          className="bg-img"
          src={TinyCloud1}
          alt="TinyCloud2"
        ></img>
        <img
          id="tinyCloud3"
          className="bg-img"
          src={TinyCloud1}
          alt="TinyCloud3"
        ></img>
        <img
          id="tinyCloud4"
          className="bg-img"
          src={TinyCloud2}
          alt="TinyCloud2"
        ></img>
        <img
          id="tinyCloud5"
          className="bg-img"
          src={TinyCloud2}
          alt="TinyCloud2"
        ></img>
        {/* <img id="cloud" className="rays" src={Cloud} alt="Couds"></img> */}
      </div>
    </section>
  );
}

export default Header;
