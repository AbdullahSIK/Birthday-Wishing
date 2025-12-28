const startHeart = document.getElementById("startHeart");
const tree = document.querySelector(".tree");
const heartTree = document.getElementById("heartTree");
const textEl = document.getElementById("typedText");

const message =
`8th August,
The Day💞
When a Person❣
Just like a Moon😻
Was born💝
Yea,
It's You Sweet Heart💗
Just saying
You're prettiest in the world😸

Happy Birthday 🎉
May God bless you 💫
And give you happiness 💖
I'm always with you
And don't wanna lose you
Enjoy
Whenever you need me just come to me
And I will help you
Thanks for being in my life`;

startHeart.addEventListener("click", () => {
  startHeart.classList.add("drop");

  setTimeout(() => {
    startHeart.style.display = "none";
    tree.classList.add("grow");
    createHeartTree();
    startTyping();
  }, 1400);
});

/* DENSE HEART SHAPE */
function createHeartTree() {
  for (let i = 0; i < 1200; i++) {  // increased number for dense filling
    const t = Math.random() * Math.PI * 2;
    const r = 16 * Math.sqrt(Math.random());

    const x = r * Math.sin(t) ** 3;
    const y =
      -(13 * Math.cos(t) -
        5 * Math.cos(2 * t) -
        2 * Math.cos(3 * t) -
        Math.cos(4 * t));

    const h = document.createElement("div");
    h.className = "small-heart";
    h.innerText = "❤";
    h.style.color = randomColor();
    h.style.left = 170 + x * 12 + random(-6, 6) + "px";
    h.style.top = 140 + y * 12 + random(-6, 6) + "px";
    h.style.animationDelay = i * 0.002 + "s";  // faster pop
    heartTree.appendChild(h);
  }
}

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function randomColor() {
  const colors = ["#ff4d6d","#ff758f","#ffb703","#ffd166","#ff006e"];
  return colors[Math.floor(Math.random() * colors.length)];
}

/* TYPING EFFECT */
function startTyping() {
  let i = 0;
  const interval = setInterval(() => {
    textEl.textContent += message[i];
    i++;
    if (i >= message.length) clearInterval(interval);
  }, 40);
}
