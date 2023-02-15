import http from './http';


class AuthService{
    get(){
        return http.get('/user');
    }
    login(data){
        return http.post('/login', data);
    }
    logout(){
        return http.get('/logout');
    }
    signup(data){
        return http.post('/sign_up', data);
    }
}

export default new AuthService();