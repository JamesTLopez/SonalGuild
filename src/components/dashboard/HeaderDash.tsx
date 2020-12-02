import React from "react";
import { Link } from "react-router-dom";
import { ShieldLogo } from "../../images/imageList";
import { Button } from "@material-ui/core";
import { useQuery,useMutation } from "urql";
import { ME_QUERY } from "../../urql/queries";
import {LOGOUT_MUTATION} from "../../urql/mutations";
import { useHistory} from "react-router-dom";

interface props {
  username?:string;
}

const HeaderDash: React.FC<props> = ({username}) => {

  const history = useHistory();
  const [result] = useQuery({
    query: ME_QUERY,
  });

  const [, logout] = useMutation(LOGOUT_MUTATION);
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
        <Button onClick={()=>{
          logout()

          history.push("/authentication/login");
          }}>Logout</Button>
      </nav>:<nav>
        <Button onClick={() => history.push('/authentication/register')}>Register</Button>
        <Button onClick={() => history.push('/authentication/login')}>Login</Button>
        </nav>}
    </header>
  );
}

export default HeaderDash;
