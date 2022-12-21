
   function carousel(photoSel, allPhoto, leftBtn, rightBtn, inn){
      const photo = document.querySelector(photoSel),
            allEmployees = document.querySelectorAll(allPhoto),
            left = document.querySelector(leftBtn),
            right = document.querySelector(rightBtn),
            slidesField = document.querySelector(inn),
            width = window.getComputedStyle(photo).width;


            function fullOffset(str) {
               return +str.replace(/\D/g, '');
            }
            
      let scrollWidth = fullOffset(width) + 40;

      let offset = 0;

      right.addEventListener('click', () => {
         offset += scrollWidth;
         if(offset >= (allEmployees.length - 1)  * scrollWidth){
            offset -= scrollWidth;
         }
         slidesField.style.transform = `translateX(-${offset}px)`;
      });  

      left.addEventListener('click', () => {
         offset -= scrollWidth;
         if(offset < 0){
            offset = 0;
         }
         slidesField.style.transform = `translateX(-${offset}px)`;
      });   
   }

export default carousel;