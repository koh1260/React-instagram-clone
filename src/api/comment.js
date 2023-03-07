import http from './http';

class CommentService{
    writingComment(data){
        return http.post('/comment/writing', data);
    }
    getComments(postId){
        return http.get(`/comment/comment-view/${postId}`);
    }
}

export default new CommentService();