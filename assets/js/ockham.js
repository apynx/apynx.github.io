(function(document) {
  var toggle = document.querySelector('.sidebar-toggle');
  var sidebar = document.querySelector('#sidebar');
  var checkbox = document.querySelector('#sidebar-checkbox');

  document.addEventListener('click', function(e) {
    var target = e.target;

    if(!checkbox.checked ||
       sidebar.contains(target) ||
       (target === checkbox || target === toggle)) return;

    checkbox.checked = false;
  }, false);
})(document);


var disqus_loaded = false;
var disqus_enabled = document.getElementById("load-comments");
$("#load-comments").on("click", load_disqus);

window.onscroll = function (e) {
  scrollFunction();
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    if (disqus_enabled && disqus_loaded == false) {
      load_disqus();
    }
  }
};

function load_disqus() {
  if (disqus_loaded || !disqus_enabled) return;
  var disqus_shortname = "{{site.disqus}}";
  $.ajax({
    type: "GET",
    url: "https://" + disqus_shortname + ".disqus.com/embed.js",
    dataType: "script",
    cache: true,
  });
  disqus_loaded = true;
  $(".show-comments").fadeOut();
}