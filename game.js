class Game {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.context = this.canvas.getContext('2d');
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.level = new Level();
    this.player = new Player(50, this.height - 100);
    this.init();
  }

  init() {
    this.bindEvents();
    this.loop();
  }

  bindEvents() {
    window.addEventListener('keydown', (e) => this.handleKeyDown(e));
    window.addEventListener('keyup', (e) => this.handleKeyUp(e));
    this.canvas.addEventListener('touchstart', (e) => this.handleTouchStart(e));
    this.canvas.addEventListener('touchend', (e) => this.handleTouchEnd(e));
  }

  handleKeyDown(event) {
    keys[event.key] = true;
  }

  handleKeyUp(event) {
    keys[event.key] = false;
  }

  handleTouchStart(event) {
    // Implement touch controls
  }

  handleTouchEnd(event) {
    // Implement touch controls
  }

  loop() {
    this.update();
    this.render();
    requestAnimationFrame(() => this.loop());
  }

  update() {
    this.player.update(this.level);
    this.level.update();
  }

  render() {
    this.context.clearRect(0, 0, this.width, this.height);
    this.level.render(this.context);
    this.player.render(this.context);
  }
}

const game = new Game('gameCanvas');
