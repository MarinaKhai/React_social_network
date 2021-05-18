import styles from './posts.module.css';
import Post from './Post/post';

const Posts = (props) => {
  return (
    <div className={styles.posts_wrapper}>
      <h3>My posts</h3>
      <div className={styles.add_post}>
        <textarea rows="5" placeholder="what's your news?"></textarea>
        <button type="submit">Send</button>
      </div>
      <div className={styles.posts}>
        <Post message="Hello! My running challenge lasts for 3 weeks already! Hope to turn it to habbit =)"/>
        
        <Post message="What I'm reading now? Alexandre Dumas The Count of Monte Cristo. It's so captivating! Can't keep my hands off the book."/>
      </div>
    </div>
  )
}
export default Posts;