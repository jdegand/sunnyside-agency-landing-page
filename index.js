document.getElementById('hamburger').addEventListener('click', ()=> {
    document.querySelector('.nav__desktop').classList.toggle('open');
});

/*
window.addEventListener('scroll', (e)=> {
    console.log(e.target.scrollingElement.scrollTop)

    //document.querySelector('.nav__desktop').style.setProperty('top', 'calc(25% + e.target.scrollingElement.scrollTop + "px")');

    var wScroll = ($(this).scrollTop() / $(window).height()) + 50;
})
*/