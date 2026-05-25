// Slider automático
let index = 0;
const images = document.querySelectorAll('.slider img');
function showSlide() {
  images.forEach(img => img.style.display = 'none');
  images[index].style.display = 'block';
  index = (index + 1) % images.length;
}
setInterval(showSlide, 3000);
showSlide();
