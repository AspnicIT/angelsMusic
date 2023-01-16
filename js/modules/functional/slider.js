function slider(container, items, prevBtn, nextBtn, wrap, inn, autoplay){

    const slider = document.querySelector(container), 
        slides = document.querySelectorAll(items),
        prev = document.querySelector(prevBtn),
        next = document.querySelector(nextBtn),
        slidesWrapper = document.querySelector(wrap),
        slidesField = document.querySelector(inn),
        width = window.getComputedStyle(slidesWrapper).width;

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
    slidesField.style.transition = '1s all';
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



    let startPointX;
    let endPontX;
    
    slidesWrapper.addEventListener('touchstart', (event) =>{
        event.preventDefault();
        event.stopPropagation();
        startPointX = Math.floor(event.targetTouches[0].pageX);
        // console.log(startPointX);

    });
    slidesWrapper.addEventListener('touchmove', (event) => {
        event.preventDefault();
        event.stopPropagation();
        endPontX = Math.floor(event.targetTouches[0].pageX);
    });
    slidesWrapper.addEventListener('touchend', () => {
        if(startPointX > endPontX){
            playSlides = false
            nextSlide()
        } else{
            playSlides = false
            prevSlide()
        }

        
    })
}


export default slider;