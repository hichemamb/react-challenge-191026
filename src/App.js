import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import StudentsList from "./components/StudentsList/StudentsList";

function App() {
  return (
    <div className="App">
      <Router>
            <Switch>
              <Route exact path="/register" component={Register}/>
              <Route exact path="/" component={Login}/>
              <Route exact path="/students-list" component={StudentsList}/>
            </Switch>
      </Router>
    </div>
  );
}

export default App;
