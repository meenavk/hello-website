console.log("Portfolio loaded successfully 🚀");

const texts = [
  "Automation Engineer",
  "PLC Programmer",
  "Python Developer",
  "Industrial Systems Builder",
  "React & Web Developer"
];

let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {
  const typingElement = document.querySelector(".typing-text");

  if (!typingElement) return;

  currentText = texts[index];

  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  typingElement.textContent = currentText.substring(0, charIndex);

  let speed = isDeleting ? 60 : 100;

  if (!isDeleting && charIndex === currentText.length) {
    speed = 1500;
    isDeleting = true;
  } 
  else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % texts.length;
    speed = 300;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();
