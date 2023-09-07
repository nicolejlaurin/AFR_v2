import { Link } from 'gatsby';

export default function Header() {
<Button
    as={Link}
    to="/components/aboutpage"
  	variant="text">
     	Get Started
  </Button>
}




const navSlide = () =>{
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelector(".nav-links li");

  burger.addEventListener("click", () =>{
});

  burger.addEventListener("click", () =>{
    this.classList.toggle("close");
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if(link.style.animation){
        link.style.animation = "";
      }else{
        link.style.animation = "navLinkFade 0.5s ease forwards ${index/7 + 1.3}s";
      }
    });
    burger.classList.toggle("toggle");
  });
}

navSlide();



function myMap() {
var mapProp= {
  center:new google.maps.LatLng(51.508742,-0.120850),
  zoom:5,
};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}

