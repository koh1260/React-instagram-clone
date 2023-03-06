import http from './http';

class PostService{
  followingPostsAll(){
    return http.get('post/posts-view');
  }
  loginedPosts(){
    return http.get('/post/logined-post');
  }
}

export default new PostService();