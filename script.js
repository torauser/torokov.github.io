menu.onclick = function myFunction() {
    let x = document.getElementById('myTopnav');
    if (x.className === 'topnav') {
        x.className += ' responsive';
    } else {
        x.className = 'topnav';
    }
}
$(document).ready(()=>{
    $('.bar__me').addClass('bar-active');
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
            $('.eng-img').addClass('skills_effect');
            $('.skills__card').children().removeClass('skills_effect');
        } else if (element.hasClass('js-img')) {
            $('.text-js').fadeIn();
            $('.text-js').siblings().hide();
            $('.js-img').addClass('skills_effect');
            $('.skills__card').children().removeClass('skills_effect');
        } else if (element.hasClass('html-img')) {
            $('.text-html').fadeIn();
            $('.text-html').siblings().hide();
            $('.html-img').addClass('skills_effect');
            $('.skills__card').children().removeClass('skills_effect');
        } else if (element.hasClass('more-img')) {
            $('.text-more').fadeIn();
            $('.text-more').siblings().hide();
            $('.more-img').addClass('skills_effect');
            $('.skills__card').children().removeClass('skills_effect');
        }
    })
})