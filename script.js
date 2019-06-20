$(document).ready(function () {
  drawPaths();
});


var width = window.innerWidth;
var height = window.innerHeight-150;
var spacing = 5;

var hue = 0;
var saturation = 0;

var fill1 = "hsl("+hue+", "+saturation+"%, 50%)";
var fill2 = "hsl("+hue+", "+saturation+"%, 55%)";
var bgColor = "background-color: hsl("+hue+", "+saturation+"%, 45%)";

var varsX = [];
var varsY = [];
for (var i = 0; i<12; i++) {
    varsX[i] = Math.round((Math.random()*width));
    varsY[i] = Math.round((Math.random()*height));
 }

$('#btn').on('click', function () {
  for (var i = 0; i<12; i++) {
    varsX[i] = Math.round(Math.random()*width);
    varsY[i] = Math.round(Math.random()*height);
  }
  width = window.innerWidth;
  height = window.innerHeight-150;
  hue = Math.round(Math.random()*360);
  saturation = Math.round(Math.random()*100);
  fill1 = "hsl("+hue+", "+saturation+"%, 50%)";
  fill2 = "hsl("+hue+", "+saturation+"%, 55%)";
  bgColor = "background-color: hsl("+hue+", "+saturation+"%, 45%)";
  $('#container').html("");
  drawPaths();
});

function drawPaths() {
  var paths = [
    ["M", varsX[0]/10, height, "L", varsX[0]/8, height, "C", varsX[1]/3, varsY[0]/2, width*2/3, varsX[2], width, varsX[3], "L", width, height, "Z"],
    ["M", 0, varsY[1], "C", varsX[4]/2, varsY[2], width*2/3, varsY[3], width, varsY[4]/10, "L", width, 0, "L", 0, 0, "Z"]];

  var d1 = paths[0].join(" ");
  var d2 = paths[1].join(" ");

  var cont = document.getElementById('container');

  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", width);
  svg.setAttribute("height", height);
  svg.setAttribute("style", bgColor);
  svg.setAttribute("id", "mysvg");

  for (var k = 0; k < width/spacing; k++) {
    var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", k*spacing);
    line.setAttribute("y1", 0);
    line.setAttribute("x2", k*spacing);
    line.setAttribute("y2", height);
    line.setAttribute("style", "stroke:rgba(0,0,0, 0.05);stroke-width:1);");
  //  svg.appendChild(line);
  }
  
  
  var path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path1.setAttributeNS(null, "d", d1);
  path1.setAttributeNS(null, "stroke", "rgba(0,0,0,0.05)"); 
  path1.setAttributeNS(null, "stroke-width", 1);  
  path1.setAttributeNS(null, "opacity", 1);  
  path1.setAttributeNS(null, "fill", fill1);
  svg.appendChild(path1);

  var path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path2.setAttributeNS(null, "d", d2);
  path2.setAttributeNS(null, "stroke", "rgba(0,0,0,0.05)"); 
  path2.setAttributeNS(null, "stroke-width", 1);  
  path2.setAttributeNS(null, "opacity", 1);  
  path2.setAttributeNS(null, "fill", fill2);
  svg.appendChild(path2);

  cont.appendChild(svg);
  
}
