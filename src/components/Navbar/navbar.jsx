import styles from './navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={`${styles.nav_link} ${styles.nav_link_active}`}><a href="#profile">Profile</a></div>
            <div className={styles.nav_link}><a href="#messages">Messages</a></div>
            <div className={styles.nav_link}><a href="#news">News</a></div>
            <div className={styles.nav_link}><a href="#music">Music</a></div>
            <div className={styles.nav_link}><a href="#settings">Settings</a></div>
        </nav>
    );
}

export default Navbar;