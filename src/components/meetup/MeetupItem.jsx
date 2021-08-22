import React from 'react';
import classes from './MeetupItem.module.css'

import heart from '../../assets/heart.png';
import like from '../../assets/like.png';
import { Card } from '../UI/Card';
import { useDispatch } from "react-redux";
import { allMeetupsActions } from "../../actions/all-meetups.actions";

export const MeetupItem = ({ item, isFavorite }) => {
    const dispatch = useDispatch()

    const toggleFavoritesStatusHandler = () => {
        isFavorite
            ? dispatch(allMeetupsActions.removeFavorite(item.id))
            : dispatch(allMeetupsActions.addFavorite(item.id));
    }

    return (
        <li className={classes.item}>
           <Card>
               <div className={classes.image}>
                   <img src={item.image} alt={item.title}/>
               </div>
               <div className={classes.content}>
                   <h3>{item.title}</h3>
                   <address>{item.address}</address>
                   <p>{item.description}</p>
               </div>
               <div className={classes.actions}>
                   <button onClick={toggleFavoritesStatusHandler}>{isFavorite ? 'Remove from Favorites' : 'To Favorites'}</button>
                   <div onClick={toggleFavoritesStatusHandler}><img src={isFavorite ? heart : like} alt={'heart'}/></div>
               </div>
           </Card>
        </li>
    )
}
