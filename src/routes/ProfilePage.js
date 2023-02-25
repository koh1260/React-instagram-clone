import styles from './ProfilePage.module.css';
import SideBar from "../components/Home/organisms/SideBar";
import Profile from "../components/ProfilePage/Profile";

export default function ProfilePage() {
  return (
    <div>
      <SideBar />
      <div className={styles.contents}>
        <Profile />
      </div>
    </div>
  );
}
