/**
 * A função random é reponsável por gerar números aleatórios.
 * @param {int} min é valor mínimo que deseja chegar. 
 * @param {int} max é valor máximo que deseja chegar. 
 */
export function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}