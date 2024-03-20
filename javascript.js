
//Board module version 2 - the game board state is updated to array by players
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
    name: "",
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
    updateBoard: function() {
      if (playerOne.nextPlayer === "One") {
        board.gameBoard.render();
        board.gameBoard.consoleLog();
        winner.checkWinner();
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
    name: "",
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
    updateBoard: function() {
      if (playerTwo.nextPlayer === "Two") {
        board.gameBoard.render();
        board.gameBoard.consoleLog();
        winner.checkWinner();
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
            turnDisplay.render();
          } else if (one.playerOne.nextPlayer === "Two" && two.playerTwo.nextPlayer === "Two") {
            one.playerOne.nextPlayer = "One";
            two.playerTwo.nextPlayer = "One";
            console.log("Next move: " + one.playerOne.nextPlayer);
            turnDisplay.render();
          } else {}
        }
      }
    }
  }
  playOrder.init();

})();

//////////////////////////////

const winner = (function() {

  function init() {
  }

  function checkWinner() {
    if (                                          //horizontal
      board.gameBoard.boardState[0] === "x" &&
      board.gameBoard.boardState[1] === "x" &&
      board.gameBoard.boardState[2] === "x"
      ) {
      console.log("Winner is X");
    } else if (
      board.gameBoard.boardState[3] === "x" &&
      board.gameBoard.boardState[4] === "x" &&
      board.gameBoard.boardState[5] === "x"
      ) {
      console.log("Winner is X");
    } else if (
      board.gameBoard.boardState[6] === "x" &&
      board.gameBoard.boardState[7] === "x" &&
      board.gameBoard.boardState[8] === "x"
      ) {
      console.log("Winner is X");
    } else if (                                  //vertical
      board.gameBoard.boardState[0] === "x" &&
      board.gameBoard.boardState[3] === "x" &&
      board.gameBoard.boardState[6] === "x"
      ) {
      console.log("Winner is X");
    } else if (
      board.gameBoard.boardState[1] === "x" &&
      board.gameBoard.boardState[4] === "x" &&
      board.gameBoard.boardState[7] === "x"
      ) {
      console.log("Winner is X");
    } else if (
      board.gameBoard.boardState[2] === "x" &&
      board.gameBoard.boardState[5] === "x" &&
      board.gameBoard.boardState[8] === "x"
      ) {
        console.log("Winner is X");
    } else if (                                  //diagonal
      board.gameBoard.boardState[0] === "x" &&
      board.gameBoard.boardState[4] === "x" &&
      board.gameBoard.boardState[8] === "x"
      ) {
      console.log("Winner is X");
    } else if (
      board.gameBoard.boardState[2] === "x" &&
      board.gameBoard.boardState[4] === "x" &&
      board.gameBoard.boardState[6] === "x"
      ) {
      console.log("Winner is X");
    } else if (                                  //horizontal
      board.gameBoard.boardState[0] === "o" &&
      board.gameBoard.boardState[1] === "o" &&
      board.gameBoard.boardState[2] === "o"
      ) {
      console.log("Winner is O");
    } else if (
      board.gameBoard.boardState[3] === "o" &&
      board.gameBoard.boardState[4] === "o" &&
      board.gameBoard.boardState[5] === "o"
      ) {
      console.log("Winner is O");
    } else if (
      board.gameBoard.boardState[6] === "o" &&
      board.gameBoard.boardState[7] === "o" &&
      board.gameBoard.boardState[8] === "o"
      ) {
      console.log("Winner is O");
    } else if (                                  //vertical
      board.gameBoard.boardState[0] === "o" &&
      board.gameBoard.boardState[3] === "o" &&
      board.gameBoard.boardState[6] === "o"
      ) {
      console.log("Winner is O");
    } else if (
      board.gameBoard.boardState[1] === "o" &&
      board.gameBoard.boardState[4] === "o" &&
      board.gameBoard.boardState[7] === "o"
      ) {
      console.log("Winner is O");
    } else if (
      board.gameBoard.boardState[2] === "o" &&
      board.gameBoard.boardState[5] === "o" &&
      board.gameBoard.boardState[8] === "o"
      ) {
      console.log("Winner is O");
    } else if (                                  //diagonal
      board.gameBoard.boardState[0] === "o" &&
      board.gameBoard.boardState[4] === "o" &&
      board.gameBoard.boardState[8] === "o"
      ) {
      console.log("Winner is O");
    } else if (
      board.gameBoard.boardState[2] === "o" &&
      board.gameBoard.boardState[4] === "o" &&
      board.gameBoard.boardState[6] === "o"
      ) {
      console.log("Winner is O");
    } else {}
  }

  init();
  return {checkWinner}
})();


//IIFE module for modal to enter player names

const modal = (function() {
  function init() {
    openModal();
  }

  //cache DOM
  const modal = document.getElementById('modal');
  const startButton = document.getElementById('start');
  const name1 = document.getElementById('player-one');
  const name2 = document.getElementById('player-two');

  //bind events
  startButton.addEventListener('click', startGame);

  function openModal() {
    modal.showModal();
  }

  function startGame() {
    if (name1.value === "") {
      one.playerOne.name = "Player One";
    } else {
      one.playerOne.name = name1.value;
    }

    if (name2.value === "") {
      two.playerTwo.name = "Player Two";
    } else {
      two.playerTwo.name = name2.value;
    }

    modal.close();
    console.log(one.playerOne.name);
    console.log(two.playerTwo.name);
    turnDisplay.render();
  }

  init();
})();


//IIFE module to display player names and next turn

const turnDisplay = (function() {

  //cache DOM
  const players = document.getElementById('player-names');
  const nextPlayer = document.getElementById('player-turn');

  function render() {
    players.textContent = one.playerOne.name + " vs. " + two.playerTwo.name;

    if (one.playerOne.nextPlayer === "One") {
      nextPlayer.textContent = "Next move: " + one.playerOne.name;
    } else if (one.playerOne.nextPlayer === "Two") {
      nextPlayer.textContent = "Next move: " + two.playerTwo.name;
    } else {}
  }

  return {render}
})();


//////////////////////////////

//can i return only one function from an object???
