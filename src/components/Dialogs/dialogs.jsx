import styles from './dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={styles.chatsPage_wrapper}>
            <div className={styles.chatsList_wrapper}>
                <div className={styles.userItem}>
                    <div className={styles.userLogo}>
                        <p>:-)</p>
                    </div>
                    <div className={styles.userName}>
                        <NavLink activeClassName={styles.active} to="/dialogs">April K.</NavLink>
                    </div>
                </div>
                <div className={styles.userItem}>
                    <div className={styles.userLogo}>
                        <p>;*)</p>
                    </div>
                    <div className={styles.userName}>
                        <NavLink activeClassName={styles.active} to="/profile">Meredith G.</NavLink>
                    </div>
                </div>
                <div className={styles.userItem}>
                    <div className={styles.userLogo}>
                        <p>0:-|</p>
                    </div>
                    <div className={styles.userName}>
                        <NavLink activeClassName={styles.active} to="/profile">Christina Y.</NavLink>
                    </div>
                </div>
            </div>
            <div className={styles.chatWindow_wrapper}>
                <p className={styles.message}>Hello</p>
                <p className={styles.message}>How are you?</p>
                <p className={styles.message}>Fine!</p>
                <p className={styles.message}>Let's go to Martha's tonight</p>
                <p className={styles.message}>When they start?</p>
            </div>
        </div>
    )
}
export default Dialogs;