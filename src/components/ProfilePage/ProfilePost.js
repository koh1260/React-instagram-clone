import styles from "./ProfilePost.module.css";
import { AiFillHeart } from "react-icons/ai";
import { HiChatBubbleOvalLeft } from "react-icons/hi2";

export default function ProfilePost({
  postId,
  content,
  createdAt,
  image,
  user,
  comments,
}) {
    console.log(comments);
  return (
    <div className={styles.main}>
      <div className={styles.preview}>
        <div className={styles.like_and_comment}>
          <AiFillHeart className={styles.icon} />
          <div>20</div>
        </div>
        <div className={styles.like_and_comment}>
            <HiChatBubbleOvalLeft className={styles.icon}/>
            <div>{comments.length}</div>
        </div>
      </div>
      <img className={styles.post_image} src={image[0].imageUrl} />
    </div>
  );
}
