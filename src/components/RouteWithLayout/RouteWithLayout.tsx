import React from 'react';
import {Route, RouteComponentProps} from "react-router-dom";

type Props = {
    component: any;
    layout: any;
    [x: string]: any;
};

const RouteWithLayout = (props: Props) => {

    const {layout: Layout, component: Component, ...rest} = props;

    return (
        <Route
            {...rest}
            render={(props: RouteComponentProps) =>
                (<Layout>
                    <Component {...props} />
                </Layout>)}
        />
    );
}

export default RouteWithLayout;