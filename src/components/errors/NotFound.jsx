import React from 'react';
import classes from './NotFound.module.css'
import { Link } from "react-router-dom";

export const NotFound = () => {
    return (
        <div className={classes.notfoundID}>
            <div className={classes.notfound}>
                <div className={classes.notfound404}>
                    <h1>Not Found</h1>
                </div>
                <h2>Oops, The Page you are looking for can't be found!</h2>
                {/*<form className="notfound-search">*/}
                {/*    <input type="text" placeholder="Search...">*/}
                {/*        <button type="button">Search</button>*/}
                {/*</form>*/}
                <Link to="/"><span className={classes.arrow}></span>Return To Homepage</Link>
            </div>
        </div>
    )
}
