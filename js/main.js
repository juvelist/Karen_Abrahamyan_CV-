// print button
$('.print__btn').click(function (event) {
    window.print();
    event.preventDefault();
});

// up button
$(window).scroll(function() {
    if ($(this).scrollTop() >= 200) {
        $('#up-button').fadeIn(200);
    } else {
        $('#up-button').fadeOut(200);
    }
});
$('.up-button__link').click(function() {
    $('body,html').animate({
        scrollTop : 0
    }, 500);
});
