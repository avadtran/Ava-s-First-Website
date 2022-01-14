function initializeAnimation() {
  window.requestAnimationFrame(draw);
}

function drawArt(ctx) {
  // Draw triangle
  ctx.beginPath();
  ctx.arc(0, -340, 130, 0, Math.PI * 2, false);
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(-500, 0);
  var time = new Date();
  ctx.rotate(time.getSeconds() + time.getMilliseconds() / 1000);
  ctx.strokeStyle = 'rgba(174, 198, 207, 1)';
  ctx.lineWidth = 11;
  ctx.lineTo(-300, 0);
  ctx.lineTo(0,100);
  ctx.lineTo(230,70);
  ctx.lineTo(500,117);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(-510, 300);
  ctx.strokeStyle = 'rgba(0,132,200,1.00)';
  ctx.lineWidth = 13;
  ctx.lineTo(-400,330);
  ctx.lineTo(0,330);
  ctx.lineTo(250,270);
  ctx.lineTo(510,230);

  ctx.stroke();




  // ctx.stroke();
  //
  // ctx.beginPath();
  // ctx.arc(0, 0, 100, 0, Math.PI * 2, false);
  // ctx.stroke();
  //
  // ctx.lineWidth = 2;
  // ctx.beginPath();
  // ctx.moveTo(-100, -180);
  // ctx.lineTo(140, 120);
  // ctx.stroke();
  //
  // ctx.fillRect(-160, 10, 100, 100);
}

function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  ctx.globalCompositeOperation = 'destination-over';
  ctx.clearRect(0, 0, 1000, 1070); // clear canvas

  // Figure out what pen we wanna draw with
  ctx.fillStyle = 'rgba(253, 253, 150, 1)';
  ctx.strokeStyle = 'rgba(253, 253, 150, 0.4)';

  ctx.save();
  ctx.translate(500, 535);
  drawArt(ctx);
  ctx.restore();


  // Call draw when the website is ready
  window.requestAnimationFrame(draw);
}

initializeAnimation();
