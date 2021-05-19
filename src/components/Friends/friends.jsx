import styles from './friends.module.css';
import {NavLink} from "react-router-dom";

const Friends = (props) => {
    return (
        <div className={styles.friendsPage_wrapper}>
            <div className={styles.friend_wrapper}>
                <NavLink to="/profile">Friend</NavLink>

            </div>
            <div className={styles.friend_wrapper}>
                Friend
            </div>
            <div className={styles.friend_wrapper}>
                Friend
            </div>
            <div className={styles.friend_wrapper}>
                Friend
            </div>
            <div className={styles.friend_wrapper}>
                Friend
            </div>
            <div className={styles.friend_wrapper}>
                Friend
            </div>
            <div className={styles.friend_wrapper}>
                Friend
            </div>
        </div>

    )
}
export default Friends;