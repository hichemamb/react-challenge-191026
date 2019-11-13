import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { getToken } from "../../../utils/token";

const PrivateRoute = ({ component, ...props }) => {
    return (
        !getToken() ?
            <Redirect
                to={{
                    pathname: "/login",
                }} />
            :
            <Route {...props} component={component} />
    )
}

export default PrivateRoute;