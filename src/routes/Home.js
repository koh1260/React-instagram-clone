import SideBar from "home/SideBar";
import Post from "home/Post";
import FrdRecommand from "home/FrdRecommand";
import styles from "./Home.module.css";

function Home(){
    return (
      <div className={styles.main}>
        <div>
          <SideBar />
        </div>
        <div className={styles.PostAndRecommand}>
          <div className={styles.post}>
            <Post />
          </div>
          <div className={styles.frd_recommand}>
            <FrdRecommand />
          </div>
        </div>
      </div>
    );
}
export default Home;