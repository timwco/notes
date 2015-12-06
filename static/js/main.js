var el = document.querySelector(".header-container");
var headroom  = new Headroom(el, {
  "offset": 205,
  "tolerance": 5
});
headroom.init();