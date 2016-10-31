var $portfolio = $('#portfolioContainer')

var portfolioData = [
  {
    name: "Tribute Page",
    url: "http://codepen.io/Tsinoyboi/full/rxbqQg",
    img: "images/Tribute%20Page.png",
    libraries: [],
  },
  {
    name: "Random Quote Machine",
    url: "http://codepen.io/Tsinoyboi/full/eJzxEZ",
    img: "images/RandomQuoteMachine.png",
    libraries: [],
  },
  // {
  //   name: "Weather App",
  //   url: "http://codepen.io/Tsinoyboi/full/rxboXK",
  //   img: "images/WeatherApp.png",
  //   libraries: [],
  // },
  {
    name: "Wikiquery",
    url: "http://codepen.io/Tsinoyboi/full/OMdrqg",
    img: "images/Wikiquery.png",
    libraries: [],
  },
  {
    name: "Twitch Channels",
    url: "http://codepen.io/Tsinoyboi/full/LGaVRG",
    img: "images/Twitch%20Channels.png",
    libraries: [],
  },
  {
    name: "Calculator SVG",
    url: "http://codepen.io/Tsinoyboi/full/ZQdQZy",
    img: "images/CalculatorSVG.png",
    libraries: [],
  },
  {
    name: "Pomodoro Clock",
    url: "http://codepen.io/Tsinoyboi/full/NxppRG",
    img: "images/PomodoroClock.png",
    libraries: [],
  },
  {
    name: "Tic Tac Toe",
    url: "http://codepen.io/Tsinoyboi/full/pgLEYV",
    img: "images/TicTacToe.png",
    libraries: [],
  },
  {
    name: "Simon's Sassy Babel",
    url: "http://codepen.io/Tsinoyboi/full/adKGJL",
    img: "images/Simon's%20Sassy%20Babel.png",
    libraries: [],
  },
]

function populatePortfolioItem(data) {
  var $item = $('<div>').attr('class', 'thumbnail col-xs-12 col-sm-6 col-md-4')
    .appendTo($portfolio)

  var $anchor = $('<a>')
    .attr('href', data.url)
    .attr('target', '_blank')
    .appendTo($item)

  $('<img>').attr({
    class: 'thumbnail-img',
    src: data.img,
    title: data.name,
    alt: data.name
  })
    .appendTo($anchor)

  var $caption = $('<div>').attr('class', 'caption').appendTo($anchor)

  $('<h3>').text(data.name).appendTo($caption)
}

function populatePortfolio(data) {
  for (var i = 0; i < data.length; ++i) {
    populatePortfolioItem(data[i])
  }
}

populatePortfolio(portfolioData)
