let submitBtn = document.getElementById("submit-btn");
let okBtn = document.getElementById("ok-btn");
let popup = document.getElementById("popup");

submitBtn.onclick = function OpenPopup() {
    popup.classList.add("open-popup");
    this.style.display = "none";
}

okBtn.onclick = function closePopup() {
    popup.classList.remove("open-popup");
    submitBtn.style.display = "block";
}