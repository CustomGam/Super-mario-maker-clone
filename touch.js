class TouchController {
  constructor() {
    this.activeTouches = {};
    window.addEventListener('touchstart', (e) => this.onTouchStart(e), false);
    window.addEventListener('touchend', (e) => this.onTouchEnd(e), false);
    window.addEventListener('touchmove', (e) => this.onTouchMove(e), false);
  }

  onTouchStart(e) {
    e.preventDefault();
    for (let touch of e.changedTouches) {
      this.activeTouches[touch.identifier] = { x: touch.clientX, y: touch.clientY };
    }
  }

  onTouchEnd(e) {
    e.preventDefault();
    for (let touch of e.changedTouches) {
      delete this.activeTouches[touch.identifier];
    }
  }

  onTouchMove(e) {
    e.preventDefault();
    for (let touch of e.changedTouches) {
      this.activeTouches[touch.identifier] = { x: touch.clientX, y: touch.clientY };
    }
  }
}

const touchController = new TouchController();
