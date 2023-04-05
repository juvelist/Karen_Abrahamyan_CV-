// print button
$('.print__btn').click(function (event) {
    window.print();
    event.preventDefault();
});

// skills percent
$('.right-block__skills-percent').each(function()
{
    var val = $(this).data('label');
    $(this).css('width', val);

});

// skills mouseover
$('.right-block__skills-text').mouseover(function()
{
    var val = $(this).next('.right-block__skills-indicator').find('.right-block__skills-percent').data('label');
    $(this).next('.right-block__skills-indicator').find('.right-block__skills-percent').css('width', '1');

    $('.right-block__skills-text').mouseout(function()
    {
        $(this).next('.right-block__skills-indicator').find('.right-block__skills-percent').css('width', val);
    });
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
