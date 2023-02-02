import styles from "./CommentModal.module.css";

function CommentModal({ setOpenCommentModal, image }) {
  console.log(image);
  function closeCommentModal() {
    setOpenCommentModal(false);
  }

  return (
    <div className={styles.main}>
      <div className={styles.comment_modal}>
        <button onClick={closeCommentModal} className={styles.close_btn}>
          X
        </button>

        <div className={styles.content}>
          <div className={styles.image_container}>
            <div className={styles.image_outer}>
              <img src={image} />
            </div>
          </div>
          <div className={styles.profile_and_comment_container}>
            {/* 프로필 */}
            <div className={styles.profile}>
              <div>
                <img />
              </div>
              <div>gotjd911</div>
              <div>...</div>
            </div>
            {/* 댓글 */}
            <div className={styles.comment}>댓글댓글</div>
            {/* 좋아요 ~ 댓글 달기 */}
            <div>
              <div className={styles.utils}>
                <div>좋아요</div>
                <div>댓글</div>
                <div>공유</div>
                <div>북마크</div>
              </div>
              <div className={styles.likes_count}>좋아요 수</div>
              <div className={styles.create_at}>게시 날</div>
              <div className={styles.writing_comment}>
                <div>스마일</div>
                <input />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CommentModal;
