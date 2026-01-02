import { Gameboard } from './gameboard'
import { Ship } from './ship'

// placeShip metodu testleri
describe('Gemiler placeShip metodu ile doğru konuma hatasız yerleştirilmeli', () => {
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

// receiveAttack metodu testleri
describe('receiveAttack metodu doğru çalışmalı', () => {
  let board
  let ship

  beforeEach(() => {
    board = new Gameboard()
    ship = new Ship(3)
  })

  test('Herhangi bir gemi vurulursa o gemiye ait hits değeri 1 artmalı', () => {
    board.placeShip(ship, 1, 1, 'horizontal')
    board.receiveAttack(1, 1)

    expect(ship.hits).toBe(1)
  })

  test('Ateş edilen nokta attacks içinde "miss" olarak işaretlenmeli', () => {
    board.receiveAttack(1, 1)

    expect(board.attacks.get('1,1')).toBe('miss')
  })

  test('Gemi vurulduğunda attacks içinde "hit" olarak işaretlenmeli', () => {
    board.placeShip(ship, 2, 2, 'horizontal')
    board.receiveAttack(2, 2)

    expect(board.attacks.get('2,2')).toBe('hit')
  })

  test('Ateş edilen nokta attacks içindeyse ateş edilmemeli', () => {
    board.receiveAttack(1, 1)

    expect(board.receiveAttack(1, 1)).toBe(false)
  })

  // isAllSunk testi
  test('Tüm gemiler batınca true dönmeli', () => {
    board.placeShip(ship, 1, 1, 'horizontal')
    board.receiveAttack(1, 1)
    board.receiveAttack(2, 1)
    board.receiveAttack(3, 1)

    expect(board.isAllSunk()).toBe(true)
  })
})
