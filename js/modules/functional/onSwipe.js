function onSwipe(section, next, prev, changeVar){
            
    let startPointX;
    let endPontX;

    section.addEventListener('touchstart', (event) =>{
        event.preventDefault();
        event.stopPropagation();
        startPointX = Math.floor(event.targetTouches[0].pageX);
        endPontX = 0;

    });
    section.addEventListener('touchmove', (event) => {
        event.preventDefault();
        event.stopPropagation();
        endPontX = Math.floor(event.targetTouches[0].pageX);
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