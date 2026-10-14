function modalClose(){
const modal1close = document.querySelector("#modal-1-close");
const modal1 = document.querySelector("#modal-1");

modal1close.addEventListener("click", () => {
    modal1.classList.remove("is-active")
})}

modalClose()