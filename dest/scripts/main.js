(function () {
'use strict';

// var canvas;
// var ctx;

// function init() {
//   canvas = initFullScreenCanvas('canvas');
//   ctx = canvas.getContext('2d');
//   repaint();

//   const data = [
//     [0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 2, 1, 0, 0],
//     [0, 0, 2, 1, 1, 2, 0],
//   ];

// }

// function initFullScreenCanvas(canvasId) {
//   const canvas = document.getElementById(canvasId);
//   resizeCanvas(canvas);
//   window.addEventListener('resize', function() {
//     resizeCanvas(canvas);
//   });
//   return canvas;
// }

// function resizeCanvas(canvas) { 
//   canvas.width = document.width || document.body.clientWidth;
//   canvas.height = document.height || document.body.clientHeight;
//   repaint();
// } 

// function repaint() {
//   if (!ctx) return;
//   var logo = new Image();
//   logo.src = 'images/content/bg.png';
//   var pattern = ctx.createPattern(logo, "repeat");
//  ctx.fillStyle = pattern;
//  ctx.lineWidth = 10;
//  ctx.fillRect(0, 0, 800, 600); 
// }

// function reorient() {
//   let angle = window.orientation;
//   if (angle) {
//     const rot = -Math.PI*(angle/180);
//     ctx.translate(angle == -90 ? canvas.width : 0,
//       angle == 90 ? canvas.height : 0);
//     ctx.rotate(rot);
//   }
// } 


// // function init() {
// //   var canvas = document.getElementById("canvas");
// //   var ctx = canvas.getContext("2d");

// //   // Background
// //   var gradient = ctx.createLinearGradient(0, 0, 0, 300);
// //   gradient.addColorStop(0, "#fffbb3");
// //   gradient.addColorStop(1, "#f6f6b2");
// //   ctx.fillStyle = gradient;
// //   ctx.fillRect(0, 0, canvas.width, canvas.height);

// //   // Drawing curves
// //   ctx.strokeStyle = "#dad7ac";
// //   ctx.fillStyle = "#f6f6b2";
// //   ctx.beginPath();
// //   ctx.moveTo(50, 300);
// //   ctx.bezierCurveTo(450, -50, -150, -50, 250, 300);
// //   ctx.fill();
// //   ctx.beginPath();
// //   ctx.moveTo(50, 0);
// //   ctx.bezierCurveTo(450, 350, -150, 350, 250, 0);
// //   ctx.fill();
// //   // Border
// //   ctx.strokeStyle = "#989681";
// //   ctx.lineWidth = 2;
// //   ctx.strokeRect(1, 1, canvas.width - 2, canvas.height - 2);

// //   // Grid and pieces (translate to center in on Canvas)
// //   var cellSize = 40;
// //   var gridWidth = cellSize*7;
// //   var gridHeight = cellSize*6; 

// //   var gridOffsetLeft = Math.floor((canvas.width - gridWidth)/2);
// //  var gridOffsetTop = Math.floor((canvas.height - gridHeight)/2);

// //  ctx.save();
// //  ctx.translate(gridOffsetLeft, gridOffsetTop);

// //  // Grid
// //  ctx.beginPath();

// //  // Drawing horizontal lines
// //  for (var i = 0; i < 8; i++) {
// //  ctx.moveTo(i*cellSize + 0.5, 0);
// //  ctx.lineTo(i*cellSize + 0.5, cellSize*6)
// //  }
// //  // Drawing vertical lines
// //  for (var j = 0; j < 7; j++) {
// //  ctx.moveTo(0, j*cellSize + 0.5);
// //  ctx.lineTo(cellSize*7, j*cellSize + 0.5);
// //  }
// //  // Stroking to show them on the screen
// //  ctx.lineWidth = 1;
// //  ctx.strokeStyle = "#989681";
// //  ctx.stroke();

// //  // Pieces
// //  var data = [
// //  [0, 0, 0, 0, 0, 0, 0],
// //  [0, 0, 0, 0, 0, 0, 0],
// //  [0, 0, 0, 0, 0, 0, 0],
// //  [0, 0, 0, 0, 0, 0, 0],
// //  [0, 0, 0, 2, 1, 0, 0],
// //  [0, 0, 2, 1, 1, 2, 0]
// //  ];
// //  ctx.strokeStyle = "#000";
// //  ctx.lineWidth = 3; 
// //  for (var i = 0; i < data.length; i++) {
// //   for (var j = 0; j < data[i].length; j++) {
// //   var value = data[i][j];
// //   if (!value)
// //   continue;
// //   // Determine the color of the token
// //   var color;
// //   switch (value) {
// //   case 1:
// //   color = "red"; 
// //   break;
// //   case 2:
// //   color = "green";
// //   break;
// //   }
// //   // Center of the token
// //   var x = (j + 0.5)*cellSize;
// //   var y = (i + 0.5)*cellSize;

// //   // Token radius
// //   var radius = cellSize*0.4;

// //   // Center of the gradient
// //   var gradientX = x + cellSize*0.1;
// //   var gradientY = y - cellSize*0.1; 
// //   var gradient = ctx.createRadialGradient(
// //     gradientX, gradientY, cellSize*0.1, // inner circle
// //     gradientX, gradientY, radius*1.2); // outer circle
// //     gradient.addColorStop(0, "yellow"); // the color of the
// //     gradient.addColorStop(1, color); // the color of the token
// //     ctx.fillStyle = gradient;
// //     ctx.beginPath();
// //     ctx.arc(x, y, radius, 0, 2*Math.PI, true);
// //     ctx.fill();
// //     }
// //     }
// //     // Restore the state of the context, since we've changed it
// //     ctx.restore()
// // } 

// document.body.onload = init;

}());
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsibWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyB2YXIgY2FudmFzO1xuLy8gdmFyIGN0eDtcblxuLy8gZnVuY3Rpb24gaW5pdCgpIHtcbi8vICAgY2FudmFzID0gaW5pdEZ1bGxTY3JlZW5DYW52YXMoJ2NhbnZhcycpO1xuLy8gICBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbi8vICAgcmVwYWludCgpO1xuXG4vLyAgIGNvbnN0IGRhdGEgPSBbXG4vLyAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuLy8gICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwXSxcbi8vICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4vLyAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuLy8gICAgIFswLCAwLCAwLCAyLCAxLCAwLCAwXSxcbi8vICAgICBbMCwgMCwgMiwgMSwgMSwgMiwgMF0sXG4vLyAgIF07XG5cbi8vIH1cblxuLy8gZnVuY3Rpb24gaW5pdEZ1bGxTY3JlZW5DYW52YXMoY2FudmFzSWQpIHtcbi8vICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2FudmFzSWQpO1xuLy8gICByZXNpemVDYW52YXMoY2FudmFzKTtcbi8vICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uKCkge1xuLy8gICAgIHJlc2l6ZUNhbnZhcyhjYW52YXMpO1xuLy8gICB9KTtcbi8vICAgcmV0dXJuIGNhbnZhcztcbi8vIH1cblxuLy8gZnVuY3Rpb24gcmVzaXplQ2FudmFzKGNhbnZhcykgeyBcbi8vICAgY2FudmFzLndpZHRoID0gZG9jdW1lbnQud2lkdGggfHwgZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aDtcbi8vICAgY2FudmFzLmhlaWdodCA9IGRvY3VtZW50LmhlaWdodCB8fCBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodDtcbi8vICAgcmVwYWludCgpO1xuLy8gfSBcblxuLy8gZnVuY3Rpb24gcmVwYWludCgpIHtcbi8vICAgaWYgKCFjdHgpIHJldHVybjtcbi8vICAgdmFyIGxvZ28gPSBuZXcgSW1hZ2UoKTtcbi8vICAgbG9nby5zcmMgPSAnaW1hZ2VzL2NvbnRlbnQvYmcucG5nJztcbi8vICAgdmFyIHBhdHRlcm4gPSBjdHguY3JlYXRlUGF0dGVybihsb2dvLCBcInJlcGVhdFwiKTtcbi8vICBjdHguZmlsbFN0eWxlID0gcGF0dGVybjtcbi8vICBjdHgubGluZVdpZHRoID0gMTA7XG4vLyAgY3R4LmZpbGxSZWN0KDAsIDAsIDgwMCwgNjAwKTsgXG4vLyB9XG5cbi8vIGZ1bmN0aW9uIHJlb3JpZW50KCkge1xuLy8gICBsZXQgYW5nbGUgPSB3aW5kb3cub3JpZW50YXRpb247XG4vLyAgIGlmIChhbmdsZSkge1xuLy8gICAgIGNvbnN0IHJvdCA9IC1NYXRoLlBJKihhbmdsZS8xODApO1xuLy8gICAgIGN0eC50cmFuc2xhdGUoYW5nbGUgPT0gLTkwID8gY2FudmFzLndpZHRoIDogMCxcbi8vICAgICAgIGFuZ2xlID09IDkwID8gY2FudmFzLmhlaWdodCA6IDApO1xuLy8gICAgIGN0eC5yb3RhdGUocm90KTtcbi8vICAgfVxuLy8gfSBcblxuXG5cblxuXG4vLyAvLyBmdW5jdGlvbiBpbml0KCkge1xuLy8gLy8gICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG4vLyAvLyAgIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuIFxuLy8gLy8gICAvLyBCYWNrZ3JvdW5kXG4vLyAvLyAgIHZhciBncmFkaWVudCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCAwLCAwLCAzMDApO1xuLy8gLy8gICBncmFkaWVudC5hZGRDb2xvclN0b3AoMCwgXCIjZmZmYmIzXCIpO1xuLy8gLy8gICBncmFkaWVudC5hZGRDb2xvclN0b3AoMSwgXCIjZjZmNmIyXCIpO1xuLy8gLy8gICBjdHguZmlsbFN0eWxlID0gZ3JhZGllbnQ7XG4vLyAvLyAgIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuIFxuLy8gLy8gICAvLyBEcmF3aW5nIGN1cnZlc1xuLy8gLy8gICBjdHguc3Ryb2tlU3R5bGUgPSBcIiNkYWQ3YWNcIjtcbi8vIC8vICAgY3R4LmZpbGxTdHlsZSA9IFwiI2Y2ZjZiMlwiO1xuLy8gLy8gICBjdHguYmVnaW5QYXRoKCk7XG4vLyAvLyAgIGN0eC5tb3ZlVG8oNTAsIDMwMCk7XG4vLyAvLyAgIGN0eC5iZXppZXJDdXJ2ZVRvKDQ1MCwgLTUwLCAtMTUwLCAtNTAsIDI1MCwgMzAwKTtcbi8vIC8vICAgY3R4LmZpbGwoKTtcbi8vIC8vICAgY3R4LmJlZ2luUGF0aCgpO1xuLy8gLy8gICBjdHgubW92ZVRvKDUwLCAwKTtcbi8vIC8vICAgY3R4LmJlemllckN1cnZlVG8oNDUwLCAzNTAsIC0xNTAsIDM1MCwgMjUwLCAwKTtcbi8vIC8vICAgY3R4LmZpbGwoKTtcbi8vIC8vICAgLy8gQm9yZGVyXG4vLyAvLyAgIGN0eC5zdHJva2VTdHlsZSA9IFwiIzk4OTY4MVwiO1xuLy8gLy8gICBjdHgubGluZVdpZHRoID0gMjtcbi8vIC8vICAgY3R4LnN0cm9rZVJlY3QoMSwgMSwgY2FudmFzLndpZHRoIC0gMiwgY2FudmFzLmhlaWdodCAtIDIpO1xuIFxuLy8gLy8gICAvLyBHcmlkIGFuZCBwaWVjZXMgKHRyYW5zbGF0ZSB0byBjZW50ZXIgaW4gb24gQ2FudmFzKVxuLy8gLy8gICB2YXIgY2VsbFNpemUgPSA0MDtcbi8vIC8vICAgdmFyIGdyaWRXaWR0aCA9IGNlbGxTaXplKjc7XG4vLyAvLyAgIHZhciBncmlkSGVpZ2h0ID0gY2VsbFNpemUqNjsgXG5cbi8vIC8vICAgdmFyIGdyaWRPZmZzZXRMZWZ0ID0gTWF0aC5mbG9vcigoY2FudmFzLndpZHRoIC0gZ3JpZFdpZHRoKS8yKTtcbi8vIC8vICB2YXIgZ3JpZE9mZnNldFRvcCA9IE1hdGguZmxvb3IoKGNhbnZhcy5oZWlnaHQgLSBncmlkSGVpZ2h0KS8yKTtcblxuLy8gLy8gIGN0eC5zYXZlKCk7XG4vLyAvLyAgY3R4LnRyYW5zbGF0ZShncmlkT2Zmc2V0TGVmdCwgZ3JpZE9mZnNldFRvcCk7XG5cbi8vIC8vICAvLyBHcmlkXG4vLyAvLyAgY3R4LmJlZ2luUGF0aCgpO1xuXG4vLyAvLyAgLy8gRHJhd2luZyBob3Jpem9udGFsIGxpbmVzXG4vLyAvLyAgZm9yICh2YXIgaSA9IDA7IGkgPCA4OyBpKyspIHtcbi8vIC8vICBjdHgubW92ZVRvKGkqY2VsbFNpemUgKyAwLjUsIDApO1xuLy8gLy8gIGN0eC5saW5lVG8oaSpjZWxsU2l6ZSArIDAuNSwgY2VsbFNpemUqNilcbi8vIC8vICB9XG4vLyAvLyAgLy8gRHJhd2luZyB2ZXJ0aWNhbCBsaW5lc1xuLy8gLy8gIGZvciAodmFyIGogPSAwOyBqIDwgNzsgaisrKSB7XG4vLyAvLyAgY3R4Lm1vdmVUbygwLCBqKmNlbGxTaXplICsgMC41KTtcbi8vIC8vICBjdHgubGluZVRvKGNlbGxTaXplKjcsIGoqY2VsbFNpemUgKyAwLjUpO1xuLy8gLy8gIH1cbi8vIC8vICAvLyBTdHJva2luZyB0byBzaG93IHRoZW0gb24gdGhlIHNjcmVlblxuLy8gLy8gIGN0eC5saW5lV2lkdGggPSAxO1xuLy8gLy8gIGN0eC5zdHJva2VTdHlsZSA9IFwiIzk4OTY4MVwiO1xuLy8gLy8gIGN0eC5zdHJva2UoKTtcblxuLy8gLy8gIC8vIFBpZWNlc1xuLy8gLy8gIHZhciBkYXRhID0gW1xuLy8gLy8gIFswLCAwLCAwLCAwLCAwLCAwLCAwXSxcbi8vIC8vICBbMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4vLyAvLyAgWzAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuLy8gLy8gIFswLCAwLCAwLCAwLCAwLCAwLCAwXSxcbi8vIC8vICBbMCwgMCwgMCwgMiwgMSwgMCwgMF0sXG4vLyAvLyAgWzAsIDAsIDIsIDEsIDEsIDIsIDBdXG4vLyAvLyAgXTtcbi8vIC8vICBjdHguc3Ryb2tlU3R5bGUgPSBcIiMwMDBcIjtcbi8vIC8vICBjdHgubGluZVdpZHRoID0gMzsgXG4vLyAvLyAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4vLyAvLyAgIGZvciAodmFyIGogPSAwOyBqIDwgZGF0YVtpXS5sZW5ndGg7IGorKykge1xuLy8gLy8gICB2YXIgdmFsdWUgPSBkYXRhW2ldW2pdO1xuLy8gLy8gICBpZiAoIXZhbHVlKVxuLy8gLy8gICBjb250aW51ZTtcbi8vIC8vICAgLy8gRGV0ZXJtaW5lIHRoZSBjb2xvciBvZiB0aGUgdG9rZW5cbi8vIC8vICAgdmFyIGNvbG9yO1xuLy8gLy8gICBzd2l0Y2ggKHZhbHVlKSB7XG4vLyAvLyAgIGNhc2UgMTpcbi8vIC8vICAgY29sb3IgPSBcInJlZFwiOyBcbi8vIC8vICAgYnJlYWs7XG4vLyAvLyAgIGNhc2UgMjpcbi8vIC8vICAgY29sb3IgPSBcImdyZWVuXCI7XG4vLyAvLyAgIGJyZWFrO1xuLy8gLy8gICB9XG4vLyAvLyAgIC8vIENlbnRlciBvZiB0aGUgdG9rZW5cbi8vIC8vICAgdmFyIHggPSAoaiArIDAuNSkqY2VsbFNpemU7XG4vLyAvLyAgIHZhciB5ID0gKGkgKyAwLjUpKmNlbGxTaXplO1xuIFxuLy8gLy8gICAvLyBUb2tlbiByYWRpdXNcbi8vIC8vICAgdmFyIHJhZGl1cyA9IGNlbGxTaXplKjAuNDtcbiBcbi8vIC8vICAgLy8gQ2VudGVyIG9mIHRoZSBncmFkaWVudFxuLy8gLy8gICB2YXIgZ3JhZGllbnRYID0geCArIGNlbGxTaXplKjAuMTtcbi8vIC8vICAgdmFyIGdyYWRpZW50WSA9IHkgLSBjZWxsU2l6ZSowLjE7IFxuLy8gLy8gICB2YXIgZ3JhZGllbnQgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoXG4vLyAvLyAgICAgZ3JhZGllbnRYLCBncmFkaWVudFksIGNlbGxTaXplKjAuMSwgLy8gaW5uZXIgY2lyY2xlXG4vLyAvLyAgICAgZ3JhZGllbnRYLCBncmFkaWVudFksIHJhZGl1cyoxLjIpOyAvLyBvdXRlciBjaXJjbGVcbi8vIC8vICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMCwgXCJ5ZWxsb3dcIik7IC8vIHRoZSBjb2xvciBvZiB0aGVcbi8vIC8vICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMSwgY29sb3IpOyAvLyB0aGUgY29sb3Igb2YgdGhlIHRva2VuXG4vLyAvLyAgICAgY3R4LmZpbGxTdHlsZSA9IGdyYWRpZW50O1xuLy8gLy8gICAgIGN0eC5iZWdpblBhdGgoKTtcbi8vIC8vICAgICBjdHguYXJjKHgsIHksIHJhZGl1cywgMCwgMipNYXRoLlBJLCB0cnVlKTtcbi8vIC8vICAgICBjdHguZmlsbCgpO1xuLy8gLy8gICAgIH1cbi8vIC8vICAgICB9XG4vLyAvLyAgICAgLy8gUmVzdG9yZSB0aGUgc3RhdGUgb2YgdGhlIGNvbnRleHQsIHNpbmNlIHdlJ3ZlIGNoYW5nZWQgaXRcbi8vIC8vICAgICBjdHgucmVzdG9yZSgpXG4vLyAvLyB9IFxuXG4vLyBkb2N1bWVudC5ib2R5Lm9ubG9hZCA9IGluaXQ7Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsInByZUV4aXN0aW5nQ29tbWVudCI6Ii8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJanB1ZFd4c0xDSnpiM1Z5WTJWeklqcGJJaTlWYzJWeWN5OWhjblJsYld0aGJHOWxkaTlYWldKRGIyUnBibWN2WjJGdFpTOXpjbU12YzJOeWFYQjBjeTl0WVdsdUxtcHpJbDBzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWk4dklIWmhjaUJqWVc1MllYTTdYRzR2THlCMllYSWdZM1I0TzF4dVhHNHZMeUJtZFc1amRHbHZiaUJwYm1sMEtDa2dlMXh1THk4Z0lDQmpZVzUyWVhNZ1BTQnBibWwwUm5Wc2JGTmpjbVZsYmtOaGJuWmhjeWduWTJGdWRtRnpKeWs3WEc0dkx5QWdJR04wZUNBOUlHTmhiblpoY3k1blpYUkRiMjUwWlhoMEtDY3laQ2NwTzF4dUx5OGdJQ0J5WlhCaGFXNTBLQ2s3WEc1Y2JpOHZJQ0FnWTI5dWMzUWdaR0YwWVNBOUlGdGNiaTh2SUNBZ0lDQmJNQ3dnTUN3Z01Dd2dNQ3dnTUN3Z01Dd2dNRjBzWEc0dkx5QWdJQ0FnV3pBc0lEQXNJREFzSURBc0lEQXNJREFzSURCZExGeHVMeThnSUNBZ0lGc3dMQ0F3TENBd0xDQXdMQ0F3TENBd0xDQXdYU3hjYmk4dklDQWdJQ0JiTUN3Z01Dd2dNQ3dnTUN3Z01Dd2dNQ3dnTUYwc1hHNHZMeUFnSUNBZ1d6QXNJREFzSURBc0lESXNJREVzSURBc0lEQmRMRnh1THk4Z0lDQWdJRnN3TENBd0xDQXlMQ0F4TENBeExDQXlMQ0F3WFN4Y2JpOHZJQ0FnWFR0Y2JseHVMeThnZlZ4dVhHNHZMeUJtZFc1amRHbHZiaUJwYm1sMFJuVnNiRk5qY21WbGJrTmhiblpoY3loallXNTJZWE5KWkNrZ2UxeHVMeThnSUNCamIyNXpkQ0JqWVc1MllYTWdQU0JrYjJOMWJXVnVkQzVuWlhSRmJHVnRaVzUwUW5sSlpDaGpZVzUyWVhOSlpDazdYRzR2THlBZ0lISmxjMmw2WlVOaGJuWmhjeWhqWVc1MllYTXBPMXh1THk4Z0lDQjNhVzVrYjNjdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnbmNtVnphWHBsSnl3Z1puVnVZM1JwYjI0b0tTQjdYRzR2THlBZ0lDQWdjbVZ6YVhwbFEyRnVkbUZ6S0dOaGJuWmhjeWs3WEc0dkx5QWdJSDBwTzF4dUx5OGdJQ0J5WlhSMWNtNGdZMkZ1ZG1Gek8xeHVMeThnZlZ4dVhHNHZMeUJtZFc1amRHbHZiaUJ5WlhOcGVtVkRZVzUyWVhNb1kyRnVkbUZ6S1NCN0lGeHVMeThnSUNCallXNTJZWE11ZDJsa2RHZ2dQU0JrYjJOMWJXVnVkQzUzYVdSMGFDQjhmQ0JrYjJOMWJXVnVkQzVpYjJSNUxtTnNhV1Z1ZEZkcFpIUm9PMXh1THk4Z0lDQmpZVzUyWVhNdWFHVnBaMmgwSUQwZ1pHOWpkVzFsYm5RdWFHVnBaMmgwSUh4OElHUnZZM1Z0Wlc1MExtSnZaSGt1WTJ4cFpXNTBTR1ZwWjJoME8xeHVMeThnSUNCeVpYQmhhVzUwS0NrN1hHNHZMeUI5SUZ4dVhHNHZMeUJtZFc1amRHbHZiaUJ5WlhCaGFXNTBLQ2tnZTF4dUx5OGdJQ0JwWmlBb0lXTjBlQ2tnY21WMGRYSnVPMXh1THk4Z0lDQjJZWElnYkc5bmJ5QTlJRzVsZHlCSmJXRm5aU2dwTzF4dUx5OGdJQ0JzYjJkdkxuTnlZeUE5SUNkcGJXRm5aWE12WTI5dWRHVnVkQzlpWnk1d2JtY25PMXh1THk4Z0lDQjJZWElnY0dGMGRHVnliaUE5SUdOMGVDNWpjbVZoZEdWUVlYUjBaWEp1S0d4dloyOHNJRndpY21Wd1pXRjBYQ0lwTzF4dUx5OGdJR04wZUM1bWFXeHNVM1I1YkdVZ1BTQndZWFIwWlhKdU8xeHVMeThnSUdOMGVDNXNhVzVsVjJsa2RHZ2dQU0F4TUR0Y2JpOHZJQ0JqZEhndVptbHNiRkpsWTNRb01Dd2dNQ3dnT0RBd0xDQTJNREFwT3lCY2JpOHZJSDFjYmx4dUx5OGdablZ1WTNScGIyNGdjbVZ2Y21sbGJuUW9LU0I3WEc0dkx5QWdJR3hsZENCaGJtZHNaU0E5SUhkcGJtUnZkeTV2Y21sbGJuUmhkR2x2Ymp0Y2JpOHZJQ0FnYVdZZ0tHRnVaMnhsS1NCN1hHNHZMeUFnSUNBZ1kyOXVjM1FnY205MElEMGdMVTFoZEdndVVFa3FLR0Z1WjJ4bEx6RTRNQ2s3WEc0dkx5QWdJQ0FnWTNSNExuUnlZVzV6YkdGMFpTaGhibWRzWlNBOVBTQXRPVEFnUHlCallXNTJZWE11ZDJsa2RHZ2dPaUF3TEZ4dUx5OGdJQ0FnSUNBZ1lXNW5iR1VnUFQwZ09UQWdQeUJqWVc1MllYTXVhR1ZwWjJoMElEb2dNQ2s3WEc0dkx5QWdJQ0FnWTNSNExuSnZkR0YwWlNoeWIzUXBPMXh1THk4Z0lDQjlYRzR2THlCOUlGeHVYRzVjYmx4dVhHNWNiaTh2SUM4dklHWjFibU4wYVc5dUlHbHVhWFFvS1NCN1hHNHZMeUF2THlBZ0lIWmhjaUJqWVc1MllYTWdQU0JrYjJOMWJXVnVkQzVuWlhSRmJHVnRaVzUwUW5sSlpDaGNJbU5oYm5aaGMxd2lLVHRjYmk4dklDOHZJQ0FnZG1GeUlHTjBlQ0E5SUdOaGJuWmhjeTVuWlhSRGIyNTBaWGgwS0Z3aU1tUmNJaWs3WEc0Z1hHNHZMeUF2THlBZ0lDOHZJRUpoWTJ0bmNtOTFibVJjYmk4dklDOHZJQ0FnZG1GeUlHZHlZV1JwWlc1MElEMGdZM1I0TG1OeVpXRjBaVXhwYm1WaGNrZHlZV1JwWlc1MEtEQXNJREFzSURBc0lETXdNQ2s3WEc0dkx5QXZMeUFnSUdkeVlXUnBaVzUwTG1Ga1pFTnZiRzl5VTNSdmNDZ3dMQ0JjSWlObVptWmlZak5jSWlrN1hHNHZMeUF2THlBZ0lHZHlZV1JwWlc1MExtRmtaRU52Ykc5eVUzUnZjQ2d4TENCY0lpTm1ObVkyWWpKY0lpazdYRzR2THlBdkx5QWdJR04wZUM1bWFXeHNVM1I1YkdVZ1BTQm5jbUZrYVdWdWREdGNiaTh2SUM4dklDQWdZM1I0TG1acGJHeFNaV04wS0RBc0lEQXNJR05oYm5aaGN5NTNhV1IwYUN3Z1kyRnVkbUZ6TG1obGFXZG9kQ2s3WEc0Z1hHNHZMeUF2THlBZ0lDOHZJRVJ5WVhkcGJtY2dZM1Z5ZG1WelhHNHZMeUF2THlBZ0lHTjBlQzV6ZEhKdmEyVlRkSGxzWlNBOUlGd2lJMlJoWkRkaFkxd2lPMXh1THk4Z0x5OGdJQ0JqZEhndVptbHNiRk4wZVd4bElEMGdYQ0lqWmpabU5tSXlYQ0k3WEc0dkx5QXZMeUFnSUdOMGVDNWlaV2RwYmxCaGRHZ29LVHRjYmk4dklDOHZJQ0FnWTNSNExtMXZkbVZVYnlnMU1Dd2dNekF3S1R0Y2JpOHZJQzh2SUNBZ1kzUjRMbUpsZW1sbGNrTjFjblpsVkc4b05EVXdMQ0F0TlRBc0lDMHhOVEFzSUMwMU1Dd2dNalV3TENBek1EQXBPMXh1THk4Z0x5OGdJQ0JqZEhndVptbHNiQ2dwTzF4dUx5OGdMeThnSUNCamRIZ3VZbVZuYVc1UVlYUm9LQ2s3WEc0dkx5QXZMeUFnSUdOMGVDNXRiM1psVkc4b05UQXNJREFwTzF4dUx5OGdMeThnSUNCamRIZ3VZbVY2YVdWeVEzVnlkbVZVYnlnME5UQXNJRE0xTUN3Z0xURTFNQ3dnTXpVd0xDQXlOVEFzSURBcE8xeHVMeThnTHk4Z0lDQmpkSGd1Wm1sc2JDZ3BPMXh1THk4Z0x5OGdJQ0F2THlCQ2IzSmtaWEpjYmk4dklDOHZJQ0FnWTNSNExuTjBjbTlyWlZOMGVXeGxJRDBnWENJak9UZzVOamd4WENJN1hHNHZMeUF2THlBZ0lHTjBlQzVzYVc1bFYybGtkR2dnUFNBeU8xeHVMeThnTHk4Z0lDQmpkSGd1YzNSeWIydGxVbVZqZENneExDQXhMQ0JqWVc1MllYTXVkMmxrZEdnZ0xTQXlMQ0JqWVc1MllYTXVhR1ZwWjJoMElDMGdNaWs3WEc0Z1hHNHZMeUF2THlBZ0lDOHZJRWR5YVdRZ1lXNWtJSEJwWldObGN5QW9kSEpoYm5Oc1lYUmxJSFJ2SUdObGJuUmxjaUJwYmlCdmJpQkRZVzUyWVhNcFhHNHZMeUF2THlBZ0lIWmhjaUJqWld4c1UybDZaU0E5SURRd08xeHVMeThnTHk4Z0lDQjJZWElnWjNKcFpGZHBaSFJvSUQwZ1kyVnNiRk5wZW1VcU56dGNiaTh2SUM4dklDQWdkbUZ5SUdkeWFXUklaV2xuYUhRZ1BTQmpaV3hzVTJsNlpTbzJPeUJjYmx4dUx5OGdMeThnSUNCMllYSWdaM0pwWkU5bVpuTmxkRXhsWm5RZ1BTQk5ZWFJvTG1ac2IyOXlLQ2hqWVc1MllYTXVkMmxrZEdnZ0xTQm5jbWxrVjJsa2RHZ3BMeklwTzF4dUx5OGdMeThnSUhaaGNpQm5jbWxrVDJabWMyVjBWRzl3SUQwZ1RXRjBhQzVtYkc5dmNpZ29ZMkZ1ZG1GekxtaGxhV2RvZENBdElHZHlhV1JJWldsbmFIUXBMeklwTzF4dVhHNHZMeUF2THlBZ1kzUjRMbk5oZG1Vb0tUdGNiaTh2SUM4dklDQmpkSGd1ZEhKaGJuTnNZWFJsS0dkeWFXUlBabVp6WlhSTVpXWjBMQ0JuY21sa1QyWm1jMlYwVkc5d0tUdGNibHh1THk4Z0x5OGdJQzh2SUVkeWFXUmNiaTh2SUM4dklDQmpkSGd1WW1WbmFXNVFZWFJvS0NrN1hHNWNiaTh2SUM4dklDQXZMeUJFY21GM2FXNW5JR2h2Y21sNmIyNTBZV3dnYkdsdVpYTmNiaTh2SUM4dklDQm1iM0lnS0haaGNpQnBJRDBnTURzZ2FTQThJRGc3SUdrckt5a2dlMXh1THk4Z0x5OGdJR04wZUM1dGIzWmxWRzhvYVNwalpXeHNVMmw2WlNBcklEQXVOU3dnTUNrN1hHNHZMeUF2THlBZ1kzUjRMbXhwYm1WVWJ5aHBLbU5sYkd4VGFYcGxJQ3NnTUM0MUxDQmpaV3hzVTJsNlpTbzJLVnh1THk4Z0x5OGdJSDFjYmk4dklDOHZJQ0F2THlCRWNtRjNhVzVuSUhabGNuUnBZMkZzSUd4cGJtVnpYRzR2THlBdkx5QWdabTl5SUNoMllYSWdhaUE5SURBN0lHb2dQQ0EzT3lCcUt5c3BJSHRjYmk4dklDOHZJQ0JqZEhndWJXOTJaVlJ2S0RBc0lHb3FZMlZzYkZOcGVtVWdLeUF3TGpVcE8xeHVMeThnTHk4Z0lHTjBlQzVzYVc1bFZHOG9ZMlZzYkZOcGVtVXFOeXdnYWlwalpXeHNVMmw2WlNBcklEQXVOU2s3WEc0dkx5QXZMeUFnZlZ4dUx5OGdMeThnSUM4dklGTjBjbTlyYVc1bklIUnZJSE5vYjNjZ2RHaGxiU0J2YmlCMGFHVWdjMk55WldWdVhHNHZMeUF2THlBZ1kzUjRMbXhwYm1WWGFXUjBhQ0E5SURFN1hHNHZMeUF2THlBZ1kzUjRMbk4wY205clpWTjBlV3hsSUQwZ1hDSWpPVGc1TmpneFhDSTdYRzR2THlBdkx5QWdZM1I0TG5OMGNtOXJaU2dwTzF4dVhHNHZMeUF2THlBZ0x5OGdVR2xsWTJWelhHNHZMeUF2THlBZ2RtRnlJR1JoZEdFZ1BTQmJYRzR2THlBdkx5QWdXekFzSURBc0lEQXNJREFzSURBc0lEQXNJREJkTEZ4dUx5OGdMeThnSUZzd0xDQXdMQ0F3TENBd0xDQXdMQ0F3TENBd1hTeGNiaTh2SUM4dklDQmJNQ3dnTUN3Z01Dd2dNQ3dnTUN3Z01Dd2dNRjBzWEc0dkx5QXZMeUFnV3pBc0lEQXNJREFzSURBc0lEQXNJREFzSURCZExGeHVMeThnTHk4Z0lGc3dMQ0F3TENBd0xDQXlMQ0F4TENBd0xDQXdYU3hjYmk4dklDOHZJQ0JiTUN3Z01Dd2dNaXdnTVN3Z01Td2dNaXdnTUYxY2JpOHZJQzh2SUNCZE8xeHVMeThnTHk4Z0lHTjBlQzV6ZEhKdmEyVlRkSGxzWlNBOUlGd2lJekF3TUZ3aU8xeHVMeThnTHk4Z0lHTjBlQzVzYVc1bFYybGtkR2dnUFNBek95QmNiaTh2SUM4dklDQm1iM0lnS0haaGNpQnBJRDBnTURzZ2FTQThJR1JoZEdFdWJHVnVaM1JvT3lCcEt5c3BJSHRjYmk4dklDOHZJQ0FnWm05eUlDaDJZWElnYWlBOUlEQTdJR29nUENCa1lYUmhXMmxkTG14bGJtZDBhRHNnYWlzcktTQjdYRzR2THlBdkx5QWdJSFpoY2lCMllXeDFaU0E5SUdSaGRHRmJhVjFiYWwwN1hHNHZMeUF2THlBZ0lHbG1JQ2doZG1Gc2RXVXBYRzR2THlBdkx5QWdJR052Ym5ScGJuVmxPMXh1THk4Z0x5OGdJQ0F2THlCRVpYUmxjbTFwYm1VZ2RHaGxJR052Ykc5eUlHOW1JSFJvWlNCMGIydGxibHh1THk4Z0x5OGdJQ0IyWVhJZ1kyOXNiM0k3WEc0dkx5QXZMeUFnSUhOM2FYUmphQ0FvZG1Gc2RXVXBJSHRjYmk4dklDOHZJQ0FnWTJGelpTQXhPbHh1THk4Z0x5OGdJQ0JqYjJ4dmNpQTlJRndpY21Wa1hDSTdJRnh1THk4Z0x5OGdJQ0JpY21WaGF6dGNiaTh2SUM4dklDQWdZMkZ6WlNBeU9seHVMeThnTHk4Z0lDQmpiMnh2Y2lBOUlGd2laM0psWlc1Y0lqdGNiaTh2SUM4dklDQWdZbkpsWVdzN1hHNHZMeUF2THlBZ0lIMWNiaTh2SUM4dklDQWdMeThnUTJWdWRHVnlJRzltSUhSb1pTQjBiMnRsYmx4dUx5OGdMeThnSUNCMllYSWdlQ0E5SUNocUlDc2dNQzQxS1NwalpXeHNVMmw2WlR0Y2JpOHZJQzh2SUNBZ2RtRnlJSGtnUFNBb2FTQXJJREF1TlNrcVkyVnNiRk5wZW1VN1hHNGdYRzR2THlBdkx5QWdJQzh2SUZSdmEyVnVJSEpoWkdsMWMxeHVMeThnTHk4Z0lDQjJZWElnY21Ga2FYVnpJRDBnWTJWc2JGTnBlbVVxTUM0ME8xeHVJRnh1THk4Z0x5OGdJQ0F2THlCRFpXNTBaWElnYjJZZ2RHaGxJR2R5WVdScFpXNTBYRzR2THlBdkx5QWdJSFpoY2lCbmNtRmthV1Z1ZEZnZ1BTQjRJQ3NnWTJWc2JGTnBlbVVxTUM0eE8xeHVMeThnTHk4Z0lDQjJZWElnWjNKaFpHbGxiblJaSUQwZ2VTQXRJR05sYkd4VGFYcGxLakF1TVRzZ1hHNHZMeUF2THlBZ0lIWmhjaUJuY21Ga2FXVnVkQ0E5SUdOMGVDNWpjbVZoZEdWU1lXUnBZV3hIY21Ga2FXVnVkQ2hjYmk4dklDOHZJQ0FnSUNCbmNtRmthV1Z1ZEZnc0lHZHlZV1JwWlc1MFdTd2dZMlZzYkZOcGVtVXFNQzR4TENBdkx5QnBibTVsY2lCamFYSmpiR1ZjYmk4dklDOHZJQ0FnSUNCbmNtRmthV1Z1ZEZnc0lHZHlZV1JwWlc1MFdTd2djbUZrYVhWektqRXVNaWs3SUM4dklHOTFkR1Z5SUdOcGNtTnNaVnh1THk4Z0x5OGdJQ0FnSUdkeVlXUnBaVzUwTG1Ga1pFTnZiRzl5VTNSdmNDZ3dMQ0JjSW5sbGJHeHZkMXdpS1RzZ0x5OGdkR2hsSUdOdmJHOXlJRzltSUhSb1pWeHVMeThnTHk4Z0lDQWdJR2R5WVdScFpXNTBMbUZrWkVOdmJHOXlVM1J2Y0NneExDQmpiMnh2Y2lrN0lDOHZJSFJvWlNCamIyeHZjaUJ2WmlCMGFHVWdkRzlyWlc1Y2JpOHZJQzh2SUNBZ0lDQmpkSGd1Wm1sc2JGTjBlV3hsSUQwZ1ozSmhaR2xsYm5RN1hHNHZMeUF2THlBZ0lDQWdZM1I0TG1KbFoybHVVR0YwYUNncE8xeHVMeThnTHk4Z0lDQWdJR04wZUM1aGNtTW9lQ3dnZVN3Z2NtRmthWFZ6TENBd0xDQXlLazFoZEdndVVFa3NJSFJ5ZFdVcE8xeHVMeThnTHk4Z0lDQWdJR04wZUM1bWFXeHNLQ2s3WEc0dkx5QXZMeUFnSUNBZ2ZWeHVMeThnTHk4Z0lDQWdJSDFjYmk4dklDOHZJQ0FnSUNBdkx5QlNaWE4wYjNKbElIUm9aU0J6ZEdGMFpTQnZaaUIwYUdVZ1kyOXVkR1Y0ZEN3Z2MybHVZMlVnZDJVbmRtVWdZMmhoYm1kbFpDQnBkRnh1THk4Z0x5OGdJQ0FnSUdOMGVDNXlaWE4wYjNKbEtDbGNiaTh2SUM4dklIMGdYRzVjYmk4dklHUnZZM1Z0Wlc1MExtSnZaSGt1YjI1c2IyRmtJRDBnYVc1cGREc2lYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPMEZCUVVFN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdJbjA9In0=
