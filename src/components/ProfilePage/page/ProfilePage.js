import styles from "./ProfilePage.module.css";
import SideBar from "../../Home/organisms/SideBar";
import Profile from "../Profile";
import MenuBar from "../MenuBar";
import ProfilePost from "../ProfilePost";
import { useEffect, useState } from "react";
import PostService from "../../../api/post";
import AuthService from '../../../api/auth';
import { useParams } from "react-router-dom";

export default function ProfilePage() {
  const { nickname } = useParams();
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState();
  console.log(nickname);
  useEffect(() => {
    async function getPosts() {
      const response = await PostService.loginedPosts();
      console.log(response);
      const postsList = response.data;
      setPosts(postsList);
    }
    async function getUserInfo(){
      const response = await AuthService.userByNickname(nickname);
      console.log('userInfoByNickname: ',response);
      const user = response.data;
      setUser(user);
    }
    getUserInfo();
    getPosts();
  }, []);

  return (
    <div>
      <SideBar />
      {user && posts ? (
      <div className={styles.contents}>
      <Profile 
        user={user}
        postsLength={posts.length}
        />
      <MenuBar />
      <div className={styles.contents_post}>
        {posts ? (
          posts.map((post) => (
            <ProfilePost
              key={post.postId}
              postId={post.postId}
              content={post.content}
              createdAt={post.createdAt}
              image={post.Images}
              user={post.User}
              comments={post.Comments}
            />
          ))
        ) : (
          <div>앖졍</div>
        )}
      </div>
    </div>
      ) : <div>Loading. . .</div>}

    </div>
  );
}
