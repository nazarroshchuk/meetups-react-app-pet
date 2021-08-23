import React from 'react';

import classes from './LoaderButton.module.css';

export const  LoaderButton = ({ isLoading = true, children }) => {
    if (isLoading) {
        return (
                <div className={classes.ldsSpinner}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
        )
    }

    return children;
}
