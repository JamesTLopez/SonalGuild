import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Authentication from "./components/auth/Authentication";
import Dashboard from "./components/projects/Dashboard";
import Song from "./components/firepad/Song";
import { createClient, Provider,dedupExchange, fetchExchange } from "urql";
import { cacheExchange } from '@urql/exchange-graphcache';
import {ME_QUERY} from './urql/queries'

const client = createClient({
  url: "http://localhost:4000/graphql",
  fetchOptions: { credentials: "include" },
  exchanges: [dedupExchange, cacheExchange({
    updates: {
      Mutation: {
        login: (result, args, cache, info) => {
          cache.updateQuery({query:ME_QUERY},data => {
            console.log(data)
            
            console.log(result)
            return {...data,me:result.login.user};})
        },
      },
    }
  }), fetchExchange],
});

function App() {
  return (
    <Provider value={client}>
      <Router>
        <div className="App">
          <Switch>
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
