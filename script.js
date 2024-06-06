let area = document.querySelector('.area');

for (let i = 1; i <= 9; i++) {
    area.innerHTML += `<div class="cell" pos="${i}"></div>`;
}

let cells = document.querySelectorAll('.cell');

let player = "X";
let data = { "X": [], "O": [] };

const winPositions = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];

function checkWin(player, positions) {
    return winPositions.some(winPos => winPos.every(pos => positions.includes(pos)));
}

cells.forEach((cell) => {
    cell.addEventListener('click', () => {
        if (cell.innerHTML === "") {
            cell.innerHTML = player;
            data[player].push(parseInt(cell.getAttribute('pos')));
            if (checkWin(player, data[player])) {
                setTimeout(() => {
                    alert(player + " wins!");
                    resetGame();
                }, 100);
            } else if (data["X"].length + data["O"].length === 9) {
                setTimeout(() => {
                    alert("It's a draw!");
                    resetGame();
                }, 100);
            } else {
                player = player === "X" ? "O" : "X";
            }
        }
    });
});

function resetGame() {
    cells.forEach(cell => cell.innerHTML = "");
    data = { "X": [], "O": [] };
    player = "X";
}
