function onSwipe(section, next, prev, changeVar){
            
    let startPointX;
    let endPontX;
    let startPointY;
    let endPontY;

    section.addEventListener('touchstart', (event) =>{
        event.preventDefault();
        event.stopPropagation();
        startPointX = Math.floor(event.targetTouches[0].pageX);
        startPointY = Math.floor(event.targetTouches[0].pageY);
        endPontX = 0;
        endPontY = 0;

    });
    section.addEventListener('touchmove', (event) => {
        event.preventDefault();
        event.stopPropagation();
        endPontX = Math.floor(event.targetTouches[0].pageX);
        endPontY = Math.floor(event.targetTouches[0].pageY);

        let sizeScroll = event.targetTouches[0].pageY - (event.targetTouches[0].pageY - 6);

        if(startPointY - endPontY > 10){
            window.scrollBy(0, sizeScroll);
        } else if(startPointY - endPontY < -10){
            window.scrollBy(0, -sizeScroll);
        }
        
    });
    section.addEventListener('touchend', () => {
        changeVar();
        if(startPointX > endPontX){
            next();
        } else{
            prev();
        }
        
    });
}

export default onSwipe;