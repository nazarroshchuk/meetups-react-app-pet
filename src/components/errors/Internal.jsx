import React from 'react';
import classes from './Intermal.module.css'
import {Link} from "react-router-dom";
import {error} from "../../redusers/error.reducer";

export const Internal = () => {
    return (
        <div className={classes.notfoundID}>
            <div className={classes.notfound}>
                <div className={classes.notfoundBg}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <h1>oops!</h1>
                <h2>{error && error.message ? error.message : 'Something went wrong, we are trying to fix that'}</h2>
                <Link to="/">go back</Link>
            </div>
        </div>
    )
}
