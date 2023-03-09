import { useState } from "react";
import styles from "./ProfilePost.module.css";
import { AiFillHeart } from "react-icons/ai";
import { HiChatBubbleOvalLeft } from "react-icons/hi2";
import CommentModal from "../Home/template/CommentModal";
import Modal from "../Home/Modal";

export default function ProfilePost({
  postId,
  content,
  createdAt,
  image,
  user,
  comments,
}) {
  const [openCommentModal, setOpenCommentModal] = useState(false);
  console.log(openCommentModal);
  return (
    <div className={styles.main}>
      {openCommentModal ? (
        <Modal openSet={setOpenCommentModal}>
          <CommentModal
            postId={postId}
            user={user}
            postImage={image[0].imageUrl}
            content={content}
            likes={20}
            createdAt={createdAt}
          />
        </Modal>
      ) : null}
      <div onClick={() => setOpenCommentModal(true)} className={styles.preview}>
        <div className={styles.like_and_comment}>
          <AiFillHeart className={styles.icon} />
          <div>20</div>
        </div>
        <div className={styles.like_and_comment}>
          <HiChatBubbleOvalLeft className={styles.icon} />
          <div>{comments.length}</div>
        </div>
      </div>
      <img className={styles.post_image} src={image[0].imageUrl} />
    </div>
  );
}
