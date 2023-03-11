import http from './http';


class AuthService{
    get(){
        return http.get('/auth/user');
    }
    isLogined(){
        return http.get('/auth/login-check');
    }
    login(data){
        return http.post('/auth/login', data);
    }
    logout(){
        return http.get('/auth/logout');
    }
    signUp(data){
        return http.post('/auth/sign-up', data);
    }
    loginedUser(){
        return http.get('/auth/logined-user');
    }
    user(userId){
        return http.get(`/auth/user/${userId}`);
    }
    userByNickname(nickname){
        return http.get(`/auth/user-nickname/${nickname}`);
    }
}

export default new AuthService();