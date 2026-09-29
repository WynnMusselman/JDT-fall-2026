// DARK MODE TOGGLE BUTTON
const toggleBtn = //...

function modeToggle(){
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        toggleBtn.textContent = 'Switch to Light Mode';
    } else {
        toggleBtn.textContent = 'Switch to Dark Mode';
    }
}


// RAIN EFFECT
(function(){

  window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame;

  var canvas = document.querySelector("canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  var ctx = canvas.getContext("2d");
  ctx.globalCompositeOperation = "source-over";
  var particles = [];
  var pIndex = 0;
  var x, y, frameId;

  function Dot(x,y,w,h){
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    particles[pIndex] = this;
    this.id = pIndex;
    pIndex++;
    this.life = 0;
    this.maxlife = getRandom(1,3);
    this.alpha = getRandom(0.01,0.2);

  };

  Dot.prototype.draw = function(x, y){
    // change color and width
    ctx.strokeStyle = "rgba(255, 0, 0, " + this.alpha +""+ ")";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(this.x+this.x/2, this.y+this.y/2);
    ctx.lineTo(this.x+this.x/2+this.width/2, this.y+this.y/2+this.height);
    ctx.closePath();
    ctx.stroke();
    this.life++;
    if(this.life >= this.maxlife){
      delete particles[this.id];
    }
  }

  window.addEventListener("resize", function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    x = canvas.width / 2;
    y = canvas.height / 2;
  });

  function loop(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    for (var i = 0; i < 600; i++) {
      new Dot(canvas.width*Math.random()*2-canvas.width/2, canvas.height*Math.random(), getRandom(-15,15), getRandom(70,150));

    }

    for(var i in particles){
      particles[i].draw();
    }
    frameId = requestAnimationFrame(loop);
  }

  loop();

  function getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }

})();

