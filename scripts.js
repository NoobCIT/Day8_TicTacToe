let container = document.querySelector('.container');
let marker = true; //true = X false = O
let result = document.getElementById('result');
let condition = false;
let isEmpty = true;

container.addEventListener('click', makeMove);

function makeMove() {
  let square = event.target;
  if (marker) {
    square.innerHTML = 'X';
    marker = false;
  } else {
    square.innerHTML = 'O';
    marker = true;
  }
  gameOver();
}

//0 1 2
//3 4 5
//6 7 8

function gameOver() {
  checkHorizontalX();
  checkHorizontalO();
  checkVerticalX();
  checkVerticalO();
  checkDiagonalX();
  checkDiagonalO();
  checkTie();
  if (condition == false && isEmpty == false) {
    result.innerHTML = 'Tie Game!';
  }
}

//Win Conditions

function checkHorizontalX() {
  let squares = container.children;
  if (squares[0].innerHTML == 'X' && squares[1].innerHTML == 'X' && squares[2].innerHTML == 'X') {
    result.innerHTML = 'Player X won!';
    condition = true;
  } else if (squares[3].innerHTML == 'X' && squares[4].innerHTML == 'X' && squares[5].innerHTML == 'X') {
    result.innerHTML = 'Player X won!';
    condition = true;
  } else if (squares[6].innerHTML == 'X' && squares[7].innerHTML == 'X' && squares[8].innerHTML == 'X') {
    result.innerHTML = 'Player X won!';
    condition = true;
  }
}

function checkHorizontalO() {
  let squares = container.children;
  if (squares[0].innerHTML == 'O' && squares[1].innerHTML == 'O' && squares[2].innerHTML == 'O') {
    result.innerHTML = 'Player O won!';
    condition = true;
  } else if (squares[3].innerHTML == 'O' && squares[4].innerHTML == 'O' && squares[5].innerHTML == 'O') {
    result.innerHTML = 'Player O won!';
    condition = true;
  } else if (squares[6].innerHTML == 'O' && squares[7].innerHTML == 'O' && squares[8].innerHTML == 'O') {
    result.innerHTML = 'Player O won!';
    condition = true;
  }
}

function checkVerticalX() {
  let squares = container.children;
  if (squares[0].innerHTML == 'X' && squares[3].innerHTML == 'X' && squares[6].innerHTML == 'X') {
    result.innerHTML = 'Player X won!';
    condition = true;
  } else if (squares[1].innerHTML == 'X' && squares[4].innerHTML == 'X' && squares[7].innerHTML == 'X') {
    result.innerHTML = 'Player X won!';
    condition = true;
  } else if (squares[2].innerHTML == 'X' && squares[5].innerHTML == 'X' && squares[8].innerHTML == 'X') {
    result.innerHTML = 'Player X won!';
    condition = true;
  }
}

function checkVerticalO() {
  let squares = container.children;
  if (squares[0].innerHTML == 'O' && squares[3].innerHTML == 'O' && squares[6].innerHTML == 'O') {
    result.innerHTML = 'Player O won!';
    condition = true;
  } else if (squares[1].innerHTML == 'O' && squares[4].innerHTML == 'O' && squares[7].innerHTML == 'O') {
    result.innerHTML = 'Player O won!';
    condition = true;
  } else if (squares[2].innerHTML == 'O' && squares[5].innerHTML == 'O' && squares[8].innerHTML == 'O') {
    result.innerHTML = 'Player O won!';
    condition = true;
  }
}

function checkDiagonalX() {
  let squares = container.children;
  if (squares[0].innerHTML == 'X' && squares[4].innerHTML == 'X' && squares[8].innerHTML == 'X') {
    result.innerHTML = 'Player X won!';
    condition = true;
  } else if (squares[2].innerHTML == 'X' && squares[4].innerHTML == 'X' && squares[6].innerHTML == 'X') {
    result.innerHTML = 'Player X won!';
    condition = true;
  }
}

function checkDiagonalO() {
  let squares = container.children;
  if (squares[0].innerHTML == 'O' && squares[4].innerHTML == 'O' && squares[8].innerHTML == 'O') {
    result.innerHTML = 'Player O won!';
    condition = true;
  } else if (squares[2].innerHTML == 'O' && squares[4].innerHTML == 'O' && squares[6].innerHTML == 'O') {
    result.innerHTML = 'Player O won!';
    condition = true;
  }
}

function checkTie() {
  let squares = container.children;
  for (let square of squares) {
    if (square.innerHTML == '') {
      return;
    }
  }
  isEmpty = false;
}
