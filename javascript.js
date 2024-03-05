const gameBoard = {   //module as an object as per assignment
  boardState: [],
  init: function() {
    this.addBoardToArray();
/*     this.bindEvents();
 *//*     this.render();
 */    this.test();
  },
  addBoardToArray: function() {
    for (let i = 0; i < 9; i++) {
      this.boardState[i] = document.getElementById(`cell${i}`).firstElementChild.textContent;
    } 
  },
/*   bindEvents: function() {
    console.log("bindEvents")
  },
  render: function() {
    console.log("render")
  },
 */  test: function() {
    console.log(this.boardState);
  }
}
gameBoard.init();




const playerOne = {
  init: function() {
    this.changeCellToX();
  },
  changeCellToX: function() {
    for (let i = 0; i < 9; i++) {
      const cell = document.getElementById(`cell${i}`);
      cell.addEventListener('click', test3);

      function test3() {
        cell.firstElementChild.textContent = "x";
      }
    }
  },
  variable: document.getElementById('cell1'),  //test
}
playerOne.init();  //test
console.log(playerOne.variable);  //test

gameBoard.addBoardToArray();  //works after using playerOne function
gameBoard.test();  //works




const playerTwo = {
}


//how to store variables in object modules
//why even store gameboard in array if I can just change textcontent