import React from "react";
import classes from './Forbidden.module.css'
import {Link} from "react-router-dom";

export const Forbidden = () => {
    return (
        <div className={classes.notfoundID}>
            <div className={classes.notfound}>
                <div className={classes.notfound404}>
                    <div>Forbidden</div>
                    <h1>Access  Is Forbidden</h1>
                </div>
                <h2>Page not found</h2>
                <p>The page you are looking for might have been removed had its name changed or is temporarily
                    unavailable.</p>
                <Link to="/">home page</Link>
            </div>
        </div>
    )

}
