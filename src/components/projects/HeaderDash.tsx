import React from "react";
import { Link } from "react-router-dom";
import { ShieldLogo } from "../../images/imageList";
import { Button } from "@material-ui/core";
import { useQuery } from "urql";
import { ME_QUERY } from "../../urql/queries";



interface props {
  username?:string;
}

const HeaderDash: React.FC<props> = ({username}) => {
  const [result] = useQuery({
    query: ME_QUERY,
  });
  
  const { data, fetching, error } = result;

  if (fetching){
    return <p>Loading...</p>;
  }
  if (error) return <p>Oh no... {error.message}</p>;



  return (
    <header className="header-dash">
      <Link to="/authentication/login">
        <img src={ShieldLogo} alt="Shield Logo" />
        <label>SONALS GUILD</label>
      </Link>
      {data?.me ?
      <nav>
        <h1>{username}</h1>
        <Button>Logout</Button>
      </nav>:<nav>
        <Button>Register</Button>
        <Button>Login</Button>
        </nav>}
    </header>
  );
}

export default HeaderDash;
