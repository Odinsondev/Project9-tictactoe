
//Board module version 2 - the game board state is updated to array by players
//The board is then rendered.
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
          } else if (one.playerOne.nextPlayer === "None" && two.playerTwo.nextPlayer === "None") {
            console.log("Game over");
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
      winnerDisplayModal.setWinnerX();
      one.playerOne.nextPlayer = "None";
      two.playerTwo.nextPlayer = "None";
    } else if (
      board.gameBoard.boardState[3] === "x" &&
      board.gameBoard.boardState[4] === "x" &&
      board.gameBoard.boardState[5] === "x"
      ) {
      winnerDisplayModal.setWinnerX();
      one.playerOne.nextPlayer = "None";
      two.playerTwo.nextPlayer = "None";
    } else if (
      board.gameBoard.boardState[6] === "x" &&
      board.gameBoard.boardState[7] === "x" &&
      board.gameBoard.boardState[8] === "x"
      ) {
      winnerDisplayModal.setWinnerX();
      one.playerOne.nextPlayer = "None";
      two.playerTwo.nextPlayer = "None";
    } else if (                                  //vertical
      board.gameBoard.boardState[0] === "x" &&
      board.gameBoard.boardState[3] === "x" &&
      board.gameBoard.boardState[6] === "x"
      ) {
      winnerDisplayModal.setWinnerX();
      one.playerOne.nextPlayer = "None";
      two.playerTwo.nextPlayer = "None";
    } else if (
      board.gameBoard.boardState[1] === "x" &&
      board.gameBoard.boardState[4] === "x" &&
      board.gameBoard.boardState[7] === "x"
      ) {
      winnerDisplayModal.setWinnerX();
      one.playerOne.nextPlayer = "None";
      two.playerTwo.nextPlayer = "None";
    } else if (
      board.gameBoard.boardState[2] === "x" &&
      board.gameBoard.boardState[5] === "x" &&
      board.gameBoard.boardState[8] === "x"
      ) {
        winnerDisplayModal.setWinnerX();
      one.playerOne.nextPlayer = "None";
      two.playerTwo.nextPlayer = "None";
    } else if (                                  //diagonal
      board.gameBoard.boardState[0] === "x" &&
      board.gameBoard.boardState[4] === "x" &&
      board.gameBoard.boardState[8] === "x"
      ) {
      winnerDisplayModal.setWinnerX();
      one.playerOne.nextPlayer = "None";
      two.playerTwo.nextPlayer = "None";
    } else if (
      board.gameBoard.boardState[2] === "x" &&
      board.gameBoard.boardState[4] === "x" &&
      board.gameBoard.boardState[6] === "x"
      ) {
      winnerDisplayModal.setWinnerX();
      one.playerOne.nextPlayer = "None";
      two.playerTwo.nextPlayer = "None";
    } else if (                                  //horizontal
      board.gameBoard.boardState[0] === "o" &&
      board.gameBoard.boardState[1] === "o" &&
      board.gameBoard.boardState[2] === "o"
      ) {
      winnerDisplayModal.setWinnerO();
      one.playerOne.nextPlayer = "None";
      two.playerTwo.nextPlayer = "None";
    } else if (
      board.gameBoard.boardState[3] === "o" &&
      board.gameBoard.boardState[4] === "o" &&
      board.gameBoard.boardState[5] === "o"
      ) {
      winnerDisplayModal.setWinnerO();
      one.playerOne.nextPlayer = "None";
      two.playerTwo.nextPlayer = "None";
    } else if (
      board.gameBoard.boardState[6] === "o" &&
      board.gameBoard.boardState[7] === "o" &&
      board.gameBoard.boardState[8] === "o"
      ) {
      winnerDisplayModal.setWinnerO();
      one.playerOne.nextPlayer = "None";
      two.playerTwo.nextPlayer = "None";
    } else if (                                  //vertical
      board.gameBoard.boardState[0] === "o" &&
      board.gameBoard.boardState[3] === "o" &&
      board.gameBoard.boardState[6] === "o"
      ) {
      winnerDisplayModal.setWinnerO();
      one.playerOne.nextPlayer = "None";
      two.playerTwo.nextPlayer = "None";
    } else if (
      board.gameBoard.boardState[1] === "o" &&
      board.gameBoard.boardState[4] === "o" &&
      board.gameBoard.boardState[7] === "o"
      ) {
      winnerDisplayModal.setWinnerO();
      one.playerOne.nextPlayer = "None";
      two.playerTwo.nextPlayer = "None";
    } else if (
      board.gameBoard.boardState[2] === "o" &&
      board.gameBoard.boardState[5] === "o" &&
      board.gameBoard.boardState[8] === "o"
      ) {
      winnerDisplayModal.setWinnerO();
      one.playerOne.nextPlayer = "None";
      two.playerTwo.nextPlayer = "None";
    } else if (                                  //diagonal
      board.gameBoard.boardState[0] === "o" &&
      board.gameBoard.boardState[4] === "o" &&
      board.gameBoard.boardState[8] === "o"
      ) {
      winnerDisplayModal.setWinnerO();
      one.playerOne.nextPlayer = "None";
      two.playerTwo.nextPlayer = "None";
    } else if (
      board.gameBoard.boardState[2] === "o" &&
      board.gameBoard.boardState[4] === "o" &&
      board.gameBoard.boardState[6] === "o"
      ) {
      winnerDisplayModal.setWinnerO();
      one.playerOne.nextPlayer = "None";
      two.playerTwo.nextPlayer = "None";
    } else {}
  }

  init();
  return {checkWinner}
})();


