import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Register from "./components/Register/Register";

function App() {
  return (
    <div className="App">
      <Router>
            <Switch>
              <Route path="/" component={Register}/>
            </Switch>
      </Router>
    </div>
  );
}

export default App;
