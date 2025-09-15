$(document).ready(function() {
    $(".nav-show").click(function() {
        $(".nav").css({
            left: "0",
        });
    });
    $(".nav-hide").click(function() {
        $(".nav").css({
            left: "-100%",
        });
    });
});