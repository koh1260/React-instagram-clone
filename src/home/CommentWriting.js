import styles from "./CommentWriting.module.css";
import {VscSmiley} from "react-icons/vsc";

function CommentWriting(){
    return (
        <div className={styles.comment_writing}>
          <div className={styles.comment_icon_outer}>
            <VscSmiley className={styles.comment_icon} />
          </div>
          <input className={styles.comment_input} placeholder="댓글 달기..." />
        </div>
    )
}
export default CommentWriting;