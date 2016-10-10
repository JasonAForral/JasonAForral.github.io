(() => {

  let portfolioData = [
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
    // {
    //   name: "Weather App",
    //   url: "http://codepen.io/Tsinoyboi/full/rxboXK",
    //   img: "images/WeatherApp.png",
    // },
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
      url: "http://codepen.io/Tsinoyboi/full/NxppRG",
      img: "images/PomodoroClock.png",
    },
    {
      name: "Tic Tac Toe",
      url: "http://codepen.io/Tsinoyboi/full/pgLEYV",
      img: "images/TicTacToe.png",
    },
    {
      name: "Simon's Sassy Babel",
      url: "http://codepen.io/Tsinoyboi/full/adKGJL",
      img: "images/Simon's%20Sassy%20Babel.png",
    },
  ]

  let portfolioContainer = document.getElementById('portfolioContainer')

  const cEle = tag => document.createElement(tag)

  function populatePortfolioItem(data) {
    let item = document.createElement('div'),
      link = cEle('a'),
      img = cEle('img'),
      h3 = cEle('h3'),
      caption = cEle('div')

    item.className = 'thumbnail col-xs-12 col-sm-6 col-md-4'
    link.href = data.url;
    link.target = '_blank'
    img.src = data.img;
    h3.textContent = img.title = img.alt = data.name;
    caption.className = 'caption'

    item.appendChild(link).appendChild(img)
    link.appendChild(caption).appendChild(h3)

    portfolioContainer.appendChild(item)

    // let $div = $('<div>')
    // .attr('class', 'thumbnail col-xs-12 col-sm-6 col-md-4')
    // .appendTo('body')

    // let $anchor = $('<a>')
    // .attr('href', data.url)
    // .appendTo($div)

    // $('<img>')
    // .attr('src', data.img)
    // .attr('title', data.name)
    // .attr('alt', data.name)
    // .appendTo($anchor)


  }

  function populatePortfolio(data) {
    for (let i = 0; i < data.length; ++i) {
      populatePortfolioItem(data[i])
    }
  }

  populatePortfolio(portfolioData);


  $('body').scrollspy({ target: ".navbar" })

  $(window).on('resize', function () {
    let win = $(window).height();
    $('.section').css('min-height', win + 10);
    //$('.section').height(win);
    //$('section').css('padding-top', win/4);
  });

  $(window).on('load', function () {
    let win = $(window).height();
    $('.section').css('min-height', win + 10);
    //$('.section').height(win);
    //$('section').css('padding-top', win/4);
  });

})()