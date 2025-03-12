document.addEventListener( 'DOMContentLoaded', function() {
    var splide1 = new Splide( '#splide1',{
        type   : 'loop',
        perPage: 3,
        width: '100%',
        perMove: 1,
        padding: '0%',
        arrows: boolean = true,
        pagination: boolean = true,
        autoplay: boolean = true,
        interval: number = 3000,
        pauseOnHover: boolean = true,
        gap: '3em',
        mediaQuery: 'min',
       breakpoints: {
        200: {
            perPage: 1,
            padding: '0%',
            gap: '0em'
        },
        750: {
            perPage: 2,
            padding: '0%',
            gap: '1em',
        },
        1440: {
            perPage: 3,
            width: '100%',
            perMove: 1,
            padding: '0%',
        }
    }
    } );
    splide1.mount();
  } );

  document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const button = item.querySelector('.faq-button');
        const answer = item.nextElementSibling;
        const isVisible = answer.style.display === 'block';
        
        document.querySelectorAll('.faq-answer').forEach(ans => ans.style.display = 'none');
        document.querySelectorAll('.faq-button').forEach(btn => btn.textContent = '+');
        
        if (!isVisible) {
            answer.style.display = 'block';
            button.textContent = '-';
        }
    });
});

function toggleMenu() {
    const menu = document.querySelector('.nav2-div-left');
    menu.classList.toggle('show');
}