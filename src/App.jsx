import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import configureStore from "./store";
import Home from "./components/pages/Home";
import Authentication from "./components/auth/Authentication";
import Dashboard from "./components/projects/Dashboard"

function App() {
  return (
    <Provider store={configureStore()}>
      <Router>
        <div className="App">
          <Switch>
          <Route path="/home">
              <Home />
            </Route>
            <Route path="/authentication">
              <Authentication />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
       
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
