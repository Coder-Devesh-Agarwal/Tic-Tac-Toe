let i;
let box;
let any = true;
let num;
let boxi = 'part1/';
let ran;
let pro = 'question-mark.jpg';
//   let n = Math.trunc(Math.random() * 9) + 1;
//   document.querySelector('.body').style.backgroundImage = `url('ph${n}.jpg')`;
function getid(e) {
  e = e || window.event;
  e = e.target || e.srcElement;
  box = String(e.id);
  num = Number(box);
  console.log(box);
  random();
  winner();
}
function getiid(v) {
  v = v || window.event;
  v = v.target || v.srcElement;
  boxi = String(v.id);
  if (boxi === 'part1/') {
    document.getElementById('1').innerHTML = 'Stone';
    document.getElementById('2').innerHTML = 'Paper';
    document.getElementById('3').innerHTML = 'Scissors';
    document.getElementById('11').innerHTML = 'Stone';
    document.getElementById('12').innerHTML = 'Paper';
    document.getElementById('13').innerHTML = 'Scissors';
  } else if (boxi === 'part2/') {
    document.getElementById('1').innerHTML = 'Chewgum';
    document.getElementById('2').innerHTML = 'Barbie';
    document.getElementById('3').innerHTML = 'Gun';
    document.getElementById('11').innerHTML = 'Chewgum';
    document.getElementById('12').innerHTML = 'Barbie';
    document.getElementById('13').innerHTML = 'Gun';
  } else {
    document.getElementById('1').innerHTML = 'Water';
    document.getElementById('2').innerHTML = 'Snake';
    document.getElementById('3').innerHTML = 'Gun';
    document.getElementById('11').innerHTML = 'Water';
    document.getElementById('12').innerHTML = 'Snake';
    document.getElementById('13').innerHTML = 'Gun';
  }
  document.getElementById('done').click();
}
function random() {
  i = Math.trunc(Math.random() * 3) + 1;
  ran = boxi + `${i}.jpg`;
}
function winner() {
  document.getElementById('computer').src = ran;
  document.getElementById('player').src = boxi + `${num}.jpg`;
  if (num == i + 1 || num == i - 2) declarewinner(1);
  else if (num == i) declarewinner(-1);
  else declarewinner(0);
}
function gameRefresh() {
  if (any == false) {
    document.querySelector('.modal-body').innerHTML = `First Play Then Come🎴`;
    document.getElementById('computer').src = `question-mark.jpg`;
    document.getElementById('player').src = `question-mark.jpg`;

    let n = Math.trunc(Math.random() * 9) + 1;
    document.querySelector('.body').style.backgroundImage = `url('ph${n}.jpg')`;
    any = true;
  }
}
function declarewinner(win) {
  if (win == 1)
    document.querySelector('.modal-body').innerHTML = `Player Wins🎉`;
  else if (win == 0)
    document.querySelector('.modal-body').innerHTML = `Oops! Computer Wins🤖`;
  else document.querySelector('.modal-body').innerHTML = `There is a draw🎇`;

  document.getElementById('helo').click();
  document.getElementById('done').addEventListener('click', () => {
    any = false;
    gameRefresh();
  });
}
