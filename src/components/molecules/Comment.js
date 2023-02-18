import styles from "./Comment.module.css";
import { AiOutlineHeart } from "react-icons/ai";

export default function Comment({ user, content, createAt, likes }) {
  return (
    <div className={styles.comment}>
      {/* 이미지 */}
      <div className={styles.comment_profile_image_outer}>
        <img className={styles.comment_profile_image} src={user.profileImage} />
      </div>
      {/* 내용 */}
      <div className={styles.comment_info}>
        {/* 아이디, 내용 */}
        <div className={styles.comment_id_and_content}>
          <h3
             className={styles.comment_user_id}
            style={{
              display: "inline-flex",
              marginTop: "0",
              marginBottom: "0",
            }}
          >
            {user.nickname}
          </h3>
          <div
             className={styles.comment_content}
            style={{
              display: "inline",
            }}
          >
            {content}
          </div>
        </div>
        {/* 시간, 좋아요 수, 답글 ... */}
        <div className={styles.comment_utils}>
          <div className={styles.comment_utils_create_at}>{`${createAt}일 전`}</div>
          <div className={styles.comment_utils_likes}>{`좋아요 ${likes}개`}</div>
          <div className={styles.comment_utils_reply}>답글 달기</div>
        </div>
      </div>
      <div>
        <AiOutlineHeart style={{marginTop: "0.5rem"}}/>
      </div>
    </div>
  );
}
