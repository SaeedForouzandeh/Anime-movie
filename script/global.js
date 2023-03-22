let mybutton = document.getElementById("btn-back-to-top");
const searchInput = document.querySelector(".search-input");
const formSearch = document.querySelector(".search-form");

formSearch.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(searchInput.value);
  let params = new URLSearchParams();
  params.append("name", searchInput.value);
  location.href = "search.html?" + params.toString();
});

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.visibility = "visible";
    mybutton.style.opacity = "1";
  } else {
    mybutton.style.visibility = "hidden";
    mybutton.style.visibility = "0";
  }
}

mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
