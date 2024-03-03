const gameboard = {
  board: [],
  init: function() {
    this.cacheDom();
    this.bindEvents();
    this.render();
    this.test();
  },
  cacheDom: function() {   ///can do without for loop but curious if it will work
    let testCell
    for (let i = 0; i<10; i++) {
      testCell = document.getElementById(`cell${i}`);
    }
    return testCell;   ///difficult to return this variable with 9 values
  },
  bindEvents: function() {
    console.log("bindEvents")
  },
  render: function() {
    console.log("render")
  },
  test: function() {
    console.log(this.cacheDom());
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