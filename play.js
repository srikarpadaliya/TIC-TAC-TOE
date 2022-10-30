
console.log("tic tac toe game ⭕");

let current = "⭕";
let count = 0;
let statuss = "none";
let game = 1;

//  draw or win
const possibility_all = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function verify() {
    let box = document.getElementsByClassName('text');
    possibility_all.forEach((element) => {

        if (box[element[0]].innerText === box[element[1]].innerText && box[element[1]].innerText === box[element[2]].innerText && box[element[0]].innerText !== "" && game) {
            statuss = "WIN";
        }

        else if (count === 9 && game) {
            statuss = "Draw";
        }
    })
}

// switch the users

function turn() {
    if (current === "⭕")
        current = "❌";

    else
        current = "⭕";
}

// click and change turn

let changes = document.getElementsByClassName('box');

// convert to array and traverse

Array.from(changes).forEach((element) => {

    let text = element.querySelector('.text');

    element.addEventListener('click', (elem) => {

        if (text.innerText === '') {
            text.innerText = current;


            count++;
            // verify if there is any winning possibility
            verify();

            if (statuss === "WIN" && game) {
                let span = document.getElementById('span');
                span.innerText = `${current} WINS`;
                game = 0;
            }

            else if (statuss === "Draw") {
                let span = document.getElementById('span');
                span.innerText = "DRAW";
            }
            turn();

            document.getElementById('change').innerText = `CURRENTLY PLAYING - ${current}`;

        }
        else {

            alert("ALREADY FILLED !!");

        }
    })
})

let restart = document.getElementById('reset');

restart.addEventListener('click', () => {

    let all = document.querySelectorAll('.text');

    Array.from(all).forEach((elem) => {
        elem.innerText = "";
    })

    statuss = "none";
    count = 0;
    current = "⭕";
    document.getElementById('change').innerText = `CURRENTLY PLAYING - ${current}`;
    document.getElementById('span').innerText = "";
    game = 1;
})