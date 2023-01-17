
function partners(inn, imgs, selWrap) {
   const 
      carousel = document.querySelector(inn),
      allImgs = document.querySelectorAll(imgs),
      scrollWrap = document.querySelector(selWrap);

      let gaps = fullOffset(window.getComputedStyle(carousel).columnGap) * (allImgs.length - 2);
      let allImgsWidth = 0;

      

      function getAllImgsWidth() {
         
         allImgs.forEach(item => {
            allImgsWidth += item.offsetWidth;
            console.log(item.offsetWidth);
      });

      allImgsWidth += gaps;

      };

      getAllImgsWidth();

      window.addEventListener('orientationchange', getAllImgsWidth());
      window.addEventListener('resize', getAllImgsWidth());
     
      console.log('all', allImgsWidth);
      console.log('gapps', fullOffset(window.getComputedStyle(carousel).columnGap));

      let scrollindex = 0;
      let toward = 1;

   setInterval(() => {
      let oldIndex = scrollindex;
      scrollWrap.scrollBy(toward, 0);
      scrollindex = 
         scrollWrap.pageXOffset || 
         (scrollWrap.documentElement && 
            scrollWrap.documentElement.scrollLeft) || 
            (scrollWrap && scrollWrap.scrollLeft);
      
      if(oldIndex === scrollindex){
         toward = -1;
      }  if (oldIndex <= 1){
         toward = 1;
      }
   }, 100);


   function fullOffset(str) {
      return +str.replace(/\D/g, '');
   }



}

export default partners;