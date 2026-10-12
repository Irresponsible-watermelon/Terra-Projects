function updateCounter() {
    const button = document.querySelector("#button");
    const clickCount = document.getElementById("clickCount");

    let count = 0;
    button.addEventListener("click", () => {
        count++;
        clickCount.textContent = count;
    });
}
updateCounter();