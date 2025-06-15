// Get elements
const donateBtn = document.getElementById("donateBtn");
const modal = document.getElementById("donateModal");
const closeBtn = document.querySelector(".close");

// Show modal on button click
donateBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

// Hide modal on close button
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Hide modal if clicked outside the modal content
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Optional: Close menu if clicking outside or on a link
navLinks.querySelectorAll('a').forEach(link =>
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
  })
);

window.addEventListener('click', (e) => {
  if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
    navLinks.classList.remove('show');
  }
});

