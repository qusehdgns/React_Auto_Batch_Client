import React from 'react';
import {Redirect, Route, RouteComponentProps, Switch, withRouter} from "react-router-dom";

const Routes: React.FC<RouteComponentProps> = props => {
    return (
        <Switch>
            <Redirect exact from="/" to="/main" />
        </Switch>
    );
}

export default withRouter(Routes);