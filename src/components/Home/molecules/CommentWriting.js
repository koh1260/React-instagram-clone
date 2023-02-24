import styles from "./CommentWriting.module.css";
import {ReactComponent as Smile} from '../../../svg/svg-smile.svg';

function CommentWriting({ comment, setComment, onSubmit }) {
  return (
    <div className={styles.comment_writing}>
      <div className={styles.comment_icon_outer}>
        <Smile className={styles.comment_icon} />
      </div>
      <form onSubmit={onSubmit} className={styles.comment_form}>
        <input
          className={styles.comment_input}
          placeholder="댓글 달기..."
          onChange={(e) => setComment(e.target.value)}
          value={comment}
        />
        <button disabled={!comment} className={styles.comment_upload_btn}>
          게시
        </button>
      </form>
    </div>
  );
}
export default CommentWriting;
