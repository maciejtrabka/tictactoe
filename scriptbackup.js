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

var currentPlayerSymbol = 'x'
const gameBoard = (() => {
    var htmlToDisplayBoard = document.getElementById('htmlToDisplayBoard')

    var displayBoard = () => {
        for (let i = 1; i <= 9; i++) {
            var field = document.createElement('div');
            htmlToDisplayBoard.appendChild(field);
            field.setAttribute('id', `field${i}`);
            field.setAttribute('class', 'fields')
            field.addEventListener("click", clickField(i));
            field.textContent = "";
        }
    }

    var announcewinner1 = () => {
        document.getElementById('htmlToDisplayWinner').textContent = `${document.getElementById('player1').textContent} is a WINNER!!!`
    }

    var announcewinner2 = () => {
        document.getElementById('htmlToDisplayWinner').textContent = `${document.getElementById('player2').textContent} is a WINNER!!!`
    }

    function checkForWinner() {
        var field1 = document.getElementById('field1')
        var field2 = document.getElementById('field2')
        var field3 = document.getElementById('field3')
        var field4 = document.getElementById('field4')
        var field5 = document.getElementById('field5')
        var field6 = document.getElementById('field6')
        var field7 = document.getElementById('field7')
        var field8 = document.getElementById('field8')
        var field9 = document.getElementById('field9')

        if (field1.textContent === 'x' && field2.textContent === 'x' && field3.textContent === 'x') { announcewinner1() } else if (field4.textContent === 'x' && field5.textContent === 'x' && field6.textContent === 'x') { announcewinner1() } else if (field7.textContent === 'x' && field8.textContent === 'x' && field9.textContent === 'x') { announcewinner1() } else if (field1.textContent === 'x' && field4.textContent === 'x' && field7.textContent === 'x') { announcewinner1() } else if (field2.textContent === 'x' && field5.textContent === 'x' && field8.textContent === 'x') { announcewinner1() } else if (field3.textContent === 'x' && field6.textContent === 'x' && field9.textContent === 'x') { announcewinner1() } else if (field1.textContent === 'x' && field5.textContent === 'x' && field9.textContent === 'x') { announcewinner1() } else if (field3.textContent === 'x' && field5.textContent === 'x' && field7.textContent === 'x') { announcewinner1() } else if (field1.textContent === 'o' && field2.textContent === 'o' && field3.textContent === 'o') { announcewinner2() } else if (field4.textContent === 'o' && field5.textContent === 'o' && field6.textContent === 'o') { announcewinner2() } else if (field7.textContent === 'o' && field8.textContent === 'o' && field9.textContent === 'o') { announcewinner2() } else if (field1.textContent === 'o' && field4.textContent === 'o' && field7.textContent === 'o') { announcewinner2() } else if (field2.textContent === 'o' && field5.textContent === 'o' && field8.textContent === 'o') { announcewinner2() } else if (field3.textContent === 'o' && field6.textContent === 'o' && field9.textContent === 'o') { announcewinner2() } else if (field1.textContent === 'o' && field5.textContent === 'o' && field9.textContent === 'o') { announcewinner2() } else if (field3.textContent === 'o' && field5.textContent === 'o' && field7.textContent === 'o') { announcewinner2() } else if (field1.textContent !== "" && field2.textContent !== "" && field3.textContent !== "" && field4.textContent !== "" && field5.textContent !== "" && field6.textContent !== "" && field7.textContent !== "" && field8.textContent !== "" && field9.textContent !== "" && document.getElementById('htmlToDisplayWinner').textContent === "") { document.getElementById('htmlToDisplayWinner').textContent = 'Nobody win' }

    }

    var clickField = (i) => {
        return function() {
            var field = document.getElementById(`field${i}`);
            if (field.textContent === "" && currentPlayerSymbol === 'x') {
                field.textContent = currentPlayerSymbol;
                currentPlayerSymbol = 'o'
            } else if (field.textContent === "" && currentPlayerSymbol === 'o') {
                field.textContent = currentPlayerSymbol;
                currentPlayerSymbol = 'x'
            }
            checkForWinner()
        }
    };
    return { displayBoard, currentPlayerSymbol }
})()


const newGame = (() => {
    var showNewGame = () => {
        document.getElementById('field1').textContent = "";
        document.getElementById('field2').textContent = "";
        document.getElementById('field3').textContent = "";
        document.getElementById('field4').textContent = "";
        document.getElementById('field5').textContent = "";
        document.getElementById('field6').textContent = "";
        document.getElementById('field7').textContent = "";
        document.getElementById('field8').textContent = "";
        document.getElementById('field9').textContent = "";
        document.getElementById('htmlToDisplayWinner').textContent = "";
        currentPlayerSymbol = 'x';
    }
    return { showNewGame, currentPlayerSymbol }
})()
document.getElementById('newGameBtn').addEventListener("click", newGame.showNewGame);

gameBoard.displayBoard();