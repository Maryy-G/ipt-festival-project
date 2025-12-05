const modal = document.getElementById("modal");
const modalWindow = document.getElementById("modalWindow");
const modalHeader = document.getElementById("modalHeader");
const openBtn = document.getElementById("openModalBtn");
const closeBtn = document.querySelector(".close");
const clickSound = new Audio("multimedia_button_click_029.mp3");
const clickSound1 = new Audio("zapsplat_multimedia_button_click_001_68773.mp3");


openBtn.onclick = () => {
  modal.style.display = "block";
  clickSound.play();
};


closeBtn.onclick = () => {
  modal.style.display = "none";
  clickSound1.play();
};


let isDragging = false;
let offsetX = 0, offsetY = 0;

modalHeader.addEventListener("mousedown", (e) => {
  isDragging = true;
  offsetX = e.clientX - modalWindow.offsetLeft;
  offsetY = e.clientY - modalWindow.offsetTop;
  modalHeader.style.cursor = "grabbing";
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    modalWindow.style.left = (e.clientX - offsetX) + "px";
    modalWindow.style.top = (e.clientY - offsetY) + "px";
  }
});

document.addEventListener("mouseup", () => {
  isDragging = false;
  modalHeader.style.cursor = "grab";
});



