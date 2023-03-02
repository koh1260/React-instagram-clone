import SideBar from "../organisms/SideBar";
import Story from "../organisms/Story";
import Post from "../organisms/Post";
import FrdRecommand from "../organisms/FrdRecommand";
import Modal from "../Modal";
import PostingModal from "../PostingModal";
import styles from "./Home.module.css";
import storyDummy from "../../../db/story.json";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Home() {
  const [posts, setPosts] = useState([]);
  const [openPosting, setOpenPosting] = useState(false);
  const nickname = window.sessionStorage.getItem("nickname");

  useEffect(() => {
    const config = {
      method: "get",
      url: "http://localhost:4000/post/test",
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
            <SideBar 
              loginedUser={nickname}
              setOpenPosting={setOpenPosting}/>
          </div>
          {/* 게시글 작성 모달 */}
          {openPosting ? (
            <Modal 
            setOpenPosting={setOpenPosting}
            >
                <PostingModal setOpenPosting={setOpenPosting}/>
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
                    postId={post.postId}
                    user={post.User}
                    image={post.Images[0].imageUrl}
                    likes={20}
                    createdAt={post.createdAt}
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
