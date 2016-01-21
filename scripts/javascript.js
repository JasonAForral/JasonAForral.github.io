
function click() {
  var d = new Date();
  document.getElementById('date').innerHTML = d.toDateString();
  document.getElementById('time').innerHTML = d.toLocaleTimeString();
}

var repeater = setInterval(click, 20);