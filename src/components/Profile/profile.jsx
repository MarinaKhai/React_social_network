import styles from './profile.module.css';
import Posts from './Posts/posts';
import AboutMe from './AboutMe/aboutMe';

const Profile = () => {
    return (
        <div>
          <AboutMe />
          <Posts />
        </div>
    )
}
export default Profile;