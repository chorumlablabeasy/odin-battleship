import { Player } from "./player"

describe('Player ve Random Move Testleri', () => {
  let human
  let computer

  beforeEach(() => {
    human = new Player('human')
    computer = new Player('computer')
  })

  test('Bilgisayar başarılı bir şekilde bir atış yapmalı', () => {
    computer.makeRandomMove(human.gameboard)
    
    expect(human.gameboard.attacks.size).toBe(1)
  });

  test('Bilgisayar 100 farklı hamle yaparak tahtayı tamamen doldurmalı', () => {
    for (let i = 0; i < 100; i++) {
      computer.makeRandomMove(human.gameboard)
    }

    expect(human.gameboard.attacks.size).toBe(100)
  })
})

