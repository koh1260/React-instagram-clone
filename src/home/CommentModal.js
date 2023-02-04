import styles from "./CommentModal.module.css";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { BsBookmark } from "react-icons/bs";
import CommentWriting from "./CommentWriting";
import Comment from "./Comment";
import { type } from "@testing-library/user-event/dist/type";

function CommentModal({
  user,
  setOpenCommentModal,
  postImage,
  comments,
  content,
  likes,
  createAt,
}) {
  function closeCommentModal() {
    setOpenCommentModal(false);
  }

  console.log(comments[0].user);

  return (
    <div className={styles.main}>
      <button onClick={closeCommentModal} className={styles.close_btn}>
        X
      </button>
      <div className={styles.comment_modal}>
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
            
            {/* 게시글 내용, 댓글 */}
            <div className={styles.content_conatiner}>
                {/* 게시글 내용 */}
            <div className={styles.post_content}>
              <div className={styles.post_content_profile_image_outer}>
                <img className={styles.post_content_profile_image} src={user.profileImage} />
              </div>

              <div className={styles.post_content_post_content_id_and_content_outer}>
                {/* 아이디, 내용 */}
                <div className={styles.post_content_id_and_content}>
                  <span className={styles.post_content_user_id}>{user.id}</span>
                  <span className={styles.post_content_content}>{content}</span>
                </div>
                {/* 게시날 */}
                <div className={styles.post_content_create_at}>
                  <div>{createAt}</div>
                </div>
              </div>
            </div>

            {/* 댓글 */}
            <div className={styles.comment}>
                {comments.map(comment => (
                    <Comment 
                        key={comment.user.id}
                        user={comment.user}
                        content={comment.content}
                        likes={comment.likes}
                        createAt={comment.createAt}
                        /> 
                ))}
            </div>

            </div>
            

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
