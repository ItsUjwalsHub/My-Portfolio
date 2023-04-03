const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 0) {
		header.style.backgroundColor = '#000000';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
	for(tablink of tablinks){
	tablink.classList.remove("active-link");
	}
	for(tabcontent of tabcontents){
		tabcontent.classList.remove("active-tab");
	}
	event.currentTarget.classList.add("active-link");
	document.getElementById(tabname).classList.add("active-tab");
}

















var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;
var lines = [];
var bubbles = [];

// Event listeners
window.addEventListener("resize", function() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});

// Functions
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 20)) + min + 2;
  // return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createLines() {
  for (var i = 0; i < 50; i++) {
    var x = random(0, width);
    var y = random(0, height);
    var vx = random(-2, 2);
    var vy = random(-2, 2);
    lines.push({
      x: x,
      y: y,
      vx: vx,
      vy: vy
    });
  }
}

function createBubbles() {
  for (var i = 0; i < 10; i++) {
    var x = random(0, width);
    var y = random(0, height);
    var radius = random(20, 40);
    var color = "rgba(" + random(0, 255) + "," + random(0, 255) + "," + random(0, 255) + ",0.9)";
    bubbles.push({
      x: x,
      y: y,
      radius: radius,
      color: color
    });
  }
}

function drawLines() {
  for (var i = 0; i < lines.length; i++) {
    var line = lines[i];
    ctx.beginPath();
    ctx.moveTo(line.x, line.y);
    line.x += line.vx;
    line.y += line.vy;
    ctx.lineTo(line.x, line.y);
    ctx.strokeStyle = "turquoise";
    ctx.stroke();
    if (line.x < 0 || line.x > width) {
      line.vx = -line.vx;
    }
    if (line.y < 0 || line.y > height) {
      line.vy = -line.vy;
    }
  }
}

function drawBubbles() {
  for (var i = 0; i < bubbles.length; i++) {
    var bubble = bubbles[i];
    ctx.beginPath();
    ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
    ctx.fillStyle = bubble.color;
    ctx.fill();
  }
}

function loop() {
  ctx.clearRect(0, 0, width, height);
  drawLines();
  drawBubbles();
  requestAnimationFrame(loop);
}

// Initialize
createLines();
createBubbles();
loop();
