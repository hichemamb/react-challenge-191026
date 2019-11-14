import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import StudentsList from "./components/StudentsList/StudentsList";
import StudentView from "./components/StudentView/StudentView";
import StudentUpdate from "./components/StudentUpdate/StudentUpdate";
import PrivateRoute from './components/_shared/PrivateRoute/PrivateRoute';

// import { getToken } from "./utils/token";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* {!getToken() && (
          <Redirect
          to={{
            pathname: "/login",
          }}/>
          )} */}
          <Route exact path="/" component={Login}/>
          <Route exact path="/register" component={Register}/>
          <PrivateRoute exact path="/student/profil" component={StudentUpdate}/>
          <PrivateRoute exact path="/students-list" component={StudentsList}/>
          <PrivateRoute exact path="/student-view/:id" component={StudentView} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;