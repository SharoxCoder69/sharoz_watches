/* ================= CURSOR SYSTEM ================= */

const cursor = document.getElementById("cursor");
const ring = document.getElementById("ring");

let mx = 0, my = 0;
let rx = 0, ry = 0;

document.addEventListener("mousemove", (e) => {
  mx = e.clientX;
  my = e.clientY;

  cursor.style.left = mx + "px";
  cursor.style.top = my + "px";

  ring.style.left = mx + "px";
  ring.style.top = my + "px";

  // ⭐ STAR TRAIL EFFECT
  const star = document.createElement("div");
  star.style.position = "fixed";
  star.style.width = "4px";
  star.style.height = "4px";
  star.style.background = "cyan";
  star.style.borderRadius = "50%";
  star.style.left = mx + "px";
  star.style.top = my + "px";
  star.style.boxShadow = "0 0 10px cyan";
  document.body.appendChild(star);

  setTimeout(() => star.remove(), 500);
});

/* smooth ring follow */
function animate() {
  rx += (mx - rx) * 0.15;
  ry += (my - ry) * 0.15;

  ring.style.left = rx + "px";
  ring.style.top = ry + "px";

  requestAnimationFrame(animate);
}
animate();

/* ================= CLICK SOUND ================= */

const whoosh = document.getElementById("whoosh");

document.addEventListener("click", () => {
  if (whoosh) {
    whoosh.currentTime = 0;
    whoosh.play().catch(() => {});
  }
});