class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 32;
    this.height = 32;
    this.speed = 5;
    this.velocityY = 0;
    this.gravity = 0.5;
    this.jumpPower = 10;
    this.grounded = false;
  }

  update(level) {
    this.velocityY += this.gravity;
    this.y += this.velocityY;

    // Simple collision detection with level
    level.tiles.forEach((row, y) => {
      row.forEach((tile, x) => {
        if (tile === 1) {
          const tileX = x * 32;
          const tileY = y * 32;
          if (this.x < tileX + 32 && this.x + this.width > tileX &&
              this.y < tileY + 32 && this.y + this.height > tileY) {
            if (this.velocityY > 0) {
              this.y = tileY - this.height;
              this.grounded = true;
              this.velocityY = 0;
            }
          }
        }
      });
    });

    // Move left and right
    if (keys['ArrowLeft']) this.x -= this.speed;
    if (keys['ArrowRight']) this.x += this.speed;
    if (keys['ArrowUp'] && this.grounded) {
      this.velocityY = -this.jumpPower;
      this.grounded = false;
    }
  }

  render(context) {
    context.fillStyle = 'red';
    context.fillRect(this.x, this.y, this.width, this.height);
  }
}

const keys = {};
window.addEventListener('keydown', (e) => (keys[e.key] = true));
window.addEventListener('keyup', (e) => (keys[e.key] = false));
