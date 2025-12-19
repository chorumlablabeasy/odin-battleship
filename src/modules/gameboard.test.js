import { Gameboard } from './gameboard'
import { Ship } from './ship'

// placeShip methodu testleri
describe('Gemiler doğru konuma hatasız yerleştirilmeli', () => {
  let board
  let ship

  beforeEach(() => {
    board = new Gameboard()
    ship = new Ship(3)
  })

  test('Gemi yatay yerleştirilmeli', () => {
    board.placeShip(ship, 1, 1, 'horizontal')

    expect(board.map[1][1]).toBe(ship)
    expect(board.map[1][2]).toBe(ship)
    expect(board.map[1][3]).toBe(ship)
  })

  test('Gemi dikey yerleştirilmeli', () => {
    board.placeShip(ship, 1, 1, 'vertical')

    expect(board.map[1][1]).toBe(ship)
    expect(board.map[2][1]).toBe(ship)
    expect(board.map[3][1]).toBe(ship)
  })

  test('Gemi başka bir geminin üstüne veya 1 kare çevresine yerleştirilmemeli', () => {
    const anotherShip = new Ship(2)
    board.placeShip(anotherShip, 1, 1, 'horizontal')

    board.placeShip(ship, 1, 3, 'vertical')

    expect(board.map[1][3]).toBe(null)
    expect(board.map[2][3]).toBe(null)
    expect(board.map[3][3]).toBe(null)
  })

  test('Gemi harita dışına yerleştirilmemeli', () => {
    board.placeShip(ship, 0, 8, 'horizontal')

    expect(board.map[0][8]).toBe(null)
    expect(board.map[0][9]).toBe(null)
  })

  test('Gemi yerleştirildikten sonra ships dizisine eklenmeli', () => {
    board.placeShip(ship, 1, 1, 'vertical')

    expect(board.ships).toContain(ship)
  })
})
