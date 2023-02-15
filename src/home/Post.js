import { useState } from "react";
import styles from "./Post.module.css";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { BsBookmark } from "react-icons/bs";
import { VscSmiley } from "react-icons/vsc";
import CommentModal from "./CommentModal";
import CommentWriting from "./CommentWriting";


function Post({ user, image, content, likes, createAt, comments}) {
  const [openCommentModal, setOpenCommentModal] = useState(false);

  function openAllComment() {
    setOpenCommentModal(true);
  }

  return (
    <div className={styles.main}>
      <div className={styles.post}>
        <div className={styles.profile}>
          <div className={styles.profile_image_outer}>
            <img className={styles.profile_image} src={user.profileImage} />
          </div>
          <div className={styles.user_id}>{user.nickname}</div>
          <div>
            <BiDotsHorizontalRounded />
          </div>
        </div>

        <div className={styles.contents}>
          <img className={styles.content_image} src={image} />
        </div>

        {/* 좋아요 ~ 게시 시간 */}
        <div className={styles.post_footer}>
          <div className={styles.utils}>
            <div className={styles.util_outer}>
              <AiOutlineHeart className={styles.util} />
            </div>

            {/* 댓글 버튼 */}
            <div className={styles.util_outer}>
              <HiOutlineChatBubbleOvalLeft
                onClick={openAllComment}
                className={styles.util}
              />
              {/* 댓글 모달 */}
              {openCommentModal ? (
                <CommentModal
                  setOpenCommentModal={setOpenCommentModal}
                  user={user}
                  content={content}
                  likes={likes}
                  createAt={createAt}
                  comments={comments}
                  postImage={image}
                />
              ) : null}
            </div>

            <div className={styles.util_outer}>
              <IoPaperPlaneOutline className={styles.util} />
            </div>

            <div className={styles.book_mark_outer}>
              <BsBookmark className={`${styles.util} ${styles.book_mark}`} />
            </div>
          </div>

          <div className={styles.likes_count}>{`좋아요 ${likes}개`}</div>
          <div className={styles.post_user_and_content}>
            <span className={styles.post_user}>{user.nickname}</span>
            <span className={styles.content}>{content}</span>
          </div>
          {comments.length ? (
            <div
              className={styles.comments_count}
            >{`댓글 ${comments.length}개 모두 보기`}</div>
          ) : null}
          <div className={styles.create_at}>{createAt}</div>
        </div>

        {/* 댓글 작성 */}
        <div>
          <CommentWriting />
        </div>
      </div>
    </div>
  );
}
export default Post;
