import React from 'react';
import { MeetupItem } from "./MeetupItem";
import classes from './MeetupList.module.css'

export const MeetupList = ({ data }) => {
    return (
        <ul className={classes.list}>
            {data.map(d =>
                <MeetupItem key={d.id} item={d} isFavorite={d.isFavorite ?? false} />
            )}
        </ul>
    )
}
