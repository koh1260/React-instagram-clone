import SideBar from "home/SideBar";
import Story from "home/Story";
import Post from "home/Post";
import FrdRecommand from "home/FrdRecommand";
import styles from "./Home.module.css";
import profileImg from "../img/profile.jpeg";
import postImg from "../img/postImage.jpg";

function Home(){
  const storyUser = [
    {
        id: "koh1260",
        image: {profileImg},
    },
    {
        id: "a001206",
        image: {profileImg},
    },
    {
        id: "lucifer_5050",
        image: {profileImg},
    },
    {
        id: "usung_0421",
        image: {profileImg},
    },
    {
        id: "doori",
        image: {profileImg},
    },
    {
        id: "qwerty",
        image: {profileImg},
    },
];
  const postUser = [
    {
      id: "koh1260",
      image: { postImg },
      likes: 300,
      createAt: 60,
    },
    {
      id: "a001206",
      image: { postImg },
      likes: 313,
      createAt: 3600,
    },
    {
      id: "lucifer_5050",
      image: { postImg },
      likes: 530,
      createAt: 12,
    },
    {
      id: "usung_0421",
      image: { postImg },
      likes: 1023,
      createAt: 120,
    },
    {
      id: "doori",
      image: { postImg },
      likes: 6,
      createAt: 180,
    },
    {
      id: "qwerty",
      image: { postImg },
      likes: 1053,
      createAt: 200,
    },
  ];

    return (
      <div className={styles.main}>
        <div>
          <SideBar />
        </div>
        <div className={styles.post_and_recommand}>
          <div className={styles.story_and_post}>
            <div className={styles.storys}>
              <div className={styles.story_list_outer}>
                <ul className={styles.story_list}>
                  {storyUser.map((user) => (
                    <Story userId={user.id} image={user.image} />
                  ))}
                </ul>
              </div>
            </div>
            <div className={styles.post}>
              {postUser.map((post) => (
                <Post
                  userId={post.id}
                  postImage={post.image}
                  postLikes={post.likes}
                  createAt={post.createAt}
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