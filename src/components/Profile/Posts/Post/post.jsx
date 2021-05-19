import styles from './post.module.css';

const Post = (props) => {
  return (
    <div className={styles.post_wrapper}>
      <p>
        {props.message} 
      </p>
      <div className={styles.post_likes}>
          <p>
            <img src="https://cdn2.iconfinder.com/data/icons/line-color-mix-vol-5/128/Line_Mix_Vol.7-58-256.png" alt=" /likes img/ " /> {props.likes_count}
          </p>
      </div>
    </div>
  )
}
export default Post;