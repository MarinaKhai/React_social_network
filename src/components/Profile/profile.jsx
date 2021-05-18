import styles from './profile.module.css';
import Posts from './Posts/posts';
import AboutMe from './AboutMe/aboutMe';

const Profile = () => {
    return (
        <div className={styles.content}>
          <AboutMe />
          <Posts />
        </div>
    )
}
export default Profile;