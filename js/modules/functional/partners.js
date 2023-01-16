
function partners(nextBtn, inn, containerSel, imgs) {
   const btn = document.querySelector(nextBtn),
      carousel = document.querySelector(inn),
      container = document.querySelector(containerSel),
      windowVW = window.getComputedStyle(container).width;

      const allImgs = document.querySelectorAll(imgs);


      let offset = 0;
      let gaps = fullOffset(window.getComputedStyle(carousel).columnGap) * (allImgs.length - 2);
      let allImgsWidth = 0;

      

      function getAllImgsWidth() {
         
         allImgs.forEach(item => {
            allImgsWidth += item.offsetWidth;
      });
      allImgsWidth += gaps;
      allImgsWidth = allImgsWidth - allImgsWidth * 2;

      };

      getAllImgsWidth();
     

   setInterval(() => {
      if (offset < allImgsWidth) {
         carousel.style.transform = `translateX(-0px)`
         offset = 100;
      }
      offset -= 4;
      carousel.style.transform = `translateX(${offset}px)`
   }, 100);


   function fullOffset(str) {
      return +str.replace(/\D/g, '');
   }
   
   btn.addEventListener('click', () => {
      offset = offset - Math.floor(fullOffset(windowVW) / 2);
   })



}

export default partners;