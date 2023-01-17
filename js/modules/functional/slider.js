import onSwipe from "./onSwipe";


function slider(container, items, prevBtn, nextBtn, wrap, selBtnsBlock, inn, autoplay){

    const slider = document.querySelector(container), 
        slides = document.querySelectorAll(items),
        prev = document.querySelector(prevBtn),
        next = document.querySelector(nextBtn),
        slidesWrapper = document.querySelector(wrap),
        btnsblock = document.querySelector(selBtnsBlock),
        slidesField = document.querySelector(inn);

    let width = window.getComputedStyle(slidesWrapper).width;

    window.addEventListener('orientationchange', () => {
        onResizing();
    });
    window.addEventListener('resize', () => {
        onResizing();
    });

    function onResizing(){
        width = window.getComputedStyle(slidesWrapper).width;
        slides.forEach(slide => {
            slide.style.width = width;
        });
        offset = 0;
        slidesField.style.transform = `translateX(-${offset}px)`;

    }

    let offset = 0;
    let playSlides = autoplay;


    setInterval(() => {
        playSlides = true;
    }, 120000);

    function play(){
        setInterval(() => {
            playSlides ? nextSlide() : null;
        }, 6000);
}

    function fullOffset(str) {
        return +str.replace(/\D/g, '');
    }

    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '.6s all';
    slidesWrapper.style.cssText = `
                                        overflow: hidden;
                                        position: relative;
                                        z-index: 1;
        `;

    slides.forEach(slide => {
        slide.style.width = width;
    });

    slider.style.position = 'relative';

    function fieldTransfom() {
        slidesField.style.transform = `translateX(-${offset}px)`;
    }

    function nextSlide(){
        if (offset == fullOffset(width) * (slides.length - 1)) {//'500px'
            offset = 0;
        } else {
            offset += fullOffset(width);
        }
        fieldTransfom();

    }

    function prevSlide(){
        if (offset == 0) {//'500px'
            offset = fullOffset(width) * (slides.length - 1);
        } else {
            offset -= fullOffset(width);
        }
        fieldTransfom();
        
    }

    play();


    next.addEventListener('click', () => {
        playSlides = false;
        nextSlide();
    });

    prev.addEventListener('click', () => {
        playSlides = false;
        prevSlide();
    });


    function changePlaySlides() {
        playSlides = false;
    }
    
    onSwipe(slidesWrapper, nextSlide, prevSlide, changePlaySlides);
    onSwipe(btnsblock, nextSlide, prevSlide, changePlaySlides);
}

   


export default slider;
