import SideBar from "home/SideBar";
import Story from "home/Story";
import Post from "home/Post";
import FrdRecommand from "home/FrdRecommand";
import styles from "./Home.module.css";
import profileImg from "../img/profile.jpeg";
import postImg from "../img/postImage.jpg";
import postDummy from "../db/post.json";
import storyDummy from "../db/story.json";

function Home() {

  return (
    <div className={styles.main}>
      <div className={styles.side_bar}>
        <SideBar />
      </div>
      <div className={styles.post_and_recommand}>
        <div className={styles.story_and_post}>
          <div className={styles.storys}>
            <div className={styles.story_list_outer}>
              <ul className={styles.story_list}>
                {storyDummy.map((story) => (
                  <Story userId={story.id} image={story.profileImage} />
                ))}
              </ul>
            </div>
          </div>
          <div className={styles.post}>
            {postDummy.map((post) => (
              <Post
                key={post.id}
                userId={post.id}
                image={post.image}
                likes={post.likes}
                createAt={post.createAt}
                content={post.content}
                comment={post.comment}
              />
            ))}
          </div>
        </div>

        <div className={styles.frd_recommand}>
          <FrdRecommand />
        </div>
      </div>
    </div>
  );
}
export default Home;
