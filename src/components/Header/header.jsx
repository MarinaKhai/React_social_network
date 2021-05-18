import styles from './header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <img src="https://i.pinimg.com/236x/f1/d5/ec/f1d5ecb4470209cd95f751d322680288.jpg?nii=t" height="55px" alt="logo-racoon"></img>
            <h2 className={styles.header_title}>Ra<span className={styles.dark}>c</span><span>oo</span><span className={styles.dark}>n</span>ia</h2>
        </header>
    );
}

export default Header;