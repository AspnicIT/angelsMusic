
function partners(selWrap) {
   const 
      scrollWrap = document.querySelector(selWrap);
  

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

}

export default partners;