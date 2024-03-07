
const gameBoard = {   //module as an object i.e. object literal pattern - as per assignment
  boardState: [],
  init: function() {
    this.addBoardToArray();
    this.consoleLog();
  },
  addBoardToArray: function() {   //adds board state to an Array,
    for (let i = 0; i < 9; i++) {   //don't need this function but will keep for future reference
      this.boardState[i] = document.getElementById(`cell${i}`).firstElementChild.textContent;
    } 
  },
  consoleLog: function() {
    console.log(this.boardState);
  }
}
gameBoard.init();

//////////////////////////////

const playerOne = {
  init: function() {
    this.changeCellToX();
  },
  nextPlayer: "",
  changeCellToX: function() {
    for (let i = 0; i < 9; i++) {
      const cell = document.getElementById(`cell${i}`);
      cell.addEventListener('click', addX);
      cell.addEventListener('click', this.updateArray);

      function addX() {
        if (cell.firstElementChild.textContent === "" && playerOne.nextPlayer === "One") {
          cell.firstElementChild.textContent = "x";
        } else {}
      }
    }
  },
  updateArray: function() {   //don't need to update the array for game to work
    if (playerOne.nextPlayer === "One") {
      gameBoard.addBoardToArray();
      gameBoard.consoleLog();
    } else {}
  }
}
playerOne.init();

//////////////////////////////

const playerTwo = {
  init: function() {
    this.changeCellToO();
  },
  nextPlayer: "",
  changeCellToO: function() {
    for (let i = 0; i < 9; i++) {

      const cell = document.getElementById(`cell${i}`);
      cell.addEventListener('click', addO);
      cell.addEventListener('click', this.updateArray);

      function addO() {
        if (cell.firstElementChild.textContent === "" && playerTwo.nextPlayer === "Two") {
          cell.firstElementChild.textContent = "o";
        } else {}
      }
    }
  },
  updateArray: function() {   //don't need to update the array for game to work
    if (playerTwo.nextPlayer === "Two") {
      gameBoard.addBoardToArray();
      gameBoard.consoleLog();
    } else {}
  }
}
playerTwo.init();

//////////////////////////////

const playOrder = {
  init: function() {
    this.firstPlayer();
    this.changeCondition();
  },
  firstPlayer: function() {
    if (playerOne.nextPlayer === "" && playerTwo.nextPlayer === "") {
      playerOne.nextPlayer = "One";
      playerTwo.nextPlayer = "One";
      console.log("First move: " + playerOne.nextPlayer);
    } else {}
  },
  changeCondition: function() {
    for (let i = 0; i < 9; i++) {
      const cell = document.getElementById(`cell${i}`);
      cell.addEventListener('click', alternate);

      function alternate() {
         if (playerOne.nextPlayer === "One" && playerTwo.nextPlayer === "One") {
          playerOne.nextPlayer = "Two";
          playerTwo.nextPlayer = "Two";
          console.log("Next move: " + playerOne.nextPlayer);
        } else if (playerOne.nextPlayer === "Two" && playerTwo.nextPlayer === "Two") {
          playerOne.nextPlayer = "One";
          playerTwo.nextPlayer = "One";
          console.log("Next move: " + playerOne.nextPlayer);
        } else {}
      }
    }
  }
}
playOrder.init();


