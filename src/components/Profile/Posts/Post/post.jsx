import styles from './post.module.css';

const Post = (props) => {
  return (
    <div className={styles.post_wrapper}>
      <p>
        {props.message} 
      </p>
      <div className={styles.post_likes}>
          <p>
            <img src="#" alt=" /likes img/ " /> likes count
          </p>
      </div>
    </div>
  )
}
export default Post;