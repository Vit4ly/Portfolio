$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

function func(el) {

const elem = document.getElementsByTagName('p');
for (let i = 0; i < elem.length; i += 1) {
    elem[i].innerHTML = `${i + 1}. ${elem[i].innerHTML}` ;
}
}

let header = $('.header'),
    scrollPrev = 0;

$(window).scroll(function() {
    const scrolled = $(window).scrollTop();

    if ( scrolled > 100 && scrolled > scrollPrev ) {
        header.addClass('out');
    } else {
        header.removeClass('out');
    }
    scrollPrev = scrolled;
});

//==============Feed back=====================
// function closeModal() {
//     const close = document.querySelector('#feedback-close')
//     const feed = document.querySelector('#feedback');
//     const inner = document.querySelector('.feedback__inner')
//     const body = document.querySelector('html')
//
//     close.addEventListener('click', function () {
//         feed.style.display = 'none';
//         inner.style.display = 'none';
//         body.style.overflow = 'auto';
//     })
//     feed.addEventListener('click', function() {
//         feed.style.display = 'none';
//         inner.style.display = 'none';
//         body.style.overflow = 'auto';
//     })
//
// }
//
// closeModal()
//
// function modal() {
//     const feedBtn = document.querySelector('#feedbackBtn');
//     const feed = document.querySelector('#feedback');
//     const inner = document.querySelector('.feedback__inner')
//     const body = document.querySelector('html')
//
//     feedBtn.addEventListener('click',function() {
//
//         inner.style.display = 'block';
//         feed.style.display = 'block';
//         body.style.overflow = 'hidden';
//
//
//     })
// }
// modal()

//==========================================================
