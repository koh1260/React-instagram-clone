import http from './http';

class PostService{
  followingPostsAll(){
    return http.get('post/test');
  }
  loginedPosts(){
    return http.get('/post/logined-post');
  }
}

export default new PostService();