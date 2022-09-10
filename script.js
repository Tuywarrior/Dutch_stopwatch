// $(document).ready(function () {
//   var el = $(".sec");

// $("#stop").click(function () {
//   var css = {
//     "-webkit-animation-play-state": "paused",
//     "-moz-animation-play-state": "paused",
//     "animation-play-state": "paused",
//   };
//   console.log(this);
//   el.css(css);
// });

//   $("#start").click(function () {
//     var css = {
//       "-webkit-animation-play-state": "running",
//       "-moz-animation-play-state": "running",
//       "animation-play-state": "running",
//     };
//     el.addClass("swing").removeClass("stopit").css(css);
//   });

//   $("#reset").click(function () {
//     //el.removeClass('swing').addClass('stopit');
//     var css = {
//       "-webkit-animation-iteration-count": "1",
//       "-moz-animation-iteration-count": "1",
//       "animation-iteration-count": "1",
//     };
//     el.css(css);
//     el.one(
//       "webkitAnimationEnd oanimationend msAnimationEnd animationend",
//       function (e) {
//         el.addClass("stopit");
//       }
//     );
//   });
// });

var hand = document.getElementById("hand");
var angle = 0;

var running = 0;
function rotate(deg = 1) {
  angle -= deg;
  hand.style.rotate = angle + "deg";
  running = setTimeout(rotate, 10, deg);
}

function start() {
  if (!running) rotate(0.3);
}

function stop() {
  if (running) {
    clearTimeout(running);
    running = 0;
  }
}

function reset() {
  hand.style.rotate = 0 + "deg";
  angle = 0;
  stop();
}
