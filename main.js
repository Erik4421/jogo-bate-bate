import { Ball } from "./Balls.js"

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

// function to generate random number

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// class Ball {
//   constructor(x, y, velX, velY, color, size) {
//     this.x = x;
//     this.y = y;
//     this.velX = velX;
//     this.velY = velY;
//     this.color = color;
//     this.size = size;
//   }

//   draw() {
//     ctx.beginPath();
//     ctx.fillStyle = this.color;
//     ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
//     ctx.fill();
//   }

//   update() {
//     if (this.x + this.size >= width) {
//       this.velX = -Math.abs(this.velX);
//     }

//     if (this.x - this.size <= 0) {
//       this.velX = Math.abs(this.velX);
//     }

//     if (this.y + this.size >= height) {
//       this.velY = -Math.abs(this.velY);
//     }

//     if (this.y - this.size <= 0) {
//       this.velY = Math.abs(this.velY);
//     }

//     this.x += this.velX;
//     this.y += this.velY;
//   }

//   collisionDetect(goal1, goal2) {
//     if (
//       this.x - this.size <  goal1.x + 1  && 
//       (this.y - this.size > goal1.y && this.y < goal1.y + goal1.h) &&
//       this.color !== goal1.color
//     ){
//       console.log("gol")
//     }

//     if (this.x - this.size >  goal2.x && 
//       (this.y - this.size > goal2.y && this.y < goal1.y + goal1.h ) &&
//       this.color !== goal2.color
//     ){
//       console.log("gol")
//     }
//   }
// }

class Team {
  constructor(x,y, w, h, color, balls_count, velMax = 20) {
    this.name = color
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.color = color
    this.balls_count = balls_count;
    this.velMax = velMax;
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x,this.y, this.w, this.h);
    this.y = (height-this.h) / 2;
  }
}

function time_red() {
  let tamanho = parseInt(document.getElementById("tamanho_red").value)
  let quantidade = parseInt(document.getElementById("quantidade_red").value)
  let velo = parseInt(document.getElementById("velocidade_red").value)


  team_red.h = tamanho;
  team_red.balls_count = quantidade;
  team_red.velMax = velo;
}

function time_blue() {
  let tamanho = parseInt(document.getElementById("tamanho_blue").value)
  let quantidade = parseInt(document.getElementById("quantidade_blue").value)
  let velo = parseInt(document.getElementById("velocidade_blue").value)

  team_blue.h = tamanho;
  team_blue.balls_count = quantidade;
  team_blue.velMax = velo;
}

const balls = [];

let team_red = new Team(0, height/2 - 50, 30, 100, "red")
let team_blue = new Team(width - 30, height/2 - 50, 30, 100, "blue")



function start(){
  for (let i = 0; i < team_red.balls_count; i++) {
    const size = random(10, 20);
    const velocidade = team_red.velMax || 20;
    const ball_red = new Ball(
      // ball position always drawn at least one ball width
      // away from the edge of the canvas, to avoid drawing errors
      random(0 + size, width - size),
      random(0 + size, height - size),
      velocidade,
      random(-7, 7),
      "red",
      size
    );
    balls.push(ball_red);
  }
  for (let i = 0; i < team_blue.balls_count; i++)  {
    const size = random(10, 20);
    const velocidade = team_blue.velMax || 20;
    const ball_blue = new Ball(
      // ball position always drawn at least one ball width
      // away from the edge of the canvas, to avoid drawing errors
      random(0 + size, width - size),
      random(0 + size, height - size),
      velocidade,
      random(-7, 7),
      "blue",
      size
    );
    balls.push(ball_blue);
  }

  
}




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

export {canvas, ctx, width, height}