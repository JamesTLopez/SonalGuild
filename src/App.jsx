import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Authentication from "./pages/Authentication";
import Dashboard from "./pages/Dashboard";
import Song from "./pages/Song";
import Home from "./pages/Home";
import { Provider } from "urql";

import { client } from "../src/urql/clientConfig";

import TempChord from "./components/song/TempChord";

function App() {
  return (
    <Provider value={client}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/authentication">
              <Authentication />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/song/name=:id">
              <Song />
            </Route>
            <Route path="/temp">
              <TempChord />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
