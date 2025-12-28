const startHeart = document.getElementById("startHeart");
const tree = document.querySelector(".tree");
const heartTree = document.getElementById("heartTree");
const textEl = document.getElementById("typedText");
const nextBtn = document.getElementById("nextBtn");

const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const textEl2 = document.getElementById("typedText2");

const message1 = `8th August,
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

const message2 = `I tell myself I’ll stop loving you when I see you truly happy with someone else. But honestly, I don’t think I ever will. Because loving you was never a choice I made — it was a feeling that happened on its own. And feelings like that don’t disappear; they just become quiet.

If one day I see you with someone else, I’ll act okay. I’ll smile and pretend I’ve moved on. But inside, a part of me will still hurt, thinking, “That could have been me if things were different.” I hate that I still love someone who chose a life where I’m no longer part of it.

The hardest part is knowing there’s no chance anymore. I know you won’t come back. Still, late at night, a small part of me waits, hopes, and wonders — even though I know nothing will change. It may sound foolish, but that’s what loving you did to me.

So even if you fall in love with someone else, I’ll stay silent. I won’t expect anything or ask for anything. I’ll just love you quietly, from a distance, in the only way I can now.`;

startHeart.addEventListener("click", () => {
  startHeart.classList.add("drop");

  setTimeout(() => {
    startHeart.style.display = "none";
    tree.classList.add("grow");
    createHeartTree();
    typeMessage(message1, textEl, () => {
      nextBtn.style.display = "block";
    });
  }, 1400);
});

nextBtn.addEventListener("click", () => {
  screen1.classList.add("hidden");
  screen2.classList.remove("hidden");
  typeMessage(message2, textEl2);
});

function typeMessage(msg, el, done) {
  let i = 0;
  const interval = setInterval(() => {
    el.textContent += msg[i];
    i++;
    if (i >= msg.length) {
      clearInterval(interval);
      if (done) done();
    }
  }, 35);
}

/* HEART TREE */
function createHeartTree() {
  for (let i = 0; i < 1200; i++) {
    const t = Math.random() * Math.PI * 2;
    const r = 16 * Math.sqrt(Math.random());
    const x = r * Math.sin(t) ** 3;
    const y = -(13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t));

    const h = document.createElement("div");
    h.className = "small-heart";
    h.innerText = "❤";
    h.style.color = randomColor();
    h.style.left = 170 + x * 12 + "px";
    h.style.top = 140 + y * 12 + "px";
    h.style.animationDelay = i * 0.002 + "s";
    heartTree.appendChild(h);
  }
}

function randomColor() {
  const colors = ["#ff4d6d","#ff758f","#ffb703","#ffd166","#ff006e"];
  return colors[Math.floor(Math.random() * colors.length)];
}
