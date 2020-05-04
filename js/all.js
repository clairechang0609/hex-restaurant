$(document).ready(function () {
    $(".jq-menu-button").on("click", function (e) {
        e.preventDefault();
        $(this).parents(".header").toggleClass("active");
    });
});