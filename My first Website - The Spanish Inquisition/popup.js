function PopupClose() {
    const popupButton = document.querySelector("#popup-button");
    const greyout = document.querySelector(".greyout");
    const popupBox = document.querySelector(".popup-box");

    popupButton.addEventListener("click", () => {
        greyout.remove();
        popupBox.remove();
    });
}
PopupClose();