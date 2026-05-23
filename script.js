//
// 1. ONE-TIME TYPING ANIMATION
//
const text = "Automation & Digital Manufacturing | PLC/SCADA (Rockwell) | GuardLogix & Machine Safety | Motion Control | Cognex Vision | MES | OT-IT Integration | Industry 4.0 | Python, Django, OpenCV | AI-Driven Industrial Solutions";

let i = 0;

function typeOnce() {
  const el = document.querySelector(".typing-text");
  if (!el) return;

  el.textContent = text.substring(0, i);
  i++;

  if (i <= text.length) {
    setTimeout(typeOnce, 50);
  }
}

typeOnce();


//
// 2. SCROLL FADE-IN (APPLE STYLE REVEAL)
//
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.15
});

document.querySelectorAll(".fade-in").forEach(el => {
  observer.observe(el);
});
