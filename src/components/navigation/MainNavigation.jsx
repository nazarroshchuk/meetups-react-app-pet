import React from "react";
import { NavLink } from "react-router-dom";
import classes from './MainNavigation.module.css';
import { useSelector } from "react-redux";

export const MainNavigation = () => {
    const totalFavorites = useSelector(state => state.allMeetups.meetups)
        .filter(meetup => meetup.isFavorite).length;

    return (
        <header className={classes.header}>
            <div className={classes.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li>
                        <NavLink exact activeClassName={classes.active} to='/'>All Meetups</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active} to='/favorites'>
                            My Favorites
                            <span className={classes.favoritesCounter}>{totalFavorites}</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active} to='/new-meetups'>Add New Meetup</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
