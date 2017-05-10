document.querySelector('.test').onmousewheel = function(event) {
  console.log(event);
  return false;
}

var h = 300;

function fun(event) {
  var r = event.deltaY;
  document.querySelector('.test').style.background = 'rgb(' + r + ', ' + r + ', ' + r + ')';
  if (r < 1) {
    h = h - 10;
  }
  if (r > 1) {
    h = h + 10;
  }
  document.querySelector('.test').style.width = h + 'px';
  document.querySelector('.test').style.height = h + 'px';
  return false;
}

document.querySelector('.test').onmousewheel = fun;

var z = 0;

function fun2(event) {
  var y = event.deltaY;
  console.log(y);
  if (y < 1) {
    h = h - 10;
    if (h <= 0) {
      h = h + 10;
    }
  }
  if (y > 1) {
    h = h + 10;
    if (h >= 400) {
      h = h - 10;
    }
  }
  document.querySelector('.box').style.bottom = h + 'px';
  return false;
}

document.querySelector('.mainBox').onmousewheel = fun2;


var el = document.getElementsByClassName('four-in-line');
var o = 1;

document.querySelector('.boxForImg').onmousewheel = function fun3(event) {

  for (let j = 0; j < el.length; j++) {
    el[j].style.border = '3px solid green';
  }
  var p = event.deltaY;
  if (p < 1) {
    o = o - 1;
    if (o == 0) {
      o = 4
    }
  } else {
    if (p > 1) {
      o = o + 1
      if (o == 5) {
        o = 1;
      }
    }
  }
  if (o == 1) {
    document.getElementById('i1').style.border = '3px solid red';
  }
  if (o == 2) {
    document.getElementById('i2').style.border = '3px solid red';
  }
  if (o == 3) {
    document.getElementById('i3').style.border = '3px solid red';
  }
  if (o == 4) {
    document.getElementById('i4').style.border = '3px solid red';
  }
  return false;
}
