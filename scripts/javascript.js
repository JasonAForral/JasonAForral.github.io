var svgContainer = d3.select('#demo').append('svg');

svgContainer
  .attr('width', 360)
  .attr('height', 360);

var circles = svgContainer.selectAll('circle')
  .data([60, 180, 300])
  .enter()
  .append('circle');
  
var circleAttributes = circles
  .attr('cx', function (d) {return d;})
  .attr('cy', 180)
  .attr('r', 45);

var angle = 0;
var lastD = Date.now();

function animation() {
  var d = new Date();
  angle += (Date.now() - lastD) * 0.05;
  if (angle > 360) {
    angle -= 360;
  }
  lastD = Date.now();
  document.getElementById('date').innerHTML = d.toDateString();
  document.getElementById('time').innerHTML = d.toLocaleTimeString();
  var radians = (angle / 180 * Math.PI);
  circleAttributes.attr('cy', function (d) {
    return Math.sin( d - radians) * 60 + 180;
  });
}

var repeater = setInterval(animation, 20);