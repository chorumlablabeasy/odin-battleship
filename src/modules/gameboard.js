class Gameboard {
  constructor() {
    this.map = createMap(10)
    this.shipObjects = []
    this.unhittableSquares = new Set()
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
