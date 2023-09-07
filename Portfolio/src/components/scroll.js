var scrollcount = 0;

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
      window.addEventListener("scroll", reveal);
    }
  }
}

window.addEventListener("scroll", reveal);

function remove(){
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
  reveals[i].classList.remove("active")
  }
}

// To check the scroll position on page load
