// Toggle mobile navigation menu
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

// Close menu when clicking a nav link (mobile)
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    if (navMenu.classList.contains('open')) {
      navMenu.classList.remove('open');
    }
  });
});

// Simple form validation and submission simulation
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', e => {
  e.preventDefault();
  const name = contactForm.name.value.trim();
  const email = contactForm.email.value.trim();
  const message = contactForm.message.value.trim();
  if (!name || !email || !message) {
    alert('Mohon lengkapi semua field.');
    return;
  }

  // Simple email format check
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert('Mohon masukkan email yang valid.');
    return;
  }
  alert('Terima kasih atas pesan Anda, kami akan segera menghubungi Anda.');
  contactForm.reset();
});

// Slideshow functionality
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.slide-controls .prev');
const nextBtn = document.querySelector('.slide-controls .next');
let currentSlide = 0;
const totalSlides = slides.length;
let slideInterval = null;
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
  currentSlide = index;
}
function nextSlide() {
  const nextIndex = (currentSlide + 1) % totalSlides;
  showSlide(nextIndex);
}
function prevSlide() {
  const prevIndex = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(prevIndex);
}

// Event listeners for manual controls
nextBtn.addEventListener('click', () => {
  nextSlide();
  resetInterval();
});
prevBtn.addEventListener('click', () => {
  prevSlide();
  resetInterval();
});

// Auto slide every 5 seconds
function startInterval() {
  slideInterval = setInterval(nextSlide, 5000);
}
function resetInterval() {
  clearInterval(slideInterval);
  startInterval();
}

// Initialize slideshow
showSlide(0);
startInterval();