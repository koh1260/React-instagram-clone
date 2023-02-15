import SideBar from "../home/SideBar";
import Story from "../home/Story";
import Post from "../home/Post";
import FrdRecommand from "../home/FrdRecommand";
import Modal from "../components/Modal";
import PostingModal from "../components/PostingModal";
import styles from "./Home.module.css";
import postDummy from "../db/post.json";
import storyDummy from "../db/story.json";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Home() {
  const [posts, setPosts] = useState([]);
  const [openPosting, setOpenPosting] = useState(false);
  const userId = window.sessionStorage.getItem("userId");

  useEffect(() => {
    const config = {
      method: "get",
      url: "http://localhost:4000/post/test",
      data: { userId: Number(userId) },
      withCredentials: true,
    };

    axios(config)
      .then((response) => {
        const data = response.data;
        setPosts((currentPosts) => [...data]);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={styles.main}>
      {posts.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <div className={styles.side_bar}>
            <SideBar setOpenPosting={setOpenPosting}/>
          </div>
          {/* 게시글 작성 모달 */}
          {openPosting ? (
            <Modal 
            setOpenPosting={setOpenPosting}
            >
              <div>
                <PostingModal />
              </div>
            </Modal>
          ) : null}
          <div className={styles.post_and_recommand}>
            <div className={styles.story_and_post}>
              <div className={styles.storys}>
                <div className={styles.story_list_outer}>
                  <ul className={styles.story_list}>
                    {storyDummy.map((story) => (
                      <Story
                        key={story.id}
                        userId={story.id}
                        image={story.profileImage}
                      />
                    ))}
                  </ul>
                </div>
              </div>
              <div className={styles.post}>
                {posts.map((post) => (
                  <Post
                    key={post.postId}
                    user={post.User}
                    image={post.Images[0].imageUrl}
                    likes={20}
                    createAt={post.createAt}
                    content={post.content}
                    comments={post.Comments}
                  />
                ))}
              </div>
            </div>

            <div className={styles.frd_recommand}>
              <FrdRecommand />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Home;
