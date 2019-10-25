import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";
import Inscription from "./views/Inscription";
import Account from "./views/Account";

function App() {
  return (
    <Router>
      <div className="App">
          <Switch>
            <Route path="/account">
              <Account />
            </Route>
            <Route path="/">
              <Inscription />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
