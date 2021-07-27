slothArray = []

axios.request({
  method: "GET",
  url: "https://tarpitpark.ml/api/iceage?iceageId=3"
}).then(function(response) {slothArray = response.data
console.log(slothArray.name);
document.getElementById("sloth_title").textContent += slothArray.name;

document.getElementById("sloth_intro").textContent = slothArray.introText;
document.getElementById("sloth_diet").textContent = slothArray.diet;
document.getElementById("sloth_size").textContent = slothArray.size;
document.getElementById("sloth_habitat").textContent = slothArray.habitat;
document.getElementById("sloth_era").textContent = slothArray.era;

document.getElementById("img1").src = slothArray.photo1;
document.getElementById("caption1").textContent = slothArray.desc1;
document.getElementById("caption2").textContent = slothArray.desc2;
document.getElementById("caption3").textContent = slothArray.desc3;
document.getElementById("img2").src = slothArray.photo2;
document.getElementById("img3").src = slothArray.photo3;
}
).catch(function (error) {console.log(error)});



var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}