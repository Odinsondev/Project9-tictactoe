
//board module version 1 - the game board state is updated to array when
//textContent is updated by players.
//Array not actually necessary for game to work.

/* const board = (function() {   //IIFE

  const gameBoard = {   //object literal pattern - as per assignment
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

  return {gameBoard}   //returning the whole object so nothing private
})();

//player version 1 - player changes cell textContent on 'click' event
//No array actually needed

const one = (function() {

  const playerOne = {   //object literal pattern
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
        board.gameBoard.addBoardToArray();
        board.gameBoard.consoleLog();
      } else {}
    }
  }
  playerOne.init();

  return {playerOne}   //returning the whole object so nothing private
})();

//player version 1 - player changes cell textContent on 'click' event
//No array actually needed

const two = (function() {

  const playerTwo = {   //object literal pattern
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
        board.gameBoard.addBoardToArray();
        board.gameBoard.consoleLog();
      } else {}
    }
  }
  playerTwo.init();

return {playerTwo}   //returning the whole object so nothing private
})(); */

//////////////////////////////

//board module version 2 - the game board state is updated to array by players
//and the board is rendered.
//This version is in line with the project instructions.

const board = (function() {   //IIFE

  const gameBoard = {
    boardState: [],
    init: function() {
      this.addEmptyBoardToArray();
      this.consoleLog();
      this.render();
    },
    addEmptyBoardToArray: function() {
      for (let i = 0; i < 9; i++) {
        this.boardState[i] = "";
      } 
    },
    consoleLog: function() {
      console.log(this.boardState);
    },
    render: function() {
      for (let i = 0; i < 9; i++) {
        let cellContent = document.getElementById(`cell${i}`);
        cellContent.firstElementChild.textContent = this.boardState[i];
      }
    }
  }
  gameBoard.init();

  return {gameBoard}   //returning the whole object so nothing private
})();

/////////////////////

const one = (function() {

  const playerOne = {   //object literal pattern
    init: function() {
      this.addXToArray();
    },
    nextPlayer: "",
    addXToArray: function() {
      for (let i = 0; i < 9; i++) {
        const cell = document.getElementById(`cell${i}`);
        cell.addEventListener('click', addX);
        cell.addEventListener('click', this.updateBoard);

        function addX() {
          if (cell.firstElementChild.textContent === "" && playerOne.nextPlayer === "One") {
            board.gameBoard.boardState[i] = "x";
          } else {}
        }
      }
    },
    updateBoard: function() {   //don't need to update the array for game to work
      if (playerOne.nextPlayer === "One") {
        board.gameBoard.render();
        board.gameBoard.consoleLog();
      } else {}
    }
  }
  playerOne.init();

  return {playerOne}   //returning the whole object so nothing private
})();

//////////////////////////////

const two = (function() {

  const playerTwo = {   //object literal pattern
    init: function() {
      this.addOToArray();
    },
    nextPlayer: "",
    addOToArray: function() {
      for (let i = 0; i < 9; i++) {

        const cell = document.getElementById(`cell${i}`);
        cell.addEventListener('click', addO);
        cell.addEventListener('click', this.updateBoard);

        function addO() {
          if (cell.firstElementChild.textContent === "" && playerTwo.nextPlayer === "Two") {
            board.gameBoard.boardState[i] = "o";
          } else {}
        }
      }
    },
    updateBoard: function() {   //don't need to update the array for game to work
      if (playerTwo.nextPlayer === "Two") {
        board.gameBoard.render();
        board.gameBoard.consoleLog();
      } else {}
    }
  }
  playerTwo.init();

return {playerTwo}   //returning the whole object so nothing private
})();

//////////////////////////////

const order = (function() {

  const playOrder = {   //object literal pattern - private as I have not returned it
    init: function() {
      this.firstPlayer();
      this.changeCondition();
    },
    firstPlayer: function() {
      if (one.playerOne.nextPlayer === "" && two.playerTwo.nextPlayer === "") {
        one.playerOne.nextPlayer = "One";
        two.playerTwo.nextPlayer = "One";
        console.log("First move: " + one.playerOne.nextPlayer);
      } else {}
    },
    changeCondition: function() {
      for (let i = 0; i < 9; i++) {
        const cell = document.getElementById(`cell${i}`);
        cell.addEventListener('click', alternate);

        function alternate() {
          if (one.playerOne.nextPlayer === "One" && two.playerTwo.nextPlayer === "One") {
            one.playerOne.nextPlayer = "Two";
            two.playerTwo.nextPlayer = "Two";
            console.log("Next move: " + one.playerOne.nextPlayer);
          } else if (one.playerOne.nextPlayer === "Two" && two.playerTwo.nextPlayer === "Two") {
            one.playerOne.nextPlayer = "One";
            two.playerTwo.nextPlayer = "One";
            console.log("Next move: " + one.playerOne.nextPlayer);
          } else {}
        }
      }
    }
  }
  playOrder.init();

})();

//////////////////////////////


//can i return only one function from an object???

//make separate js file for version 1 of game logic