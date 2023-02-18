import http from './http';

class CommentService{
    post(data){
        return http.post('/comment/writing', data)
    }
}

export default new CommentService();