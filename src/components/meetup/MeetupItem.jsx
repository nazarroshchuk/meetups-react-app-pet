import React from 'react';
import classes from './MeetupItem.module.css'

import heartImg from '../../assets/heart.png';
import likeImg from '../../assets/like.png';
import { Card } from '../UI/Card';
import { useDispatch, useSelector } from "react-redux";
import { allMeetupsActions } from "../../actions/all-meetups.actions";
import { RequestStatuses } from "../../constants/requestStatuses";
import { LoaderButton } from '../UI/LoaderButton';

export const MeetupItem = ({ item, isFavorite, deleteEnable }) => {
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.allMeetups.favoritesRequestStatus) === RequestStatuses.LOADING;

    const toggleFavoritesStatusHandler = () => {
        dispatch(allMeetupsActions.toggleFavorites(item.id, isFavorite))
    }

    const deleteMeetupHandler = () => {
        dispatch(allMeetupsActions.deleteMeetup(item.id));
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
                   <button onClick={toggleFavoritesStatusHandler}>
                       {isFavorite ? 'Remove from Favorites' : 'To Favorites'}
                       <span>{isLoading && <LoaderButton />}</span>
                   </button>
                   <div onClick={toggleFavoritesStatusHandler}><img src={isFavorite ? heartImg : likeImg} alt={'heart'}/></div>
                   {deleteEnable && <div onClick={deleteMeetupHandler}><img src="https://img.icons8.com/cute-clipart/64/000000/delete-forever.png" alt='delete'/></div>}
               </div>
           </Card>
        </li>
    )
}
