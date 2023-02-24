import styles from "./RecommandedFrd.module.css";
import img from "../../../img/profile.jpeg"

function RecommandedFrd(){
    return (
      <div className={styles.main}>
        <div className={styles.friends_recommand}>
          <div className={styles.friends_recommand_image_outer}>
            <img className={styles.friends_recommand_image} src={img} />
          </div>
          <div className={styles.friends_id_and_name}>
            <div className={styles.friedns_id}>gotjd911</div>
            <div className={styles.friends_name}>강해성</div>
          </div>
          <div className={styles.follow}>
            <button className={styles.follow_btn}>팔로우</button>
          </div>
        </div>
      </div>
    );
}
export default RecommandedFrd;