const text = "Automation Engineer | PLC Developer | Python & Web Developer";

let index = 0;

function typeOnce() {
  const el = document.querySelector(".typing-text");
  if (!el) return;

  el.textContent = text.substring(0, index);
  index++;

  if (index <= text.length) {
    setTimeout(typeOnce, 50); // typing speed
  }
}

typeOnce();
