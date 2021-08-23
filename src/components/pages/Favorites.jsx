import React, {useEffect} from "react";

import { MeetupList } from "../meetup/MeetupList";
import { Card } from "../UI/Card";
import {useDispatch, useSelector} from "react-redux";
import {Loader} from "../UI/Loader";
import { allMeetupsActions } from "../../actions/all-meetups.actions";
import {RequestStatuses} from "../../constants/requestStatuses";

export const Favorites = props => {
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.allMeetups.meetups).filter(meetup => meetup.isFavorite);
    const requestStatus = useSelector(state => state.allMeetups.requestStatus);
    const isLoading = requestStatus !== RequestStatuses.SUCCESS;

    useEffect(() => {
        if (isLoading) {
            dispatch(allMeetupsActions.init());
        }
    }, [isLoading, dispatch]);

    return (
        <Loader isLoading={isLoading}>
            <section>
                <h1>Favorites</h1>
                {!!favorites.length
                    ? <MeetupList data={favorites}/>
                    : <Card><p style={{'padding': '60px'}}>Your favorite list is empty</p></Card>
                }
            </section>
        </Loader>
    )
}
