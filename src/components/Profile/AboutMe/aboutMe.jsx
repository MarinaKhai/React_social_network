import styles from './aboutMe.module.css';

const AboutMe = () => {
  return (
    <div className={styles.about_me_wrapper}>
      <div>
        <img src="https://s1.1zoom.ru/b5050/784/Painting_Art_Glasses_Glance_Brunette_girl_534176_2048x2732.jpg" width="100px" alt="my-profile" />
      </div>
      <div className={styles.about_me_text}>
        <h3>Marina Sh.</h3>
        <div>
          <p>Date of Birth: November, 4</p>
          <p>City: Ekaterinburg</p>
          <p>Education: USPU'17</p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe;