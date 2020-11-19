import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Authentication from "./pages/Authentication";
import Dashboard from "./pages/Dashboard";
import Song from "./pages/Song";
import Home from "./pages/Home";
import { createClient, Provider, dedupExchange, fetchExchange } from "urql";
import { cacheExchange } from "@urql/exchange-graphcache";
import { FIND_POSTS, ME_QUERY } from "./urql/queries";

const client = createClient({
  url: "http://localhost:4000/graphql",
  fetchOptions: { credentials: "include" },
  exchanges: [
    dedupExchange,
    cacheExchange({
      //updates the cache after making requests
      updates: {
        Mutation: {
          logout: (result, args, cache, info) => {
            cache.updateQuery({ query: ME_QUERY }, (data) => {
              console.log(data);
              return { ...data, me: null };
            });
          },
          login: (result, args, cache, info) => {
            cache.updateQuery({ query: ME_QUERY }, (data) => {
              console.log(data);
              return { ...data, me: result.login.user };
            });
          },
          createPost: (result, args, cache, info) => {
            cache.updateQuery({ query: FIND_POSTS }, (data) => {
              return { ...data, posts: [...data.posts, result] };
            });
          },
        },
      },
    }),
    fetchExchange,
  ],
});

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
