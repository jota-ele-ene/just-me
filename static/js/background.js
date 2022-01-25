
function next_bg() {
  var a = document.querySelector(".container_bg.bg_active");
  if (a) {
    a.classList.toggle("bg_active");
    a.classList.toggle("fade_out");
    a.classList.toggle("fading");
  }
  else {
    document.querySelector('.title-div').classList.add("background--light");
  }
  var x = document.querySelectorAll(".container_bg.fade_out")
  if (x.length>0) {
    var i = getRandomArbitrary(0,x.length-1);
    var image = x[i].querySelector('.image');
    var img = new Image();
    image.style.backgroundImage = "url('"+image.getAttribute("refer");+"')";
    img.src = image.getAttribute("refer");
    if (img.complete) img.onload();
    img.onload = function() {
      x[i].classList.toggle("fade_out");
      x[i].classList.toggle("fading");
      x[i].classList.toggle("bg_active");
    }
    //console.log("Choose background " + (i+1) + "/" + x.length);
    setTimeout(setActiveBackground, 1800);
  }
  else console.log("No available background for " + document.getElementsByTagName("BODY")[0].getAttribute("orientation") + " orientation" );
}

function setActiveBackground() {
  var x = document.querySelectorAll(".fading");
  if (x[0]) x[0].classList.toggle("fading");
  if (x[1]) x[1].classList.toggle("fading");
  setTimeout(next_bg, 10000);
}

function getRandomArbitrary(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function toggle_info() {
  var x = document.querySelectorAll(".container_bg.bg_active .info");
  x[0].classList.toggle("fade_out");
  x[1].classList.toggle("fade_out");
}

function getOrientation() {
  if( document.documentElement.clientWidth > document.documentElement.clientHeight  ) {
      return "landscape";
  }
  else {
      return "portrait";
  }
}

function checkOrientation() {
    var currentOrientation = getOrientation();
    var b = document.getElementsByTagName("BODY")[0];
    if (currentOrientation.localeCompare(b.getAttribute("orientation"))){
      b.setAttribute("orientation", currentOrientation);
      var a = document.querySelector(".container_bg.bg_active");
      if (a) {
        a.classList.toggle("bg_active");
        a.classList.toggle("fade_out");
        a.classList.toggle("fading");
      }
      processOrientation();
      next_bg();
    }
  }

function processOrientation() {
  var b = document.getElementsByTagName("BODY")[0];
  var orientation = b.getAttribute("orientation");
  var x = document.querySelectorAll(".container_bg");
  let not_fitting = 0;
  for (let i = 0; i < x.length; i++) {
    let value = x[i].getAttribute("size");
    const aSize = value.split("x");
    let text = "undefined";
    if (aSize[0]>aSize[1]) text = "landscape";
    else if (aSize[0]<aSize[1]) text = "portrait";
    else text = "square";
    if (text.localeCompare(orientation))
    {
      x[i].classList.toggle("not_fit");
      x[i].classList.toggle("fade_out");
      not_fitting++;
    }
  }
  console.log("Backgrounds available for "+ orientation +": "+(x.length-not_fitting))
}
