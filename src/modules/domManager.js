class DomManager {
  renderBoard(containerId) {
    const container = document.getElementById(containerId)

    for (let i = 0; i < 100; i++) {
      const cell = document.createElement('div')
      cell.classList.add('cell')
      const x = i % 10
      const y = Math.floor(i / 10)

      cell.dataset.x = x
      cell.dataset.y = y

      cell.addEventListener('click', () => {
        handleCellClick(x, y)
      })

      container.appendChild(cell)
    }
  }

  updateBoard(containerId, gameboard, isEnemy = false) {
    const container = document.getElementById(containerId)
    const cells = container.querySelectorAll('.cell')

    cells.forEach((cell) => {
      const x = parseInt(cell.dataset.x)
      const y = parseInt(cell.dataset.y)
      const cellData = gameboard.map[y][x]
      const isShot = gameboard.attacks.get(`${x},${y}`)

      cell.classList.remove('ship', 'hit', 'miss')

      if (isShot) {
        if (cellData) cell.classList.add('hit')
        else cell.classList.add('miss')
      } else if (cellData && !isEnemy) {
        cell.classList.add('ship')
      }
    })
  }
  
}

export { DomManager }
