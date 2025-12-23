class Gameboard {
  constructor() {
    this.map = createMap(10)
    this.ships = []
    this.attacks = new Map()
  }

  placeShip(ship, x, y, direction) {
    // Parametrelerin kontrolü
    if (direction !== 'horizontal' && direction !== 'vertical') {
      throw new Error(`Geçersiz yön: ${direction}.`)
    }

    if (x < 0 || y < 0 || x >= 10 || y >= 10) {
      throw new Error('Koordinatlar harita sınırları dışında!')
    }

    // Gemi haritanın dışına taşıyor mu ?
    if (direction === 'horizontal' && x + ship.length > 10) {
      throw new Error('Gemi yatayda harita dışına taşıyor!')
    }
    if (direction === 'vertical' && y + ship.length > 10) {
      throw new Error('Gemi dikeyde harita dışına taşıyor!')
    }

    if (this.isAreaClear(ship, x, y, direction)) {
      this.ships.push(ship)

      if (direction === 'horizontal') {
        for (let i = 0; i < ship.length; i++) {
          this.map[y][x + i] = ship
        }
      } else {
        for (let i = 0; i < ship.length; i++) {
          this.map[y + i][x] = ship
        }
      }

      return true
    }

    return false
  }

  // Gemi yerleştirilmek istenen konumu ve çevresinin uygunluk durumunu kontrol eden fonksiyon
  isAreaClear(ship, x, y, direction) {
    let startX = x - 1
    let startY = y - 1

    if (direction === 'horizontal') {
      for (let i = 0; i < ship.length + 2; i++) {
        for (let m = 0; m < 3; m++) {
          let checkX = startX + i
          let checkY = startY + m

          // Eğer kontrol edilecek kare harita dışındaysa kontrol etmeye gerek yok
          if (this.map[checkY] !== undefined && this.map[checkY][checkX] !== undefined) {
            if (this.map[checkY][checkX] !== null) {
              return false
            }
          }
        }
      }

      return true
    } else {
      for (let i = 0; i < 3; i++) {
        for (let m = 0; m < ship.length + 2; m++) {
          let checkX = startX + i
          let checkY = startY + m

          if (this.map[checkY] !== undefined && this.map[checkY][checkX] !== undefined) {
            if (this.map[checkY][checkX] !== null) {
              return false
            }
          }
        }
      }

      return true
    }
  }

  receiveAttack(x , y) {
    if (x < 0 || y < 0 || x >= 10 || y >= 10) {
      throw new Error('Koordinatlar harita sınırları dışında!')
    }

    const coord = `${x},${y}`

    if (this.attacks.has(coord)) {
      return false
    }

    if (this.map[y][x]) {
      const ship = this.map[y][x]

      ship.hit()
      this.attacks.set(coord, 'hit')
    } else {
      this.attacks.set(coord, 'miss')
    }

    return true
  }

  isAllSunk() {
    this.ships.forEach((ship) => {
      if (ship.sunk === false) {
        return false
      }
    })

    return true
  }
}

function createMap(n) {
  const map = []

  for (let i = 0; i < n; i++) {
    const row = []

    for (let m = 0; m < n; m++) {
      row.push(null)
    }

    map.push(row)
  }

  return map
}

export { Gameboard }
