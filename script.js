let activeuser = 0;
let box;
let num;
let any = false;
let count = 0;
let arr = new Array(9);
function getid(e) {
  e = e || window.event;
  e = e.target || e.srcElement;
  box = String(e.id);
  num = Number(box);
  console.log(box);
  put(activeuser);
}
function swith() {
  if (activeuser == 1) {
    activeuser = 0;
  } else {
    activeuser = 1;
  }
}
function gameRefresh() {
  for (i = 1; i < 10; i++) {
    document.getElementById(`${i}`).innerHTML = '';
    arr[i - 1] = undefined;
    document.querySelector('.modal-body').innerHTML = `First Play Then Come🎴`;
  }
  let n = Math.trunc(Math.random() * 9) + 1;
  document.querySelector('.body').style.backgroundImage = `url('ph${n}.jpg')`;
  activeuser = 0;
}
function declarewinner(win) {
  document.querySelector('.modal-body').innerHTML = `Player ${win + 1} Wins🎉`;
  document.getElementById('helo').click();
  document.getElementById('done').addEventListener('click', () => {
    any = false;
    gameRefresh();
  });
}
function checkdiagnal() {
  if (arr[0] == arr[4] && arr[4] == arr[8] && arr[4] != undefined) {
    declarewinner(arr[0]);
    any = true;
  } else if (arr[2] == arr[4] && arr[4] == arr[6] && arr[4] != undefined) {
    any = true;
    declarewinner(arr[2]);
  }
}
function checkrow() {
  for (i = 0; i < 7; i = i + 3) {
    if (
      arr[0 + i] == arr[1 + i] &&
      arr[1 + i] == arr[2 + i] &&
      arr[1 + i] != undefined
    ) {
      any = true;
      declarewinner(arr[i]);
    }
  }
}
function checkcol() {
  for (i = 0; i < 3; i++) {
    if (
      arr[i] == arr[i + 3] &&
      arr[i + 3] == arr[i + 6] &&
      arr[i + 3] != undefined
    ) {
      any = true;
      declarewinner(arr[i]);
    }
  }
}
function checkdraw(ok) {
  if (!ok) {
    let coun = 0;
    for (i = 0; i < 9; i++) {
      if (arr[i] != undefined) coun++;
    }
    if (coun == 9) {
      document.querySelector(
        '.modal-body'
      ).innerHTML = `Oops! There Is A Draw📍`;
      document.getElementById('helo').click();
      document.getElementById('done').addEventListener('click', () => {
        gameRefresh();
      });
    }
  }
}
function put(activeuserr) {
  if (activeuserr == 0 && document.getElementById(box).innerHTML == '') {
    document.getElementById(box).innerHTML = 'X';
    arr[num - 1] = activeuser;
    checkdiagnal();
    checkrow();
    checkcol();
    checkdraw(any);
    swith();
  } else if (activeuserr == 1 && document.getElementById(box).innerHTML == '') {
    document.getElementById(box).innerHTML = 'O';
    arr[num - 1] = activeuser;
    checkdiagnal();
    checkcol();
    checkrow();
    checkdraw(any);
    swith();
  }
}
//Game Functions
