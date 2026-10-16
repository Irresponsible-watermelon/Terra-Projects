function modalClose(){
const modal1close = document.querySelector("#modal-1-close");
const modal1 = document.querySelector("#modal-1");

modal1close.addEventListener("click", () => {
    modal1.classList.remove("is-active")
})}

modalClose()

function SearchTable(){

    const input = document.querySelector('#TableSearch');
    const filter = input.value.toUpperCase();
    const rows = document.querySelectorAll('.InqTr');

    for (const row of rows) {
        const rowText = row.textContent.toUpperCase();
        row.style.display = rowText.includes(filter) ? "" : "none";
    }
}