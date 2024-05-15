class UI {
  constructor() {
    this.createSaveButton();
    this.createLoadButton();
  }

  createSaveButton() {
    const button = document.createElement('button');
    button.innerText = 'Save Level';
    button.onclick = () => saveLoad.saveLevel(game.level);
    document.body.appendChild(button);
  }

  createLoadButton() {
    const button = document.createElement('button');
    button.innerText = 'Load Level';
    button.onclick = () => {
      game.level = saveLoad.loadLevel();
    };
    document.body.appendChild(button);
  }
}

const ui = new UI();
