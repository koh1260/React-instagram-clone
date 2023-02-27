import styles from "./MenuBar.module.css";
import { BsMoon } from "react-icons/bs";
import { IoMdStopwatch } from "react-icons/io";
import { CgDanger } from "react-icons/cg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function MenuBar() {
  const navigate = useNavigate();

  function logout() {
    console.log("click");
    axios.get("http://localhost:4000/auth/logout").then((response) => {
      if (response.status === 200) {
        console.log(response);
        window.sessionStorage.removeItem('nickname');
        navigate("/")
    };
    });
  }

  return (
    <div className={styles.menu__bar}>
      <div className={styles.menu__bar__top}>
        <div className={styles.menu}>설정</div>
        <div className={styles.menu}>저장</div>
        <div className={styles.menu}>
          <span>모드 전환</span>
          <BsMoon className={styles.menu_icon} />
        </div>
        <div className={styles.menu}>
          <span>내활동</span>
          <IoMdStopwatch
            className={`${styles.menu_icon} ${styles.menu_margin}`}
          />
        </div>
        <div className={styles.menu}>문제 신고</div>
        <div className={styles.menu}>계정 전환</div>
        <div type="button" onClick={logout} className={styles.menu}>
          로그아웃
        </div>
      </div>
    </div>
  );
}

export default MenuBar;
