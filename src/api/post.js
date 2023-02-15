import http from './http';

class PostService{
  followingPostsAll(){
    return http.get('/test');
  }
}

export default new PostService();