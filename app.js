const icons = document.querySelectorAll(".header-icons i");
let i = 1;
setInterval(() => {
  i++;
  const icon = document.querySelector(".header-icons i.change");
  icon.classList.remove("change");
  if (i > icons.length) {
    icons[0].classList.add("change");
    i = 1;
  }
  icon.nextElementSibling.classList.add("change");
}, 3000);
console.log("object");
