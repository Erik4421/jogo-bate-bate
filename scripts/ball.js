import { ctx, width, height } from "./main.js";
import { contador_red, contador_blue } from "./functionGame.js";

/**
 * A classe Ball é responsável por criar as bolas.
 */
class Ball {

    /**
   * Cria a bola
   * @param {*} x Cordenada da bola
   * @param {*} y Cordenada da bola
   * @param {*} velX Velocidade que se locomove na horizontal
   * @param {*} velY Velocidade que se locomove na vertical
   * @param {*} color Cor da bola
   * @param {*} size Tamanho do raio da bola
   */
  constructor(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
  }

   /**
   * Desenhe a bola na tela
   */
  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }

  /**
   * Atualiza a posição da bola
   */
  update() {
    if (this.x + this.size >= width) {
      this.velX = -Math.abs(this.velX);
    }

    if (this.x - this.size <= 0) {
      this.velX = Math.abs(this.velX);
    }

    if (this.y + this.size >= height) {
      this.velY = -Math.abs(this.velY);
    }

    if (this.y - this.size <= 0) {
      this.velY = Math.abs(this.velY);
    }

    this.x += this.velX;
    this.y += this.velY;
  }

    /**
   * Detecta se a bola atingiu o alvo
   * @param {*} goal1 Primeiro gol
   * @param {*} goal2 Segundo gol
   */
  collisionDetect(goal1, goal2) {
    if (
      this.x - this.size <  goal1.x + 1  && 
      (this.y - this.size > goal1.y && this.y < goal1.y + goal1.h) &&
      this.color !== goal1.color
    ){
      contador_blue()
    }

    if (this.x - this.size >  goal2.x && 
      (this.y - this.size > goal2.y && this.y < goal1.y + goal1.h ) &&
      this.color !== goal2.color
    ){
      contador_red()
    }
  }
}

export {Ball}