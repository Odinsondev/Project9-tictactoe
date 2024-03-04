const gameboard = {
  boardState: [],
  init: function() {
    this.addBoardToArray();
    this.bindEvents();
    this.render();
    this.test();
  },
  addBoardToArray: function() {
    for (let i = 0; i<9; i++) {
      this.boardState[i] = document.getElementById(`cell${i}`).firstElementChild.textContent;
    } 
  },
  bindEvents: function() {
    console.log("bindEvents")
  },
  render: function() {
    console.log("render")
  },
  test: function() {
    console.log(this.boardState);
  }
}
gameboard.init();
/* console.log(gameboard.cacheDom());

const test2 = document.getElementById('cell1');
test2.textContent = "f";
 */



const player1 = {

}

const player2 = {
  
}