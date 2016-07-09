$('body').scrollspy({target: ".navbar"})

$(window).on('resize', function() {
  var win = $(window).height();
  $('.section').css('min-height', win+10);
  //$('.section').height(win);
  //$('section').css('padding-top', win/4);
});

$(window).on('load', function() {
  var win = $(window).height();
  $('.section').css('min-height', win+10);
  //$('.section').height(win);
  //$('section').css('padding-top', win/4);
});