//IIFE module for modal to enter player names

const startGameModal = (function() {
  function init() {
    openModal();
  }

  //cache DOM
  const modal = document.getElementById('modal');
  const container3 = document.getElementById('c3');
  const startButton = document.getElementById('start');
  const name1 = document.getElementById('player-one');
  const name2 = document.getElementById('player-two');

  //bind events
  startButton.addEventListener('click', startGame);

  //functions
  function openModal() {
    modal.showModal();
    modal.style.left = (c3.offsetLeft - 5) + "px";
    modal.style.top = (c3.offsetTop - 5) + "px";
    modal.style.width = (c3.offsetWidth - 28.8) + "px";
    modal.style.height = (c3.offsetHeight - 28.8) + "px";
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
    } else if (one.playerOne.nextPlayer === "None") {
      nextPlayer.textContent = "Game over";
    } else {}
  }

  return {render, nextPlayer}
})();


//IIFE module to display the winner and restart the game

const winnerDisplayModal = (function() {

  //cache DOM
  const winnerName = document.getElementById("winner-name");
  const modal2 = document.getElementById('modal2');
  const modal2Container = document.getElementById("modal2-container");
  const restartButton = document.getElementById("restart");

  //bind events
  restartButton.addEventListener('click', restartGame);

  //variables
  let winner = "";

  //functions
  function setWinnerX() {
    winner = one.playerOne.name;
    winnerName.textContent = winner + " has won this round";
    openModal();
  }

  function setWinnerO() {
    winner = two.playerTwo.name;
    winnerName.textContent = winner + " has won this round";
    openModal();
  }

  function openModal() {
    modal2.showModal();
    modal2.style.left = (modal2Container.offsetLeft + 10) + "px";
    modal2.style.top = (modal2Container.offsetTop + 10) + "px";
    modal2.style.width = (modal2Container.offsetWidth - 58.8) + "px";
    modal2.style.height = (modal2Container.offsetHeight - 58.8) + "px";
  }

  function restartGame() {   //currently restarts with same player names
    modal2.close();
    one.playerOne.nextPlayer = "One";
    two.playerTwo.nextPlayer = "One";
    turnDisplay.render();
    board.gameBoard.addEmptyBoardToArray();
    board.gameBoard.render();
    winner = "";
  }

  return {setWinnerX, setWinnerO}
})();

//////////////////////////////

//Add tie message