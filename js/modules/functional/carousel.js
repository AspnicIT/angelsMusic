import onSwipe from "./onSwipe";


   function carousel(photoSel, allPhoto, leftBtn, rightBtn, inn, selCarouselBlock, selBtnsBlock){
      const photo = document.querySelector(photoSel),
            allEmployees = document.querySelectorAll(allPhoto),
            left = document.querySelector(leftBtn),
            right = document.querySelector(rightBtn),
            slidesField = document.querySelector(inn),
            carouselBlock = document.querySelector(selCarouselBlock),
            btnsBlock = document.querySelector(selBtnsBlock);


      let width = window.getComputedStyle(photo).width;

            window.addEventListener('orientationchange', () => {
               width = window.getComputedStyle(photo).width;
            });
            window.addEventListener('resize', () => {
               width = window.getComputedStyle(photo).width;
            });



            function fullOffset(str) {
               return +str.replace(/\D/g, '');
            }
            
      let scrollWidth = fullOffset(width) + 40;

      let offset = 0;

      function toRight() {
         offset += scrollWidth;
         if(offset >= (allEmployees.length - 1)  * scrollWidth){
            offset -= scrollWidth;
         }
         slidesField.style.transform = `translateX(-${offset}px)`;
      }

      function toLeft() {
         offset -= scrollWidth;
         if(offset < 0){
            offset = 0;
         }
         slidesField.style.transform = `translateX(-${offset}px)`;
      }
      
      right.addEventListener('click', toRight);  
      left.addEventListener('click', toLeft);  

      function empty(){
         console.log('good');
      }

      onSwipe(carouselBlock, toRight, toLeft, empty);
      onSwipe(btnsBlock, toRight, toLeft, empty);
   }

export default carousel;