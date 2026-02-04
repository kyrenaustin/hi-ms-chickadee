const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");
const music = document.getElementById("bgMusic");

noBtn.addEventListener("mouseenter", () => {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

yesBtn.addEventListener("click", () => {
  music.play();
  message.innerHTML = `
    I knew it 💕<br>
    You’re my peace, my joy,<br>
    my Chickadee — always.
  `;
});
