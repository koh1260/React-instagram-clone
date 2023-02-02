import styles from "./CommentModal.module.css";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { BsBookmark } from "react-icons/bs";
import CommentWriting from "./CommentWriting";

function CommentModal({
  profileImage,
  user,
  setOpenCommentModal,
  postImage,
  comments,
  likes,
  createAt,
}) {
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
              <img className={styles.content_image} src={postImage} />
            </div>
          </div>
          <div className={styles.profile_and_comment_container}>
            {/* 프로필 */}
            <div className={styles.profile}>
              <div className={styles.profile_image_outer}>
                <img className={styles.profile_image} src={user.profileImage} />
              </div>
              <div className={styles.profile_userid}>{user.id}</div>
              <div className={styles.profile_more_info_btn_outer}>
                <BiDotsHorizontalRounded />
              </div>
            </div>

            <div className={styles.content}></div>
            {/* 댓글 */}
            <div className={styles.comment}>댓글댓글</div>
            {/* 좋아요 ~ 댓글 달기 */}
            <div>
              <div className={styles.utils}>
                <div>
                  <AiOutlineHeart />
                </div>
                <div>
                  <HiOutlineChatBubbleOvalLeft />
                </div>
                <div>
                  <IoPaperPlaneOutline />
                </div>
                <div>
                  <BsBookmark />
                </div>
              </div>
              <div className={styles.likes_count}>{likes}</div>
              <div className={styles.create_at}>{createAt}</div>
              <div className={styles.writing_comment}>
                <CommentWriting />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CommentModal;
