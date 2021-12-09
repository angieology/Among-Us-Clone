export default {
  // specify the underlying browser rendering engine (AUTO, CANVAS, WEBGL)
  // AUTO will attempt to use WEBGL but if not available it'll default to CANVAS
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  render: {
    pixelArt: true,
  },
  scale: {
    parent: "mygame",
    autoCenter: true,
  },
  physics: {
    default: "arcade",
    arcade: {
      // game objects will be pulled down along y-axis.
      // the higher the number, the stronger the pull.
      gravity: { y: 1500 },
      debug: false,
    },
  },
  dom: {
    createContainer: true,
  },
  scene: [],
};
