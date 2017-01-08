var smoothScroll = require('smoothscroll');

var exampleBtn = document.getElementById("about-button");
var exampleDestination = document.getElementById("about");

exampleBtn.addEventListener("click",
	function(){
		smoothScroll(exampleDestination);
	},
	false
);