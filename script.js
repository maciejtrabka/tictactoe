const players = (() => {
    var changeName = () => {
        var playerNick = prompt("Please enter your nick", "Player");
        return document.getElementById('player1').textContent = playerNick;
    }

    var changeName2 = () => {
        var playerNick = prompt("Please enter your nick", "Player");
        return document.getElementById('player2').textContent = playerNick;
    }
    return { changeName, changeName2 }
})()
player1.addEventListener("click", players.changeName);
player2.addEventListener("click", players.changeName2);

const displayController = (() => {
    var clickField = (i) => {
        return function() {
            var field = document.getElementById(`field${i}`)
            if (gameBoard.boardArray[i] === '' && gameBoard.currentPlayerSymbol === 'x') {
                field.textContent = gameBoard.currentPlayerSymbol;
                gameBoard.boardArray.splice(i, 1, 'x')
                gameBoard.currentPlayerSymbol = 'o'
            } else if (gameBoard.boardArray[i] === '' && gameBoard.currentPlayerSymbol === 'o') {
                field.textContent = gameBoard.currentPlayerSymbol;
                gameBoard.boardArray.splice(i, 1, 'o')
                gameBoard.currentPlayerSymbol = 'x'
            }
            checkForWinner()
            checkForTie()
        }
    }

    var checkForWinner = () => {
        var arr = gameBoard.boardArray

        var winCombination = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        var check = (a, b, c) => {
            if (arr[a] === 'x' && arr[b] === 'x' && arr[c] === 'x') {
                announcewinner1()
            } else if (arr[a] === 'o' && arr[b] === 'o' && arr[c] === 'o') {
                announcewinner2()
            }
        }

        for (let i = 0; i < winCombination.length; i++) {
            check(...winCombination[i])
        }
    }

    var checkForTie = () => {
        var arr = gameBoard.boardArray
        var emptyFields = false;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === "") { emptyFields = true }
        }
        if (emptyFields === false) { announceTie() }
    }

    var htmlToDisplayWinner = document.getElementById('htmlToDisplayWinner')
    var announcewinner1 = () => {
        if (htmlToDisplayWinner.textContent === "") {
            htmlToDisplayWinner.textContent = `${document.getElementById('player1').textContent} is a WINNER!!!`
        }
    }

    var announcewinner2 = () => {
        if (htmlToDisplayWinner.textContent === "") {
            htmlToDisplayWinner.textContent = `${document.getElementById('player2').textContent} is a WINNER!!!`
        }
    }

    var announceTie = () => {
        if (htmlToDisplayWinner.textContent === "") {
            htmlToDisplayWinner.textContent = `Nobody win. It's a tie.`
        }
    }

    return { clickField }
})()


const gameBoard = (() => {
    var htmlToDisplayBoard = document.getElementById('htmlToDisplayBoard')
    var boardArray = []
    var currentPlayerSymbol = 'x'
    var displayBoard = () => {
        for (let i = 0; i < 9; i++) {

            boardArray.push('')
            var field = document.createElement('div');
            htmlToDisplayBoard.appendChild(field);
            field.setAttribute('id', `field${i}`);
            field.setAttribute('class', 'fields')
            field.addEventListener("click", displayController.clickField(i));

        }
    }
    return { displayBoard, boardArray, currentPlayerSymbol }
})()
gameBoard.displayBoard()


const newGame = (() => {
    var showNewGame = () => {
        document.getElementById('field0').textContent = "";
        document.getElementById('field1').textContent = "";
        document.getElementById('field2').textContent = "";
        document.getElementById('field3').textContent = "";
        document.getElementById('field4').textContent = "";
        document.getElementById('field5').textContent = "";
        document.getElementById('field6').textContent = "";
        document.getElementById('field7').textContent = "";
        document.getElementById('field8').textContent = "";
        document.getElementById('htmlToDisplayWinner').textContent = "";
        gameBoard.currentPlayerSymbol = 'x';
        gameBoard.boardArray.splice(0, 9)
        for (let i = 0; i < 9; i++) {
            gameBoard.boardArray.push('')
        }
    }
    return { showNewGame }
})()
document.getElementById('newGameBtn').addEventListener("click", newGame.showNewGame);