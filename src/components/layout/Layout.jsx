import { MainNavigation } from '../navigation/MainNavigation';
import classes from './Layout.module.css';

export function Layout(props) {
    return (
        <div className={classes.header}>
            <MainNavigation />
            <main className={classes.main}>{props.children}</main>
        </div>
    );
}
