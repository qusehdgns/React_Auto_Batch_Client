import React from 'react';
import {Redirect, RouteComponentProps, Switch, withRouter} from "react-router-dom";

import { RouteWithLayout } from "./components";
import { MainLayout } from "./layouts";

import { ReactUploadPage } from "./views";

const Routes: React.FC<RouteComponentProps> = props => {
    return (
        <Switch>
            <Redirect exact from="/" to="/main" />

            <RouteWithLayout component={ReactUploadPage} layout={MainLayout} path="/main"/>
        </Switch>
    );
}

export default withRouter(Routes);