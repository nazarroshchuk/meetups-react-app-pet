import React, { useRef } from "react";
import classes from './NewMeetupForm.module.css';
import { Card } from "../UI/Card";
import { useDispatch, useSelector } from "react-redux";
import {addNewMeetupAction} from "../../actions/add-new-meetup.actions";
import { LoaderButton } from "../UI/LoaderButton";
import {RequestStatuses} from "../../constants/requestStatuses";

export const NewMeetupForm = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.addNewMeetup.submitMeetupRequest) === RequestStatuses.LOADING

    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription,
        };

        dispatch(addNewMeetupAction.submitNewMeetup(meetupData));
    }


    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='title'>Meetup Title</label>
                    <input
                        type='text'
                        required
                        id='title'
                        ref={titleInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='image'>Meetup Image URL</label>
                    <input
                        type='url'
                        required
                        id='image'
                        ref={imageInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='address'>Address</label>
                    <input
                        type='text'
                        required
                        id='address'
                        ref={addressInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='description'>Description</label>
                    <textarea
                        id='description'
                        required
                        rows='5'
                        ref={descriptionInputRef}
                    >
                    </textarea>
                </div>
                <div className={classes.actions}>
                    <button>{isLoading ? <span><LoaderButton/></span> : 'Add Meetup'}</button>
                </div>
            </form>
        </Card>
    )
}
