import styles from './navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div>
                <NavLink activeClassName={styles.nav_link_active} to="/profile">&#128519; Profile</NavLink>
            </div>
            <div>
                <NavLink activeClassName={styles.nav_link_active} to="/friends">&#128109; Friends</NavLink>
            </div>
            <div>
                <NavLink activeClassName={styles.nav_link_active} to="/dialogs">&#128140; Messages</NavLink>
            </div>
            <div>
                <NavLink activeClassName={styles.nav_link_active} to="/news">	&#128250; News</NavLink>
            </div>
            <div>
                <NavLink activeClassName={styles.nav_link_active} to="/images">&#128102; Images</NavLink>
            </div>
            <div>
                <NavLink activeClassName={styles.nav_link_active} to="/music">&#128239; Music</NavLink>
            </div>
            <div>
                <NavLink activeClassName={styles.nav_link_active} to="/settings">&#128296; Settings</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;