import React from "react";
import { Switch, Route,useRouteMatch } from "react-router-dom";
import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";
import { ShieldLogo } from "../images/imageList";

function Register() {
  let { path } = useRouteMatch();
  return (
    <div className="authentication">
      <div className="auth-container">
        <section id="left-panel">
          <div className="information-container">
            <div className="title">
              <div className="img-container">
                <a href="/">
                  <img src={ShieldLogo} alt="Shield Logo" />
                </a>
              </div>
              <div className="description">
                <h1>Sonals Guild</h1>
                <p>A song writing app that enables your creativity!</p>
              </div>
            </div>
          </div>
        </section>
        <section id="right-panel">
          <Switch>
            <Route path={`${path}/login`}>
              <LoginForm />
            </Route>
            <Route path={`${path}/register`}>
              <RegisterForm />
            </Route>
          </Switch>
        </section>
      </div>
    </div>
  );
}

export default Register;