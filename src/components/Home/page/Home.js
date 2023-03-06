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
import { useSelector, useDispatch } from "react-redux";
import postService from '../../../api/post';
import axios from "axios";
import postSlice from "../../../redux/slice/postSlice";

function Home() {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.post.posts);
  const controlPostingModal = useSelector(state => state.post.openPostingModal);
  const nickname = window.sessionStorage.getItem("nickname");

  useEffect(() => {
    async function getPost(){
      const response = await postService.followingPostsAll();
      const posts = response.data;
      console.log(response);
      dispatch(postSlice.actions.setPosts({posts:posts}));
    }
    getPost();
  }, []);
  console.log(controlPostingModal);
  return (
    <div className={styles.main}>
      {posts.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <div className={styles.side_bar}>
            <SideBar 
              loginedUser={nickname}
              />
          </div>
          {/* 게시글 작성 모달 */}
          {controlPostingModal ? (
            <Modal>
                <PostingModal/>
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
