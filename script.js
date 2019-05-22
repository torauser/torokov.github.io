menu.onclick = function myFunction() {
    let x = document.getElementById('navBar');
    if (x.className === 'container__bar') {
        x.className += ' responsive';
    } else {
        x.className = 'container__bar';
    }
}
$(document).ready(()=>{
    //resume animation
    function setAnimation() {
        let me = $('.me');
        if (me.hasClass('me_animation')) {
            me.removeClass('me_animation');
            me.addClass('me_animation2');
        } else {
            me.addClass('me_animation');
            me.removeClass('me_animation2');
        }
    }
    setInterval(setAnimation, 1500);
    //initial conditions
    $('.bar__me').addClass('bar-active');
    $('.eng-img').addClass('skills_effect');
    //bar
    $('.bar__exp').on('click', (e)=>{
        let element = $(e.currentTarget);
        $(element).addClass('bar-active');
        $(element).siblings().removeClass('bar-active');

        let text = $('.exp__text');
        $(text).slideDown();
        $(text).siblings().hide();
    });
    $('.bar__me').on('click', (e)=>{
        let element = $(e.currentTarget);
        $(element).addClass('bar-active');
        $(element).siblings().removeClass('bar-active');

        let text = $('.me__text');
        $(text).slideDown();
        $(text).siblings().hide();
    });
    //skills
    $('.skills__card').children().on('click', e =>{
        let element = $(e.currentTarget);
        if (element.hasClass('eng-img')) {
            $('.text-eng').fadeIn();
            $('.text-eng').siblings().hide();
            $(element).addClass('skills_effect');
            $('.js-img, .html-img, .more-img').removeClass('skills_effect');
        } else if (element.hasClass('js-img')) {
            $('.text-js').fadeIn();
            $('.text-js').siblings().hide();
            $(element).addClass('skills_effect');
            $('.eng-img, .html-img, .more-img').removeClass('skills_effect');
        } else if (element.hasClass('html-img')) {
            $('.text-html').fadeIn();
            $('.text-html').siblings().hide();
            $(element).addClass('skills_effect');
            $('.eng-img, .js-img, .more-img').removeClass('skills_effect');
        } else if (element.hasClass('more-img')) {
            $('.text-more').fadeIn();
            $('.text-more').siblings().hide();
            $(element).addClass('skills_effect');
            $('.eng-img, .js-img, .html-img').removeClass('skills_effect');
        }
    })
})
