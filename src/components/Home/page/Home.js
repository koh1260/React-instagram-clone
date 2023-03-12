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
import { useDispatch } from "react-redux";
import userSlice from "../../../redux/slice/userSlice";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [openPosingModal, setOpenPostingModal] = useState(false);
  const user = JSON.parse(window.sessionStorage.getItem("user"));

  async function loginCheck() {
    if (!user) return false;
    const response = await AuthService.isLogined();
    const isLogined = response.data.isLogined;

    if (!isLogined) return false;
    return true;
  }

  async function getPost() {
    const isLogined = await loginCheck();
    console.log('로그인 체크: ', isLogined);
    if (!isLogined) {
      navigate("/");
      return;
    }
    dispatch(userSlice.actions.setUser(user));
    const response = await postService.followingPostsAll();
    const posts = response.data;
    setPosts(posts);
  }

  useEffect(() => {
    getPost();
  }, []);
  console.log(posts);
  return (
    <div className={styles.main}>
      {posts.length === 0 ? (
        <h1 className={styles.loading}></h1>
      ) : (
        <div>
          <div className={styles.side_bar}>
            <SideBar setOpenPostingModal={setOpenPostingModal} />
          </div>

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

          {/* 게시글 작성 모달 */}
          {openPosingModal ? (
            <Modal openSet={setOpenPostingModal}>
              <PostingModal />
            </Modal>
          ) : null}
        </div>
      )}
    </div>
  );
}
export default Home;
