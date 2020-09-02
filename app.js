//Countdown
function countDown(num) {
  let timer = setTimeout(function count() {
    if (num > 0) {
      console.log(num);
      num--;
      timer = setTimeout(count, 1000);
    } else {
      console.log("DONE!");
    }
  }, 1000);
}
countDown(4);
// ------------

//Random Game
let i = 0;
function randomGame() {
  let num = Math.random();
  if (num < 0.75) {
    i++;
    console.log(`The random number is: ${num} & i is: ${i}`);
    setTimeout(randomGame, 1000);
  } else {
    console.log(`you went over .75 and i is: ${i}`);
  }
}

randomGame();
// -----------
