import React, {useEffect} from "react";
import { MeetupList } from "../meetup/MeetupList";
import { useDispatch, useSelector } from "react-redux";
import { allMeetupsActions } from "../../actions/all-meetups.actions";
import { Loader } from "../UI/Loader";
import { RequestStatuses } from "../../constants/requestStatuses";

export const AllMeetups = props => {
    const meetups = useSelector(state => state.allMeetups.meetups);
    const requestStatus = useSelector(state => state.allMeetups.requestStatus);
    const isLoading = requestStatus !== RequestStatuses.SUCCESS;
    const dispatch = useDispatch();

    useEffect(() => {
        if (isLoading) {
            dispatch(allMeetupsActions.init());
        }
    }, [isLoading, dispatch]);

    return (
        <Loader isLoading={isLoading}>
            <section>
                <h1>All Meetups</h1>
                {
                    meetups && !!meetups.length &&
                    <MeetupList deleteEnable={true} data={meetups}/>
                }
            </section>
        </Loader>
    )
}
