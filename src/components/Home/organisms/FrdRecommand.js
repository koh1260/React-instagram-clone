import styles from "./FrdRecommand.module.css";
import img from "../../../assets/img/profile.jpeg"
import RecommdedFrd from "../molecules/RecommandedFrd";

function FrdRecommand(){
    return (
      <div className={styles.main}>
        <div className={styles.recommand}>
          {/* 내 프로필 */}
          <div className={styles.my_profile}>
            <div className={styles.my_profile_image_outer}>
              <img className={styles.my_profile_image} src={img} />
            </div>
            <div className={styles.id_and_name}>
              <div className={styles.id}>a00126</div>
              <div className={styles.name}>두리</div>
            </div>
            <div className={styles.change}>
              <button className={styles.change_btn}>전환</button>
            </div>
          </div>

          {/* 추천 모두 보기 */}
          <div className={styles.friends_recommand_all}>
            <div className={styles.friends_recommand_all_text}>
              회원님을 위한 추천
            </div>
            <div className={styles.view_all_btn_outer}>
              <button className={styles.view_all_btn}>모두 보기</button>
            </div>
          </div>

          {/* 추천 친구 */}
          <div className={styles.friends_recommand}>
            <RecommdedFrd />
          </div>

          {/* Link */}
          <div className={styles.more_informations_outer}>
            <ul className={styles.more_informations}>
              <li className={styles.information}>
                <a>소개</a>
              </li>
              <li className={styles.information}>
                <a>도움말</a>
              </li>
              <li className={styles.information}>
                <a>홍보 센터</a>
              </li>
              <li className={styles.information}>
                <a>API</a>
              </li>
              <li className={styles.information}>
                <a>채용 정보</a>
              </li>
              <li className={styles.information}>
                <a>개인정보처리방침</a>
              </li>
              <li className={styles.information}>
                <a>약관</a>
              </li>
              <li className={styles.information}>
                <a>위치</a>
              </li>
              <li className={styles.information}>
                <a>언어</a>
              </li>
            </ul>
          </div>
          <div className={styles.insta_meta}>© 2023 INSTAGRAM FROM META</div>
        </div>
      </div>
    );   
}
export default FrdRecommand;