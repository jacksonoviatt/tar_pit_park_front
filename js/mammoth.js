mammothArray = []

axios.request({
  method: "GET",
  url: "http://tarpitpark.ml/api/iceage?iceageId=1"
}).then(function(response) {mammothArray = response.data
console.log(mammothArray.name);
document.getElementById("mammoth_title").textContent += mammothArray.name;

document.getElementById("mammoth_intro").textContent = mammothArray.introText;
document.getElementById("mammoth_diet").textContent = mammothArray.diet;
document.getElementById("mammoth_size").textContent = mammothArray.size;
document.getElementById("mammoth_habitat").textContent = mammothArray.habitat;
document.getElementById("mammoth_era").textContent = mammothArray.era;

document.getElementById("img1").src = mammothArray.photo1;
document.getElementById("caption1").textContent = mammothArray.desc1;
document.getElementById("caption2").textContent = mammothArray.desc2;
document.getElementById("caption3").textContent = mammothArray.desc3;
document.getElementById("img2").src = mammothArray.photo2;
document.getElementById("img3").src = mammothArray.photo3;
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