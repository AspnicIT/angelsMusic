function slider(container, items, prevBtn, nextBtn, wrap, inn, autoplay){

    const slider = document.querySelector(container), 
        slides = document.querySelectorAll(items),
        prev = document.querySelector(prevBtn),
        next = document.querySelector(nextBtn),
        slidesWrapper = document.querySelector(wrap),
        slidesField = document.querySelector(inn),
        width = window.getComputedStyle(slidesWrapper).width;

    let offset = 0;


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



    next.addEventListener('click', nextSlide);

    prev.addEventListener('click', () => {
        if (offset == 0) {//'500px'
            offset = fullOffset(width) * (slides.length - 1);
        } else {
            offset -= fullOffset(width);
        }
        fieldTransfom();

    });

    
        if(autoplay === true){
            setInterval(() => {
                nextSlide()
            }, 4000);
        }
    
}

export default slider;