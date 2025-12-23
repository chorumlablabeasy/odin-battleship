import { Gameboard } from "./gameboard"

class Player {
  constructor(playerType) {
    this.playerType = playerType
    this.gameboard = new Gameboard()
  }

  makeRandomMove(enemyBoard) {
    let x, y
    let success = false

    while (!success) {
      x = Math.floor(Math.random()*10)
      y = Math.floor(Math.random()*10)

      success = enemyBoard.receiveAttack(x, y)
    }
  }
}

export { Player }