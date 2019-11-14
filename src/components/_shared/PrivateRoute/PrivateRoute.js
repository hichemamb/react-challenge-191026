import React from "react";
import {
    Route,
    Redirect
} from "react-router-dom";
import { getToken } from "../../../utils/token";

const PrivateRoute = ({ component, ...props }) => {
    return (
        !getToken() ?
            <Redirect
                to={{
                    pathname: "/",
                }} />
            :
            <Route {...props} component={component} />
    )
}

export default PrivateRoute;