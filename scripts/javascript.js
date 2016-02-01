var svgContainer = d3.select('#demo').append('svg');

svgContainer
  .attr('width', 360)
  .attr('height', 180);

var circles = svgContainer.selectAll('circle')
  .data([60, 180, 300])
  .enter()
  .append('circle');
  
var circleAttributes = circles
  .attr('cx', function (d) {return d;})
  .attr('cy', 180)
  .attr('r', 20);

var angle = 0;
var lastD = Date.now();

function animation() {
  var d = new Date();
  angle += (Date.now() - lastD) * 0.05;
  if (angle > 360) {
    angle -= 360;
  }
  lastD = Date.now();
  
  document.getElementById('time').innerHTML = d.toLocaleTimeString();
  var radians = (angle / 180 * Math.PI);
  circleAttributes.attr('cy', function (d) {
    return Math.sin( d - radians) * 60 + 90;
  });
}


var repeater = setInterval(animation, 20);

function displayDate() {
var now = new Date();

var days = new Array('Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday');

var months = new Array('January','February','March','April','May','June','July','August','September','October','November','December');

var date = ((now.getDate()<10) ? "0" : "")+ now.getDate();

function fourdigits(number)	{
  return (number < 1000) ? number + 1900 : number;
}
return days[now.getDay()] + ", " +
         months[now.getMonth()] + " " +
         date + ", " +
         (fourdigits(now.getYear())) ;

}

document.getElementById('date').innerHTML = displayDate();

$(document).foundation();