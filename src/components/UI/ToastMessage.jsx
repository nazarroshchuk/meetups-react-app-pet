import React, { useEffect } from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { notificationsActions } from "../../actions/notifications.actions";


export const ToastMessage = props => {

    const dispatch = useDispatch();


    const isVisible = useSelector(state => state.notifications.toastMessageVisibility);
    const notification = useSelector(state => state.notifications.notification);
    const date = new  Date().toLocaleDateString();

    useEffect(() => {
        const closeToast = setTimeout( () => {
            isVisible && dispatch(notificationsActions.reset());
        }, 5000);
console.log('close');
        return () => clearTimeout(closeToast);
    }, [dispatch, isVisible]);

    const onCloseHandler = () => {
        dispatch(notificationsActions.showNotificationMessage(false));
    }

    if (!isVisible) {
        return null;
    }



    return (
        <ToastContainer  position="top-end" style={{"zIndex": 100, 'position': 'fixed'}} className="mt-3">
            <Toast onClick={onCloseHandler} className="d-inline-block m-1" bg={'info'} autohide={true}  delay={5000}>
                <Toast.Header>
                    <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                    <strong className="me-auto">{notification.title || ''}</strong>
                    <small>{date}</small>
                </Toast.Header>
                <Toast.Body className={'info' === 'Dark' && 'text-white'}>
                    {notification.message || ''}
                </Toast.Body>
            </Toast>
        </ToastContainer>
    )
}
