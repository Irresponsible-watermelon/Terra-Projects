function modalClose(){
const modal1close = document.querySelector("#modal-1-close");
const modal1 = document.querySelector("#modal-1");

if (modal1close && modal1){
modal1close.addEventListener("click", () => {
    modal1.classList.remove("is-active")
})}}

modalClose()

const inqRows = Array.from(document.querySelectorAll(".InqTr"));

function SearchTable(){

    const input = document.querySelector('#TableSearch');
    const tbody = document.querySelector("#InqTable tbody");

    if(!input || !tbody) {
        return;
    }

    const filter = input.value.trim().toUpperCase();
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

const quizForm = document.querySelector("#Quiz form");
    
    if (quizForm){
        quizForm.addEventListener("submit", InQuiz);

const correctAnswers = {
        Q1: "1B", Q2: "2A", Q3: "3B", Q4: "4C", Q5: "5C"
};
function InQuiz(event){
    event.preventDefault();

    quizForm.querySelectorAll(".is-correct, .is-incorrect").forEach((label) => {
        label.classList.remove(".is-correct", ".is-incorrrect");
    })

    const answers = {};

    for (const question of Object.keys(correctAnswers)) {
        const selected = document.querySelector(
            `input[name="${question}"]:checked`
        );
        const selectedAnswer = selected ? selected.value : "";

        const isCorrect = selectedAnswer === correctAnswers[question];

        const correctOption = quizForm.querySelector(`input[name="${question}"][value="${correctAnswers[question]}"]`)

    const ansLabel = correctOption ? correctOption.closest("label") : null;

    if (ansLabel) {
        ansLabel.classList.add("is-correct");

    }


    const atmLabel = selected ? selected.closest("label") : null;

        if (!isCorrect && atmLabel) {
            atmLabel.classList.add("is-incorrect")           
        }
        
    }

    console.log(answers);

    }}