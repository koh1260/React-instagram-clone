import styles from "./Post.module.css";
import img from "../img/profile.jpeg";
import {BiDotsHorizontalRounded} from "react-icons/bi";
import {AiOutlineHeart} from "react-icons/ai";
import {HiOutlineChatBubbleOvalLeft} from "react-icons/hi2"
import {IoPaperPlaneOutline} from "react-icons/io5";
import {BsBookmark} from "react-icons/bs"

function Post({userId, image, content, likes, createAt, comment}){
    const postTimeCalc = (time) => {
      if (time >= 3600) return `${Math.floor(time / 3600)}시간 전`;
      if (time >= 60) return `${Math.floor(time / 60)}분 전`;
      return `${time}초 전`;
    }

    return (
      <div className={styles.main}>
        <div className={styles.post}>
          <div className={styles.profile}>
            <div className={styles.profile_image_outer}>
              <img className={styles.profile_image} src={img} />
            </div>
            <div className={styles.user_id}>{userId}</div>
            <div>
              <BiDotsHorizontalRounded />
            </div>
          </div>

          <div className={styles.contents}>
            <img 
              className={styles.content_image} 
              src={image} />
          </div>
          <div className={styles.utils}>
            <div>
              <AiOutlineHeart className={styles.util} />
            </div>
            <div>
              <HiOutlineChatBubbleOvalLeft className={styles.util} />
            </div>
            <div>
              <IoPaperPlaneOutline className={styles.util} />
            </div>
            <div className={styles.book_mark_outer}>
              <BsBookmark className={`${styles.util} ${styles.book_mark}`} />
            </div>
          </div>
          <div>{`좋아요 ${likes}개`}</div>
          <div>
            <span>{userId}</span>
            <span>{content}</span>
          </div>
          {comment.length ? (<div>{`댓글 ${comment.length}개 모두 보기`}</div>) : null}
          <div>{postTimeCalc(createAt)}</div>
          <div>댓글 작성</div>
        </div>
      </div>
    );   
}
export default Post;