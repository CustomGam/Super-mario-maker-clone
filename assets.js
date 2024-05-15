class Assets {
  constructor() {
    this.images = {};
  }

  loadImages(imageList, callback) {
    let loadedImages = 0;
    const totalImages = imageList.length;

    imageList.forEach((image) => {
      const img = new Image();
      img.src = image.src;
      img.onload = () => {
        this.images[image.name] = img;
        loadedImages++;
        if (loadedImages === totalImages) {
          callback();
        }
      };
    });
  }

  getImage(name) {
    return this.images[name];
  }
}

const assets = new Assets();
assets.loadImages([
  { name: 'block', src: 'path/to/block.png' },
  { name: 'player', src: 'path/to/player.png' },
  { name: 'enemy', src: 'path/to/enemy.png' },
], () => {
  console.log('All images loaded');
});
