const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");
const music = document.getElementById("bgMusic");

// NO button runs away (desktop)
noBtn.addEventListener("mouseenter", () => {
  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

// NO button runs away (mobile)
noBtn.addEventListener("touchstart", () => {
  noBtn.dispatchEvent(new Event("mouseenter"));
});

// YES button action
yesBtn.addEventListener("click", () => {
  if (music) {
    music.play().catch(() => {});
  }

  message.innerHTML = `
    hehe thanksha 💕<br>
    Mwuahhh <br>
    my Chickadee — always n foreva.
  `;
});
