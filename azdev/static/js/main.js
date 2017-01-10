var mainScene = document.getElementById("main-scene");
var parallax = new Parallax(mainScene, {
    invertY: true,
    invertX: true,
    frictionX: .7,
    frictionY: .5,
    originY: .7,
    calibrateX: true,
    calibrateY: true
});


var subScene = document.getElementById("sub-scene");
var parallax = new Parallax(subScene, {
    invertY: true,
    invertX: true,
    limitx: 4,
    limity: false,
    frictionX: .4,
    frictionY: .4,
    originY: .7,
    originX:.7,
    scaleY: 1,
    calibrateX: true,
    calibrateY: true,
});