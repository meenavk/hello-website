const text = "Automation & Digital Manufacturing | PLC/SCADA (Rockwell) | GuardLogix & Machine Safety | Motion Control | Cognex Vision | MES | OT-IT Integration | Industry 4.0 | Python, Django, OpenCV | AI-Driven Industrial Solutions";

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
