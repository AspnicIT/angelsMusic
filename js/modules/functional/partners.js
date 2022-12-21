
   function partners(nextBtn, inn, containerSel){
    const btn = document.querySelector(nextBtn),
          carousel = document.querySelector(inn),
          container = document.querySelector(containerSel),
          windowVW = window.getComputedStyle(container).width;

     let offset = 0;
     let maxOffset = window.getComputedStyle(carousel).width;

     function fullOffset(str) {
        return +str.replace(/\D/g, '');
     }



     setInterval(() => {
        if(offset > fullOffset(maxOffset)){
            carousel.style.transform = `translateX(-0px)`
            offset = 0;
        }
        offset += 4;
        carousel.style.transform = `translateX(-${offset}px)`
     }, 100);
          

     btn.addEventListener('click', () => {
        offset = offset + Math.floor(fullOffset(windowVW) / 8) ;
     })



 }

export default partners;