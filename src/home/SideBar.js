import styles from "./SideBar.module.css";
import instaLogo from "../img/instagram_icon.png";
import {GrSearch}from "react-icons/gr";
import {AiOutlineCompass} from "react-icons/ai";
import {IoPaperPlaneOutline} from "react-icons/io5";
import {AiOutlineHeart} from "react-icons/ai";
import {FiPlusSquare} from "react-icons/fi";
import {CgProfile} from "react-icons/cg";
import {GrHomeRounded} from "react-icons/gr";
import {RxHamburgerMenu} from "react-icons/rx";
import {BiMoviePlay} from "react-icons/bi";

function SideBar() {
  return (
    <div className={styles.main}>
      <div className={styles.side_bar}>
        <div className={styles.side_bar_logo}>
          <img
            style={{
              height: "36px",
            }}
            src={instaLogo}
          />
        </div>

        <div className={styles.menus}>
          <div className={styles.menu}>
            <span>
              <GrHomeRounded className={styles.menu_icon}/>
            </span>
            <span className={styles.menu_text}>홈</span>
          </div>
          <div className={styles.menu}>
            <span>
              <GrSearch className={styles.menu_icon} />
            </span>
            <span className={styles.menu_text}>검색</span>
          </div>
          <div className={styles.menu}>
            <span>
              <AiOutlineCompass className={styles.menu_icon} />
            </span>
            <span className={styles.menu_text}>탐색</span>
          </div>

          <div className={styles.menu}>
            <span>
              <BiMoviePlay className={styles.menu_icon} />
            </span>
            <span className={styles.menu_text}>릴스</span>
          </div>

          <div className={styles.menu}>
            <span>
              <IoPaperPlaneOutline className={styles.menu_icon} />
            </span>
            <span className={styles.menu_text}>메세지</span>
          </div>
          <div className={styles.menu}>
            <span>
              <AiOutlineHeart className={styles.menu_icon} />
            </span>
            <span className={styles.menu_text}>알림</span>
          </div>
          <div className={styles.menu}>
            <span>
              <FiPlusSquare className={styles.menu_icon} />
            </span>
            <span className={styles.menu_text}>만들기</span>
          </div>
          <div className={styles.menu}>
            <span>
              <CgProfile className={styles.menu_icon} />
            </span>
            <span className={styles.menu_text}>프로필</span>
          </div>
        </div>

        <div className={styles.menu}>
            <span>
                <RxHamburgerMenu className={styles.menu_icon}/>
            </span>
            <span className={styles.menu_text}>더 보기</span>
        </div>
      </div>
    </div>
  );
}
export default SideBar;
