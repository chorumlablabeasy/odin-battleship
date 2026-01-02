import './style.css'
import { GameController } from './modules/gameController'
import { DomManager } from './modules/domManager'

const game = new GameController()
const domMan = new DomManager()

domMan.renderBoard('player-board', (x , y) => {})
domMan.renderBoard('computer-board', (x , y) => {})

domMan.updateBoard('player-board', game.players[0].gameboard, false)
domMan.updateBoard('computer-board', game.players[1].gameboard, false)