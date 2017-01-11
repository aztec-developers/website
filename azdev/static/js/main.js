var mainScene = document.getElementById("main-scene");
var parallax = new Parallax(mainScene, {
    invertY: true,
    invertX: true,
    frictionX: .7,
    frictionY: .63,
    calibrateX: true,
    calibrateY: true
});