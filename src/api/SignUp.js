import axios from "axios";

function postSignUp(url, data){
    axios.post(url,data).then(response => console.log(response));
}

export {postSignUp, };