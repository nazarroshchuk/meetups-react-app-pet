import React, { Component } from "react";
import { connect } from "react-redux";
import { errorActions } from "../../actions/errors.actions";
import {Redirect} from "react-router";

class Shield extends Component {

    componentDidCatch = error => this.props.dispatch(errorActions.setCriticalError(error));


    componentDidUpdate = () => {
        const { dispatch, error } = this.props;
        if (error && error.criticalError) {
            dispatch(errorActions.reset());
        }
    }


    render() {
        const { criticalError, error = {} } = this.props.error;
        if (criticalError) {

            let pathname;
            switch (+error.status) {
                case 403:
                    pathname = 'forbidden';
                    break;
                case 404:
                    pathname = 'notFound';
                    break;
                default:
                    pathname = 'internal';
                    break;
            }

            if (pathname) {
                return <Redirect to={{pathname}}/>
            }
        }
        return this.props.children;
    }
}

const mapStateToProps = ({ error }) => ({ error });

const connectedShield = connect(mapStateToProps)(Shield);
export { connectedShield as Shield };
