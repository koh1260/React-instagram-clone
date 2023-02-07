import axios from "axios";

function postSignUp(url, data) {
  axios.post(url, data)
    .then((response) => console.log(response))
    .catch((err) => console.log(err));
}

export { postSignUp };
