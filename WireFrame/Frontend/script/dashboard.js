$(document).ready(function() {
  console.log('ready!');

  $('#search-toggle').click(function(e) {
    e.preventDefault();
    $('#search-form').toggleClass('search-bar-toggle');
  });

  $("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
  });
});
