import styles from "./CommentModal.module.css";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import CommentWriting from "../components/Home/molecules/CommentWriting";
import Comment from "../components/Home/molecules/Comment";
import axios from "axios";
import {ReactComponent as Heart} from '../svg/svg-heart.svg';
import {ReactComponent as Bubble} from '../svg/svg-bubble.svg';
import {ReactComponent as Airplane} from '../svg/svg-airplane.svg';
import {ReactComponent as BookMark} from '../svg/svg-bookmark.svg';
import { useState, useEffect } from "react";
import CommentService from '../api/comment';

function CommentModal({
  postId,
  user,
  setOpenCommentModal,
  postImage,
  content,
  likes,
  createdAt,
}) {
const [comments, setComments] = useState();
const [newComment, setNewComment] = useState("");


  useEffect(() => {
    async function getComments(){
      const response = await CommentService.getComments(postId);
      const comments = response.data;
      setComments(comments);
    }
    getComments();
  }, [comments]);

  async function uploadComment(e) {
    e.preventDefault();

    const data = {
      postId: postId,
      content: newComment,
    };
    try {
      const response = await CommentService.post(data);
      console.log(response);

      setNewComment("");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className={styles.main}>
      <button onClick={() => setOpenCommentModal(false)} className={styles.close_btn}>
        X
      </button>
      <div className={styles.comment_modal}>
        <div className={styles.content}>
          <div className={styles.image_container}>
            <div className={styles.post_image_outer}>
              <img className={styles.content_image} src={postImage} />
            </div>
          </div>
          <div className={styles.profile_and_comment_container}>
            {/* 프로필 */}
            <div className={styles.profile}>
              <div className={styles.profile_image_outer}>
                <img className={styles.profile_image} src={user.profileImage} />
              </div>
              <div className={styles.profile_userid}>{user.nickname}</div>
              <div className={styles.profile_more_info_btn_outer}>
                <BiDotsHorizontalRounded />
              </div>
            </div>

            {/* 게시글 내용, 댓글 */}
            <div className={styles.content_conatiner}>
              {/* 게시글 내용 */}
              <div className={styles.post_content}>
                <div className={styles.post_content_profile_image_outer}>
                  <img
                    className={styles.post_content_profile_image}
                    src={user.profileImage}
                  />
                </div>

                <div
                  className={
                    styles.post_content_post_content_id_and_content_outer
                  }
                >
                  {/* 아이디, 내용 */}
                  <div className={styles.post_content_id_and_content}>
                    <span className={styles.post_content_user_id}>
                      {user.id}
                    </span>
                    <span className={styles.post_content_content}>
                      {content}
                    </span>
                  </div>
                  {/* 게시날 */}
                  <div className={styles.post_content_create_at}>
                    <div>{createdAt}</div>
                  </div>
                </div>
              </div>

              {/* 댓글 */}
              <div className={styles.comment}>
                {comments ? (
                  comments.map((comment) => (
                    <Comment
                      key={comment.commentId}
                      user={comment.User}
                      content={comment.content}
                      likes={20}
                      createdAt={comment.createdAt}
                    />
                  ))
                ): <div>Loading....</div>}
            
              </div>
            </div>

            {/* 좋아요 ~ 댓글 달기 */}
            <div>
              <div className={styles.utils}>
                <div className={styles.util}> 
                  <Heart />
                </div>
                <div className={styles.util}>
                  <Bubble />
                </div>
                <div className={`${styles.util} ${styles.util_right_space}`}>
                  <Airplane />
                </div>
                <div className={styles.util}>
                  <BookMark />
                </div>
              </div>
              <div className={styles.likes_count}>{`좋아요 ${likes}개`}</div>
              <div className={styles.create_at}>{createdAt}</div>
              <div className={styles.writing_comment}>
                <CommentWriting 
                comment={newComment}
                onSubmit={uploadComment}
                setComment={setNewComment}
                className={styles.writing_comment_component}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CommentModal;
