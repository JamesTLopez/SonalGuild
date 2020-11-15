import React from "react";
import { Link } from "react-router-dom";
import { ShieldLogo } from "../../images/imageList";
import { useQuery } from "urql";
import {ME_QUERY} from "../../urql/queries";

function HeaderDash() {
  const [result] = useQuery({
    query: ME_QUERY,
   
  });

  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  console.log(data);


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
