import { useState } from "react";
import styles from "./Post.module.css";
import { useRef } from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import CommentModal from "../template/CommentModal";
import CommentWriting from "../molecules/CommentWriting";
import CommentService from "../../../api/comment";
import Modal from "../Modal";
import {ReactComponent as Heart} from '../../../assets/svg/svg-heart.svg';
import {ReactComponent as Bubble} from '../../../assets/svg/svg-bubble.svg';
import {ReactComponent as Airplane} from '../../../assets/svg/svg-airplane.svg';
import {ReactComponent as BookMark} from '../../../assets/svg/svg-bookmark.svg';

function Post({ user, postId, image, content, likes, createdAt, comments }) {
  const [openCommentModal, setOpenCommentModal] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [commentCount, setCommentCount] = useState(comments.length);

  console.log(openCommentModal);
  async function uploadComment(e) {
    e.preventDefault();

    const data = {
      postId: postId,
      content: newComment,
    };
    try {
      const response = await CommentService.post(data);
      console.log(response);

      setCommentCount((current) => current + 1);
      setNewComment("");
    } catch (err) {
      console.log(err);
    }
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
              <Heart className={`${styles.util} ${styles.util_heart}`} />
            </div>

            {/* 댓글 버튼 */}
            <div className={styles.util_outer}>
              <Bubble
                onClick={() => setOpenCommentModal(true)}
                className={styles.util}
              />
              {/* 댓글 모달 */}
              {openCommentModal ? (
                <Modal 
                  openSet={setOpenCommentModal}
                  >
                  <CommentModal
                    postId={postId}
                    user={user}
                    content={content}
                    likes={likes}
                    createdAt={createdAt}
                    comments={comments}
                    postImage={image}
                  />
                </Modal>
              ) : null}
            </div>

            <div className={styles.util_outer}>
              <Airplane className={styles.util} />
            </div>

            <div className={styles.book_mark_outer}>
              <BookMark className={`${styles.util} ${styles.book_mark}`} />
            </div>
          </div>

          <div className={styles.likes_count}>{`좋아요 ${likes}개`}</div>
          <div className={styles.post_user_and_content}>
            <span className={styles.post_user}>{user.nickname}</span>
            <span className={styles.content}>{content}</span>
          </div>
          {commentCount ? (
            <div
              onClick={() => setOpenCommentModal(true)}
              className={styles.comments_count}
            >{`댓글 ${commentCount}개 모두 보기`}</div>
          ) : null}
          <div className={styles.create_at}>{createdAt}</div>
        </div>

        {/* 댓글 작성 */}
        <div>
          <CommentWriting
            comment={newComment}
            setComment={setNewComment}
            onSubmit={uploadComment}
          />
        </div>
      </div>
    </div>
  );
}
export default Post;
