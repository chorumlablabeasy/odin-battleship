import { DomManager } from './domManager'
import { Player } from './player'
import { Ship } from './ship'

class GameController {
  #players = []
  #activePlayer = null
  // #isGameOver = false
  #isWaitingForComputer = false
  // #winner = null

  // Şu an insan vs bilgisaar gibi yazıyorum ama metodları her 2 kişi karşılıklı
  // oynayabileceği şekilde yazıcam
  constructor(p1Name = 'Oyuncu 1', p2Name = 'Bilgisayar') {
    const player1 = new Player(p1Name, 'human')
    const player2 = new Player(p2Name, 'computer')

    this.#players = [player1, player2]
    this.#activePlayer = this.#players[0]
    // Oyunu daha basit test etmek için
    this.#setupDefaultShips()
  }

  // Testleri daha basit yapmak için
  #setupDefaultShips() {
    const p1 = this.#players[0]
    const p2 = this.#players[1]

    const ship1 = new Ship(3)
    const ship2 = new Ship(3)
    const ship3 = new Ship(4)
    p1.gameboard.placeShip(ship1, 0, 4, 'horizontal')
    p1.gameboard.placeShip(ship2, 5, 7, 'vertical')
    p1.gameboard.placeShip(ship3, 2, 6, 'vertical')

    const ship4 = new Ship(1)
    const ship5 = new Ship(2)
    const ship6 = new Ship(2)
    p2.gameboard.placeShip(ship4, 4, 0, 'horizontal')
    p2.gameboard.placeShip(ship5, 6, 1, 'vertical')
    p2.gameboard.placeShip(ship6, 8, 0, 'vertical')
  }
}
