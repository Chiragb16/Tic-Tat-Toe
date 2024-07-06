let click = 0;

        function add(value) {
            let button = document.getElementById(value);
            if (button.textContent === "") {
                button.textContent = (click % 2 === 0) ? "X" : "O";
                click++;
            }
        }

        function ans() {
            let cells = [];
            for (let i = 1; i <= 9; i++) {
                cells.push(document.getElementById(i).textContent);
            }

            let win = false;
            if  (cells[0] === cells[1] && cells[1] === cells[2]) win = true;
            else if (cells[3] === cells[4] && cells[4] === cells[5]) win = true;
            else if (cells[6] === cells[7] && cells[7] === cells[8]) win = true;
            else if (cells[0] === cells[3] && cells[3] === cells[6]) win = true;
            else if (cells[1] === cells[4] && cells[4] === cells[7]) win = true;
            else if (cells[2] === cells[5] && cells[5] === cells[8]) win = true;
            else if (cells[0] === cells[4] && cells[4] === cells[8]) win = true;
            else if (cells[2] === cells[4] && cells[4] === cells[6]) win = true;

            if (win) {
                document.getElementById('res').textContent = (click % 2 === 1) ? "Player 1 wins!" : "Player 2 wins!";
            } else if (click === 9) {
                document.getElementById('res').textContent = "It's a draw!";
            }
        }