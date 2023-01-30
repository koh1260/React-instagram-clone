import styles from "./Story.module.css";

function Story({userId, image}){
    return (
      <li className={styles.story}>
        <button className={styles.story_btn}>
          <div>
            <img 
                className={styles.story_image}
                src={image.profileImg} 
                />
          </div>
          <div className={styles.user_id}>{userId}</div>
        </button>
      </li>
    );
}
export default Story;