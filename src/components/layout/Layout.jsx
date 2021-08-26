import { MainNavigation } from '../navigation/MainNavigation';
import classes from './Layout.module.css';
import {ToastMessage} from "../UI/ToastMessage";
import React from "react";

export function Layout(props) {
    return (
        <div className={classes.header}>
            <MainNavigation />
            <main className={classes.main}>{props.children}</main>
            <ToastMessage />
        </div>
    );
}
