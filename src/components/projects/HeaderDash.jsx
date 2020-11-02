import React from "react";
import { Link } from "react-router-dom";
import { ShieldLogo } from "../../images/imageList";

function HeaderDash() {
  return (
    <header className="header-dash">
      <Link to="/authentication/login">
        <img src={ShieldLogo} alt="Shield Logo" />
        <label>SONALS GUILD</label>
      </Link>
      <nav>
        <div>
            
        </div>
      </nav>
    </header>
  );
}

export default HeaderDash;
