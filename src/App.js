import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Register from "./components/Register/Register";
import StudentsList from "./components/StudentsList/StudentsList";
import StudentView from "./components/StudentView/StudentView";
import StudentUpdate from "./components/StudentUpdate/StudentUpdate";

function App() {
  return (
    <div className="App">
      <Router>
            <Switch>
              <Route exact path="/" component={Register}/>
              <Route exact path="/student/profil" component={StudentUpdate}/>
              <Route exact path="/students-list" component={StudentsList}/>
              <Route exact path="/student-view" component={StudentView}/>
            </Switch>
      </Router>
    </div>
  );
}

export default App;
