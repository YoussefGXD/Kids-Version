// LANDING PAGE ANIMATION
var scene = document.getElementById("scene");
var parallaxInstance = new Parallax(scene);

var keys = [
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune"
];
let slider = new Swiper(".swiper-container", {
  // Optional parameters
  slidesPerView: "auto",
  spaceBetween: 150,
  centeredSlides: true,
  mousewheel: true,
  pagination: {
    el: ".planet-links",
    clickable: true,
    renderBullet: function(index, className) {
      return '<div class="' + className + '">' + keys[index] + "</div>";
    }
  }
});

