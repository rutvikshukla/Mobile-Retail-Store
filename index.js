var circle = document.getElementById('circle');
var up = document.getElementById('upBtn');
var down = document.getElementById('downBtn');

var rotate = circle.style.transform;
var rotateSum;

up.onclick = function () {
  rotateSum = rotate + "rotate(-90deg)";
  circle.style.transform = rotateSum;
  rotate = rotateSum;
}

down.onclick = function () {
  rotateSum = rotate + "rotate(90deg)";
  circle.style.transform = rotateSum;
  rotate = rotateSum;
}
