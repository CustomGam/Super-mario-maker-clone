class Level {
  constructor() {
    this.tiles = this.generateTiles();
    this.enemies = [new Enemy(400, 368)];
  }

  generateTiles() {
    const tiles = [];
    for (let i = 0; i < 12; i++) {
      const row = [];
      for (let j = 0; j < 25; j++) {
        row.push(Math.random() > 0.8 ? 1 : 0); // 1 for block, 0 for empty
      }
      tiles.push(row);
    }
    return tiles;
  }

  update() {
    this.enemies.forEach(enemy => enemy.update());
  }

  render(context) {
    for (let y = 0; y < this.tiles.length; y++) {
      for (let x = 0; x < this.tiles[y].length; x++) {
        if (this.tiles[y][x] === 1) {
          context.fillStyle = 'brown';
          context.fillRect(x * 32, y * 32, 32, 32);
        }
      }
    }
    this.enemies.forEach(enemy => enemy.render(context));
  }
}
