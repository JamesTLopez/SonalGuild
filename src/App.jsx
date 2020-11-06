// import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import configureStore from "./store";
import Home from "./components/pages/Home";
import Authentication from "./components/auth/Authentication";
import Dashboard from "./components/projects/Dashboard"
import Song from "./components/firepad/Song"
import { createClient, Provider } from 'urql';
const client = createClient({ url: 'http://localhost:4000/graphql' });

function App() {
  return (

    <Provider value={client}>
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
            <Route path="/song">
              <Song />
            </Route>
          </Switch>
        </div>
      </Router>
      </Provider>
  );
}

export default App;


/* <Provider store={configureStore()}>

</Provider> */