$(document).ready(function() {
  $('a[href=#blog]').click(function(e) {
    e.preventDefault();
    $('#blog').slideDown();
  });
});