$(document).ready(function() {
    $('.projects-list').masonry({
        columnWidth: 280, 
        itemSelector: '.project, .service' 
    });
    
    $('.posts').masonry({
        columnWidth: 420,
        itemSelector: '.post'
    });
});