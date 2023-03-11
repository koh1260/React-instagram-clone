import SideBar from "../organisms/SideBar";
import Story from "../organisms/Story";
import Post from "../organisms/Post";
import FrdRecommand from "../organisms/FrdRecommand";
import Modal from "../Modal";
import PostingModal from "../PostingModal";
import styles from "./Home.module.css";
import storyDummy from "../../../db/story.json";
import { useState, useEffect } from "react";
import postService from "../../../api/post";
import AuthService from "../../../api/auth";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [openPosingModal, setOpenPostingModal] = useState(false);
  const nickname = window.sessionStorage.getItem("nickname");

  useEffect(() => {
    async function getPost() {
      const loginCheckRes = await AuthService.isLogined();
      const isLogined = loginCheckRes.data.isLogined;
      console.log("isLogined: ", isLogined);
      if (!isLogined) {
        console.log("navigate");
        navigate("/");
        return;
      }
      const response = await postService.followingPostsAll();
      const posts = response.data;
      console.log(response);
      setPosts(posts);
    }
    getPost();
  }, []);
  console.log(openPosingModal);
  return (
    <div className={styles.main}>
      <div>
        <div className={styles.side_bar}>
          <SideBar
            setOpenPostingModal={setOpenPostingModal}
            loginedUser={nickname}
          />
        </div>
        {posts.length === 0 ? (
          <h1>Loading...</h1>
        ) : (
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
        )}

        {/* 게시글 작성 모달 */}
        {openPosingModal ? (
          <Modal openSet={setOpenPostingModal}>
            <PostingModal />
          </Modal>
        ) : null}
      </div>
    </div>
  );
}
export default Home;
