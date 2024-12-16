import { team_blue, team_red, width, height, balls } from "./main.js";
import { Ball } from "./ball.js"
import { random } from "./random.js";

let i_red = 0;
let i_blue = 0;

/**
 * A função time_red é reponsável por capturar valores dos input (tamanho_red, quantidade_red, velocidade_red) e alterar as informações de ambos os atributos do jogo.
 */
function time_red() {
  let tamanho = parseInt(document.getElementById("tamanho_red").value)
  let quantidade = parseInt(document.getElementById("quantidade_red").value)
  let velo = parseInt(document.getElementById("velocidade_red").value)


  team_red.h = tamanho;
  team_red.balls_count = quantidade;
  team_red.velMax = velo;
}

/**
 * A função time_blue é reponsável por capturar valores dos input (tamanho_blue, quantidade_blue, velocidade_blue) e alterar as informações de ambos os atributos do jogo.
 */
function time_blue() {
  let tamanho = parseInt(document.getElementById("tamanho_blue").value)
  let quantidade = parseInt(document.getElementById("quantidade_blue").value)
  let velo = parseInt(document.getElementById("velocidade_blue").value)

  team_blue.h = tamanho;
  team_blue.balls_count = quantidade;
  team_blue.velMax = velo;
}

/**
 * Function utilizada para contar os gols
 */
function contador_red() {
  i_red += 1;
  document.getElementById("gols_red").innerHTML = `Gols: ${i_red}`
}

/**
 * Function utilizada para contar os gols
 */
function contador_blue() {
  i_blue += 1;
  document.getElementById("gols_blue").innerHTML = `Gols: ${i_blue}`
}

/**
 * start é uma função que inicia o jogo.
 */
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

/**
 * Fum
 */
function reset() {
  balls.length = balls.length - balls.length;
  team_red.h = 100;
  team_blue.h = 100;
  document.getElementById("gols_red").innerHTML = `Gols: 0`
  document.getElementById("gols_blue").innerHTML = `Gols: 0`
}

export {time_red, time_blue, contador_red, contador_blue, start, reset}