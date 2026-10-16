function modalClose(){
const modal1close = document.querySelector("#modal-1-close");
const modal1 = document.querySelector("#modal-1");

modal1close.addEventListener("click", () => {
    modal1.classList.remove("is-active")
})}

modalClose()

    const inqRows = Array.from(document.querySelectorAll(".InqTr"));

function SearchTable(){

    const input = document.querySelector('#TableSearch');
    const filter = input.value.trim().toUpperCase();
    const tbody = document.querySelector("#InqTable tbody");
    const rows = inqRows;

    const rankedRows = rows.map((row, index) => {
        let score = filter === "" ? 1 : 0;

        for (const cell of row.cells) {
            const text = cell.textContent.trim().toUpperCase();

            if(text === filter){
                score = Math.max(score, 3);
            } else if (text.startsWith(filter)) {
                score = Math.max(score, 2);
            } else if (text.includes(filter)) {
                score = Math.max(score,1)
            }
        }

        return {row, score, index};  
    });

    rankedRows.sort((a,b) => b.score - a.score || a.index - b.index);

    for (const item of rankedRows) {
        tbody.appendChild(item.row);
    }

}