// smooth scroll jQuery

/*

$('.navbar a').click(function (e) {
    if (this.hash !== '') {
        e.preventDefault();
        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800);
    }
});


*/

//smooth scroll custom script
// <script src="https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@14.0.0/dist/smooth-scroll.polyfills.min.js"></script>


const scroll = new SmoothScroll('.navbar a[href*="#"]', {
        speed:800
});


