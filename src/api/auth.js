import http from './http';


class AuthService{
    get(){
        return http.get('/auth/user');
    }
    login(data){
        return http.post('/auth/login', data);
    }
    logout(){
        return http.get('/auth/logout');
    }
    signup(data){
        return http.post('/auth/sign-up', data);
    }
    loginedUser(){
        return http.get('/auth/logined-user');
    }
    user(userId){
        return http.get(`/auth/user/${userId}`);
    }
}

export default new AuthService();