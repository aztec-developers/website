var mainScene = document.getElementById('main-scene');
var parallax = new Parallax(mainScene, {
  invertY: true,
  invertX: true,
  limitx:false,
  limity:false

});


var subScene = document.getElementById('sub-scene');
var parallax = new Parallax(subScene, {
  invertY: true,
  invertX: true,
  limitx:false,
  limity:false,
  scaley:5
});
