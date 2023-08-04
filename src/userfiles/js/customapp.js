/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************************!*\
  !*** ./resources/js/customapp.js ***!
  \***********************************/
Audio.prototype.play = function (play) {
  return function () {
    var _this = this;
    var audio = this,
      args = arguments,
      promise = play.apply(audio, args);
    if (promise !== undefined) {
      promise["catch"](function (_) {
        // Autoplay was prevented. This is optional, but add a button to start playing.
        var el = document.createElement("button");
        el.innerHTML = "Play";
        el.addEventListener("click", function () {
          play.apply(audio, args);
        });
        _this.parentNode.insertBefore(el, _this.nextSibling);
      });
    }
  };
}(Audio.prototype.play);
window.disablebutton = function (btn, dis) {
  $(btn).attr("disabled", dis);
  var classi = $(btn).children("i").attr("classi");
  if (dis) {
    $(btn).children("i").removeClass(classi);
    $(btn).children("i").addClass("fa-refresh");
    $(btn).children("i").addClass("rotar");
    $(btn).addClass("disabled");
  } else {
    $(btn).children("i").removeClass("fa-refresh");
    $(btn).children("i").removeClass("rotar");
    $(btn).children("i").addClass(classi);
    $(btn).removeClass("disabled");
  }
};
window.srequest = {
  headers: {
    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
  }
};
/******/ })()
;