const current = document.querySelector("#selected");
const thumbs = document.querySelectorAll(".thumbs img");
const opacity = 0.7;

thumbs[0].style.opacity = opacity;
thumbs.forEach((img) => img.addEventListener("click", imgActivate));
function imgActivate(e) {
  thumbs.forEach((img) => (img.style.opacity = 1));
  current.src = e.target.src;
  current.classList.add("fade-in");
  setTimeout(() => current.classList.remove("fade-in"), 500);
  e.target.style.opacity = opacity;
}

current.addEventListener("click", function () {
  for (let i = 0; i < thumbs.length; i++) {
    if (thumbs[i].style.opacity !== "1") {
      let elementId = i + 1;

      if (elementId >= thumbs.length) {
        elementId = 0;
      }

      thumbs[elementId].click();
      break;
    }
  }
});
