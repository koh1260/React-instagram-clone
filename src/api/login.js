import axios from "axios";

function loginAPI(url, data){
    axios.post(url, data)
        .then(response => console.log(response))
        .catch(err => console.log(err));
}
export {loginAPI, };