import { time_red, time_blue, start } from "./functionGame.js"
import { Team } from "./team.js";

// Events

const button_red = document.querySelector("#time_red")
const button_blue = document.querySelector("#time_blue")
const button_start = document.querySelector("#start")

button_red.addEventListener("click", () => time_red())
button_blue.addEventListener("click", () => time_blue())
button_start.addEventListener("click", () => start())

// set up canvas

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// Instanciando a classe Team

let team_red = new Team(0, height/2 - 50, 30, 100, "red")
let team_blue = new Team(width - 30, height/2 - 50, 30, 100, "blue")

const balls = [];

// Function Loop

function loop() {
  ctx.fillStyle = "rgba(101, 250, 100, 0.25)";
  ctx.fillRect(0, 0, width, height);

  team_red.draw()
  
  team_blue.draw()

  for (const ball of balls) {
    ball.draw();
    ball.update();
    ball.collisionDetect(team_red, team_blue);
  }

  requestAnimationFrame(loop);
}

loop();

export {canvas, ctx, width, height, team_blue, team_red, balls}