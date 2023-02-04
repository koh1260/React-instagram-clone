function api() {
  fetch("http://localhost:4000/users")
    .then((response) => response.json())
    .then((json) => console.log(json));
}
api();