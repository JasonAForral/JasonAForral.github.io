document.getElementById('main').innerHTML = 'Hello World!';

function click() {
  var d = new Date();
  document.getElementById('date').innerHTML = d.toDateString();
  document.getElementById('time').innerHTML = d.toLocaleTimeString();
}

//document.getElementById("button").addEventListener("click", click);

var repeater = setInterval(click, 20);