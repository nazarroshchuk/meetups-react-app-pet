import React from 'react';
import { MeetupItem } from "./MeetupItem";
import classes from './MeetupList.module.css'

export const MeetupList = ({ data, deleteEnable = false }) => {
    return (
        <ul className={classes.list}>
            {data.map(d =>
                <MeetupItem
                    deleteEnable={deleteEnable}
                    key={d.id}
                    item={d}
                    isFavorite={d.isFavorite ?? false} />
            )}
        </ul>
    )
}
