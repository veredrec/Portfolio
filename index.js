$('a').click(function(){
  $('html, body').animate({
    scrollTop: $( $(this).attr('href') ).offset().top
  }, 1000);
  return false;
});

// (function(){
//   emailjs.init("user_o7aYTKoYf2yMHRYZOpZBm");
// })();
