import { Ship } from './ship'

test('Gemi hasar aldığında hits değişkeni 1 artmalı', () => {
  const newShip = new Ship(3)

  newShip.hit()

  expect(newShip.hits).toBe(1)
})

test('Gemi toplam uzunluğu kadar hit aldıysa batmalı', () => {
  const newShip = new Ship(2)

  newShip.hit()
  newShip.hit()

  expect(newShip.isSunk()).toBe(true)
})
