let block = document.getElementById("parent");
let computerPlay = document.querySelector(".fa-laptop");
let usersPlay = document.querySelector(".fa-users");
let chooseChek = document.querySelector(".choose__block");
let hod = 0;
let cross = document.querySelector(".cross");
let zero = document.querySelector(".zero");
let play = {
  Cross: "x",
  Zero: "0",
  Cross_Backgroung: "center / contain no-repeat url(крест.png)",
  Zero_Background: "center / contain no-repeat url(круг.png)",
};

let arr = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];
let arr_draw = [
  [0, 1, 5, 6, 7],
  [0, 2, 4, 5, 7],
  [0, 2, 3, 7, 8],
  [0, 1, 5, 6, 8],
  [1, 4, 5, 6, 8],
  [1, 2, 3, 7, 8],
  [1, 3, 5, 6, 8],
  [0, 2, 3, 5, 7],
  [2, 3, 4, 7, 8],
  [0, 4, 5, 6, 7],
  [0, 2, 3, 4, 7],
  [0, 2, 5, 6, 7],
  [0, 1, 4, 5, 6],
  [1, 2, 3, 6, 8],
  [1, 2, 3, 4, 8],
  [1, 3, 4, 6, 8],
];

function Rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function choseUserChek(chose, event, hod) {
  if (chose == "крестик") {
    if (hod % 2 == 1) {
      event.target.style.background = play.Cross_Backgroung;
      event.target.innerHTML = play.Cross;
      chekWinner(arr, arr_draw);
    } else {
      event.target.style.background = play.Zero_Background;
      event.target.innerHTML = play.Zero;
      chekWinner(arr, arr_draw);
    }
  } else if (chose == "нолик") {
    if (hod % 2 == 1) {
      event.target.style.background = play.Zero_Background;
      event.target.innerHTML = play.Zero;
      chekWinner(arr, arr_draw);
    } else {
      event.target.style.background = play.Cross_Backgroung;
      event.target.innerHTML = play.Cross;
      chekWinner(arr, arr_draw);
    }
  } else if (chose !== "крестик" || chose !== "нолик") {
    alert("Введите один из двух предложенных вариантов");
    location.reload();
  }
}

function choseChek(chose, event) {
  if (chose == "крестик") {
    event.target.style.background = play.Cross_Backgroung;
    event.target.innerHTML = play.Cross;
    chekWinner(arr, arr_draw);
    BotAnswer(chose);
  } else if (chose == "нолик") {
    event.target.style.background = play.Zero_Background;
    event.target.innerHTML = play.Zero;
    chekWinner(arr, arr_draw);
    BotAnswer(chose);
  } else if (chose !== "крестик" || chose !== "нолик") {
    alert("Введите один из двух предложенных вариантов");
    location.reload();
  }
}

function chekWinner(arr, arr_draw) {
  let answer = document.getElementsByClassName("child");

  for (let i = 0; i < arr.length; i++) {
    if (
      answer[arr[i][0]].innerHTML == "x" &&
      answer[arr[i][1]].innerHTML == "x" &&
      answer[arr[i][2]].innerHTML == "x"
    ) {
      setInterval(() => {
        location.reload();
        alert("Победили крестики");
      }, 800);
      break;
    } else if (
      answer[arr[i][0]].innerHTML == "0" &&
      answer[arr[i][1]].innerHTML == "0" &&
      answer[arr[i][2]].innerHTML == "0"
    ) {
      setInterval(() => {
        location.reload();
        alert("Победили нолики");
      }, 800);
      break;
    }
  }
  for (let j = 0; j < arr_draw.length; j++) {
    if (
      answer[arr_draw[j][0]].innerHTML == "x" &&
      answer[arr_draw[j][1]].innerHTML == "x" &&
      answer[arr_draw[j][2]].innerHTML == "x" &&
      answer[arr_draw[j][3]].innerHTML == "x" &&
      answer[arr_draw[j][4]].innerHTML == "x"
    ) {
      setInterval(() => {
        location.reload();
        alert("Hичья");
      }, 800);
      break;
    } else if (
      answer[arr_draw[j][0]].innerHTML == "0" &&
      answer[arr_draw[j][1]].innerHTML == "0" &&
      answer[arr_draw[j][2]].innerHTML == "0" &&
      answer[arr_draw[j][3]].innerHTML == "0" &&
      answer[arr_draw[j][4]].innerHTML == "0"
    ) {
      setInterval(() => {
        location.reload();
        alert("Hичья");
      }, 800);
      break;
    }
  }
}

function BotAnswer(chose) {
  let cletka = document.querySelectorAll(".child");
  let i = Rand(0, 8);

  if (chose == "крестик") {
    setTimeout(() => {
      while (true) {
        if (cletka[i].innerHTML !== "x" && cletka[i].innerHTML !== "0") {
          cletka[i].style.background = play.Zero_Background;
          cletka[i].innerHTML = play.Zero;
          chekWinner(arr, arr_draw);
          break;
        } else return BotAnswer(chose);
      }
    }, 500);
  } else {
    setTimeout(() => {
      while (true) {
        if (cletka[i].innerHTML !== "x" && cletka[i].innerHTML !== "0") {
          cletka[i].style.background = play.Cross_Backgroung;
          cletka[i].innerHTML = play.Cross;
          chekWinner(arr, arr_draw);
          break;
        } else return BotAnswer(chose);
      }
    }, 500);
  }
}
const blockContent = (event, chose, text) => {
  if (event.target.innerHTML == "0" || event.target.innerHTML == "x") {
    return false;
  }
  if (text == "computerPlay") {
    choseChek(chose, event);
  } else {
    hod++;
    choseUserChek(chose, event, hod);
  }
};

const answer = (text) => {
  chooseChek.style.display = "block";
  chooseChek.style.animation = "newanim 3s";
  cross.addEventListener("click", () => {
    chooseChek.style.display = "none";
    block.addEventListener("click", (event) => {
      let chose = "крестик";
      blockContent(event, chose, text);
    });
  });
  zero.addEventListener("click", () => {
    chooseChek.style.display = "none";
    block.addEventListener("click", (event) => {
      let chose = "нолик";
      blockContent(event, chose, text);
    });
  });
  computerPlay.removeEventListener("click",handler);
  usersPlay.removeEventListener("click", answer);
};

function handler(){
  answer("computerPlay");
}

computerPlay.addEventListener("click", handler);
usersPlay.addEventListener("click", answer);