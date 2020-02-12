function toggleSrc() {
  let image = document.getElementById("image");
  const hiddenCan = "assets/images/Hidden_Can.png";
  const visibleCan = "assets/images/Visible_Can.png";
  const imageBtn = document.getElementById("imageBtn");
  if (image.getAttribute("src") === hiddenCan) {
    image.setAttribute("src", visibleCan);
    imageBtn.style.backgroundColor = "#a96500";
    imageBtn.style.color = "#fff";
    imageBtn.style.border = "1px solid #311c00";
    imageBtn.style.boxShadow = "1px 1px 1px rgba(0,0,0,0.7)";
  } else {
    image.setAttribute("src", hiddenCan);
    imageBtn.style.backgroundColor = "";
    imageBtn.style.color = "#062f87";
    imageBtn.style.borderColor =
      "rgb(216, 216, 216) rgb(209, 209, 209) rgb(186, 186, 186)";
    imageBtn.style.boxShadow = "none";
  }
}

const btnToggle = document.getElementById("imageBtn");

btnToggle.addEventListener("click", toggleSrc);
