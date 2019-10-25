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
    <div className="App">
      <Router>
            <Switch>
              <Route path="/account">
                <Account />
              </Route>
              <Route path="/">
                <Inscription />
              </Route>
            </Switch>
      </Router>
    </div>
  );
}

export default App;
