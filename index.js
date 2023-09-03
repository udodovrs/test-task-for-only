const main = document.querySelector(".main");
const arrPoints = document.querySelectorAll(".point");
let isActivePoint = false;

const handleClick = ({ target }) => {
  if (target.classList.contains("point")) {
    target.classList.toggle("pointActive");
    isActivePoint = true;
    return;
  }
  if (target.parentNode.classList.contains("point")) {
    target.parentNode.classList.toggle("pointActive");
    isActivePoint = true;
    return;
  }

  if (isActivePoint) {
      arrPoints.forEach((item) => {
      item.classList.remove("pointActive");
    });
    isActivePoint = false;
  }
};

main.addEventListener("click", handleClick);
