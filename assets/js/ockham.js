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


$('#showComments').click(function() {
  $('#disqus_thread').html('<script>(function() { var d = document, s = d.createElement("script"); s.src = "https://aping.disqus.com/embed.js"; s.setAttribute("data-timestamp", +new Date()); (d.head || d.body).appendChild(s); })(); </script>');
  });