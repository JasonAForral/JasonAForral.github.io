(() => {

let portfolio = [
  {
    name: "Tribute Page",
    url: "http://codepen.io/Tsinoyboi/full/rxbqQg",
    img: "images/Tribute%20Page.png",
  },
  {
    name: "Random Quote Machine",
    url: "http://codepen.io/Tsinoyboi/full/eJzxEZ",
    img: "images/RandomQuoteMachine.png",
  },
  {
    name: "Weather App",
    url: "http://codepen.io/Tsinoyboi/full/rxboXK",
    img: "images/WeatherApp.png",
  },
  {
    name: "Wikiquery",
    url: "http://codepen.io/Tsinoyboi/full/OMdrqg",
    img: "images/Wikiquery.png",
  },
  {
    name: "Twitch Channels",
    url: "http://codepen.io/Tsinoyboi/full/LGaVRG",
    img: "images/Twitch%20Channels.png",
  },
  {
    name: "Calculator SVG",
    url: "http://codepen.io/Tsinoyboi/full/ZQdQZy",
    img: "images/CalculatorSVG.png",
  },
  {
    name: "Pomodoro Clock",
    url: "",
    img: "",
  },
  {
    name: "Tic Tac Toe",
    url: "",
    img: "",
  },
  {
    name: "Simon's Sassy Babel",
    url: "",
    img: "",
  },
]



  $('body').scrollspy({ target: ".navbar" })

  $(window).on('resize', function () {
    var win = $(window).height();
    $('.section').css('min-height', win + 10);
    //$('.section').height(win);
    //$('section').css('padding-top', win/4);
  });

  $(window).on('load', function () {
    var win = $(window).height();
    $('.section').css('min-height', win + 10);
    //$('.section').height(win);
    //$('section').css('padding-top', win/4);
  });

})()