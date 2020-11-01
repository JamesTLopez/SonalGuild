import "./styles/App.css";

import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import configureStore from "./store";
import Home from "./components/pages/Home";
import Authentication from "./components/auth/Authentication";

function App() {
  return (
    <Provider store={configureStore()}>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/signin">
              <Authentication />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
