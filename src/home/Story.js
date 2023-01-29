import styles from "./Story.module.css";
import img from "../img/profile.jpeg"

function Story({userId}){
    return (
      <li className={styles.story}>
        <button className={styles.story_btn}>
          <div>
            <img 
                className={styles.story_image}
                src={img} 
                style={{
                height: "56px",
                width: "56px",
            }}/>
          </div>
          <div>{userId}</div>
        </button>
      </li>
    );
}
export default Story;