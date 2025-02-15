let index = 0;

function showSlide() {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;
    slides.style.transform = `translateX(${-index * 100}%)`;
    index = (index + 1) % totalSlides;
}

setInterval(showSlide, 3000);