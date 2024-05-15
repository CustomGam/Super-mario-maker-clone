class SaveLoad {
  saveLevel(level) {
    localStorage.setItem('savedLevel', JSON.stringify(level.tiles));
  }

  loadLevel() {
    const savedTiles = JSON.parse(localStorage.getItem('savedLevel'));
    return savedTiles ? new Level(savedTiles) : new Level();
  }
}

const saveLoad = new SaveLoad();
