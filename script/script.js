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
