$('a').click(function() {
  $('html, body').animate(
    {
      scrollTop: $($(this).attr('href')).offset().top
    },
    1000
  );
  return false;
});

// (function() {
//   var canvas = document.getElementById('canvas');
//   var c = canvas.getContext('2d');
//
//   window.addEventListener('resize', resizeCanvas, false);
//
//   function resizeCanvas() {
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//
//     drawCircle();
//   }
//   resizeCanvas();
//
//   function drawCircle() {
//     c.strokeStyle = '#2b2e2e';
//     c.beginPath();
//     c.arc(120, 80, 30, 0, Math.PI * 2);
//     c.stroke();
//
//     c.strokeStyle = '#28ABA5';
//     c.beginPath();
//     c.arc(250, 250, 20, 0, Math.PI * 2);
//     c.stroke();
//
//     c.strokeStyle = '#007154';
//     c.beginPath();
//     c.arc(350, 220, 30, 0, Math.PI * 2);
//     c.stroke();
//
//     c.strokeStyle = '#E67811';
//     c.beginPath();
//     c.arc(850, 400, 25, 0, Math.PI * 2);
//     c.stroke();
//
//     c.strokeStyle = '#872536';
//     c.beginPath();
//     c.arc(600, 90, 40, 0, Math.PI * 2);
//     c.stroke();
//
//     c.strokeStyle = '#007154';
//     c.beginPath();
//     c.arc(40, 180, 30, 0, Math.PI * 2);
//     c.stroke();
//
//     c.strokeStyle = '#872536';
//     c.beginPath();
//     c.arc(920, 380, 20, 0, Math.PI * 2);
//     c.stroke();
//
//     c.strokeStyle = '#872536';
//     c.beginPath();
//     c.arc(780, 480, 40, 0, Math.PI * 2);
//     c.stroke();
//
//     c.strokeStyle = '#E67811';
//     c.beginPath();
//     c.arc(640, 650, 30, 0, Math.PI * 2);
//     c.stroke();
//
//     c.strokeStyle = '#E67811';
//     c.beginPath();
//     c.arc(1000, 100, 20, 0, Math.PI * 2);
//     c.stroke();
//   }
// })();

// (function(){
//   emailjs.init("user_o7aYTKoYf2yMHRYZOpZBm");
// })();
