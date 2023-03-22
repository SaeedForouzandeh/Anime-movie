function anime() {
  fetch("https://anime-facts-rest-api.herokuapp.com/api/v1/:anime_name")
    .then((res) => res.json())
    .than((res) => {
      call(res);
    });
  console.log(res);
}

// const
const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".loginLink");
const registerLink = document.querySelector(".registerLink");
const btnlogin = document.querySelector(".btnLogin-popup");
const iconClose = document.querySelector(".iconClose");
// register & Login
registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

// Login btn
btnlogin.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
  if (wrapper.classList.contains("active")) {
    wrapper.classList.remove("active");
  }
});

iconClose.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
});
