import React, {FC} from 'react';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(() => ({
    root: {
        height: '100%'
    },
    content: {
        height: '100%'
    }
}));

type Props = { children: React.ReactNode }

const MainLayout: FC<Props> = ({children}) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <main className={classes.content}>
                {children}
            </main>
        </div>
    );
}

export default MainLayout;