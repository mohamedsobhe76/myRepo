var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var btn = document.getElementById('fillBtn');

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

btn.onclick = function() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < 100; i++) {
    var x = getRandomInt(0, canvas.width);
    var y = getRandomInt(0, canvas.height);
    var r = 20;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.strokeStyle = `black`;
    ctx.lineWidth = 2;
    ctx.stroke();
    
  }
};