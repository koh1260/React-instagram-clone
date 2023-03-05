import styles from './Profile.module.css';
import { ReactComponent as Settiongs } from '../../assets/svg/svg-setting.svg';

export default function Profile({user, postsLength}) {
  return (
    <div className={styles.main}>
      {/* 프로필 이미지 */}
      <div className={styles.profile_image_outer}>
        <img 
        className={styles.profile_image}
        src={user.profileImage}/>
      </div>
      {/* 나머지 */}
      <div className={styles.profile_contents}>
        {/* 1 */}
        <div className={styles.profile_contents_top}>
          <div className={styles.profile_contents_top_nickname}>{user.nickname}</div>
          <div>
            <button className={styles.profile_contents_top_adit_btn}>프로필 편집</button>
          </div>
            <Settiongs className={styles.profile_contents_top_setting_btn}/>
        </div>
        {/* 2 */}
        <div className={styles.profile_contents_mid}>
          <div className={styles.profile_contents_mid_item}>{`게시물 ${postsLength}`}</div>
          <div className={styles.profile_contents_mid_item}>팔로워 145</div>
          <div className={styles.profile_contents_mid_item}>팔로우 164</div>
        </div>
        {/* 3 */}
        <div className={styles.profile_contents_bottom}>
          <div>{user.name}</div>
          <div>안녕 난 해성</div>
        </div>
      </div>
    </div>
  );
}
