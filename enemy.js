class Enemy {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 32;
    this.height = 32;
    this.speed = 2;
  }

  update() {
    this.x -= this.speed;
    if (this.x + this.width < 0) {
      this.x = 800; // Respawn at the right edge
    }
  }

  render(context) {
    context.fillStyle = 'green';
    context.fillRect(this.x, this.y, this.width, this.height);
  }
}
