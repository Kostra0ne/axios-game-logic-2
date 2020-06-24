import { game } from "./views/game.js";
import { intro } from "./views/intro.js";

const board = document.getElementById("board");

var gameOptions = {
  playerName: null,
  score: 0,
};

function startIntro() {
  gameOptions.playerName = window.prompt("votre nom ?");
  board.innerHTML = intro(gameOptions);
  const btn = board.querySelector(".btn");
  btn.onclick = startGame;
}

function startGame() {
  board.innerHTML = game(gameOptions);
}

startIntro();
