// Smooth scrolling for internal anchors
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    // Only smooth-scroll if it's an in-page anchor (#something)
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// Typing effect
const sentences = [
  "Software Engineer specializing in building exceptional digital experiences.",
  "Passionate about clean code and modern web design.",
  "Always learning and experimenting with new technologies.",
  "Turning ideas into reality through code."
];

const typingText = document.querySelector('.typing-text');
let sentenceIndex = 0;
let charIndex = 0;
let currentSentence = '';
let isDeleting = false;

function typeEffect() {
  currentSentence = sentences[sentenceIndex];

  if (isDeleting) {
    typingText.textContent = currentSentence.substring(0, charIndex--);
  } else {
    typingText.textContent = currentSentence.substring(0, charIndex++);
  }

  let speed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === currentSentence.length) {
    speed = 1500; // Pause at full sentence
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    sentenceIndex = (sentenceIndex + 1) % sentences.length;
    speed = 500;
  }

  setTimeout(typeEffect, speed);
}

document.addEventListener('DOMContentLoaded', typeEffect);

// Cursor-following gradient
document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  
  // Update CSS variables for the gradient
  document.body.style.setProperty('--x', x + 'px');
  document.body.style.setProperty('--y', y + 'px');
});
