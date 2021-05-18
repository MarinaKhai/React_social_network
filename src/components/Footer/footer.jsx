import styles from './footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div><a href="#profile"> Profile </a></div>
            <div><a href="#news"> News </a></div>
            <div><a href="#settings"> Settings </a></div>
        </footer>
    );
}

export default Footer;
