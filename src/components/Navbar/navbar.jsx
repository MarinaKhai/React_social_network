import styles from './navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div>
                <NavLink activeClassName={styles.nav_link_active} to="/profile">Profile</NavLink>
            </div>
            <div>
                <NavLink activeClassName={styles.nav_link_active} to="/friends">Friends</NavLink>
            </div>
            <div>
                <NavLink activeClassName={styles.nav_link_active} to="/dialogs">Messages</NavLink>
            </div>
            <div>
                <NavLink activeClassName={styles.nav_link_active} to="/news">News</NavLink>
            </div>
            <div>
                <NavLink activeClassName={styles.nav_link_active} to="/images">Images</NavLink>
            </div>
            <div>
                <NavLink activeClassName={styles.nav_link_active} to="/music">Music</NavLink>
            </div>
            <div>
                <NavLink activeClassName={styles.nav_link_active} to="/settings">Settings</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;