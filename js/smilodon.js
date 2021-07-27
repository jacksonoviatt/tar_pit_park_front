smilodonArray = []

axios.request({
  method: "GET",
  url: "http://tarpitpark.ml/api/iceage?iceageId=2"
}).then(function(response) {smilodonArray = response.data
console.log(smilodonArray.name);
document.getElementById("smilodon_title").textContent += smilodonArray.name;

document.getElementById("smilodon_intro").textContent = smilodonArray.introText;
document.getElementById("smilodon_diet").textContent = smilodonArray.diet;
document.getElementById("smilodon_size").textContent = smilodonArray.size;
document.getElementById("smilodon_habitat").textContent = smilodonArray.habitat;
document.getElementById("smilodon_era").textContent = smilodonArray.era;

document.getElementById("img1").src = smilodonArray.photo1;
document.getElementById("caption1").textContent = smilodonArray.desc1;
document.getElementById("caption2").textContent = smilodonArray.desc2;
document.getElementById("caption3").textContent = smilodonArray.desc3;
document.getElementById("img2").src = smilodonArray.photo2;
document.getElementById("img3").src = smilodonArray.photo3;
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