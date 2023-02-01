import styles from "./CommentModal.module.css";

function CommentModal({ setOpenCommentModal }) {
  function closeCommentModal() {
    setOpenCommentModal(false);
  }

  return (
    <div className={styles.main}>
      <div>
        <button onClick={closeCommentModal} className={styles.close_btn}>
          X
        </button>

        <div className={styles.contents}>
          <div>
            <img />
          </div>
          <div>
            {/* 프로필 */}
            <div>
              <div>
                <img />
              </div>
              <div>gotjd911</div>
              <div>...</div>
            </div>
            {/* 댓글 */}
            <div></div>
            {/* 좋아요 ~ 댓글 달기 */}
            <div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CommentModal;
