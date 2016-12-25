(function () {

  var COUNT = 300;
  var header = document.querySelector('.header');
  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext('2d');
  var width = header.clientWidth;
  var height = header.clientHeight;
  var active = false;

  function onResize() { // when window resizes
    width = header.clientWidth;
    height = header.clientHeight;
    canvas.width = width;
    canvas.height = height;
    ctx.fillStyle = '#FFF';

    var isActive = active;
    active = width > 700;

    if(!isActive && active) {
      requestAnimFrame(update);
    }
  }

  // Snowflake Class
  var Snowflake = function () {
    this.x = 0; // x position
    this.y = 0; // y position
    this.vy = 0; // velocity y
    this.vx = 0; // velocity x
    this.r = 0; // radius

    this.reset(); // reset function
  };

  // Snowflake prototype
  Snowflake.prototype.reset = function() {
    this.x = Math.random() * width; // random x position
    this.y = Math.random() * -height; // random y position
    this.vy = 1 + Math.random() * 3; // random velocity y
    this.vx = 0.5 - Math.random(); // random velocity x
    this.r = 1 + Math.random() * 2; // random radius
    this.o = 0.5 + Math.random() * 0.5; // random opacity
  };

  // default canvas properties
  canvas.style.position = 'absolute';
  canvas.style.left = canvas.style.bottom = canvas.style.top = '0';

  // creates snowflakes array
  var snowflakes = [], snowflake;
  for (i = 0; i < COUNT; i++) {
    snowflake = new Snowflake(); // initializes snowflakes
    snowflake.reset();
    snowflakes.push(snowflake); // pushes into snowflake array
  }

  function update() {

    ctx.clearRect(0, 0, width, height);

    if (!active)
      return;

    for (i = 0; i < COUNT; i++) {
      snowflake = snowflakes[i];
      snowflake.y += snowflake.vy;
      snowflake.x += snowflake.vx;

      ctx.globalAlpha = snowflake.o; // sets opacity

      // draws the snowflake & fills it in
      ctx.beginPath();
      ctx.arc(snowflake.x, snowflake.y, snowflake.r, 0, Math.PI * 2, false);
      ctx.closePath();
      ctx.fill();

      // if the y position of snowflake is greater than the height then reset
      if (snowflake.y > height) {
        snowflake.reset();
      }
    }

    requestAnimFrame(update);
  }

  // shim layer with setTimeout fallback
  window.requestAnimFrame = (function(){ // makes sure it covers browsers
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            function( callback ){
              window.setTimeout(callback, 1000 / 60);
            };
  })();

  onResize();
  window.addEventListener('resize', onResize, false);

  header.appendChild(canvas);

})();