import { ctx, height } from "./main.js";

export class Team {

    /**
     * Cria um time.
     * @param {*} x Cordenada da aréa.
     * @param {*} y Cordenada da aréa.
     * @param {*} w A largura da aréa do gol.
     * @param {*} h A altura da área de gol.
     * @param {*} color A cor do gol.
     * @param {*} balls_count Número de bolas associadas a um time.
     * @param {*} velMax Velocidade das bolas.
     */
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
  
    /**
     * Desenhe a trave na tela
     */
    
    draw() {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x,this.y, this.w, this.h);
      this.y = (height-this.h) / 2;
    }
  }