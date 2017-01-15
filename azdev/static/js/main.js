var mainScene = document.getElementById("main-scene");
var parallax = new Parallax(mainScene, {
    invertY: true,
    invertX: true,
    frictionX: 1.0,
    frictionY: 1.0,
    calibrateX: true,
    calibrateY: true
});