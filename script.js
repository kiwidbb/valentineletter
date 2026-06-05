function nextPage() {
    window.location.href = "yes.html";
}

const button = document.getElementById("randomButton");
button.addEventListener("click",() => {
    const newX = Math.floor(
        Math.random() * (window.innerWidth - button.offsetWidth),
    );
    const newY = Math.floor(
        Math.random() * (window.innerHeight - button.offsetHeight),
    );
    button.style.left = newX + "px";
    button.style.top = newY + "px";
});
