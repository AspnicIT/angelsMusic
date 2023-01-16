function mainBackground(selvideoParent, srcVideo){

    const videoParent = document.querySelector(selvideoParent);
    
    let windowWidth = window.innerWidth;

    windowWidth > 700 ? setBackVideo() : null;

    function setBackVideo(){

        let videoBackground = document.createElement('source');
            videoBackground.setAttribute('tabindex', '-1');
            videoBackground.setAttribute('type', 'video/mp4');
            videoBackground.setAttribute('src', srcVideo);
        
        videoParent.append(videoBackground);
    }
    

    

    window.addEventListener('resize', function loadBackground() {
        windowWidth = window.innerWidth;
        if(windowWidth > 700){
            setBackVideo();
            removeEventListener('resize', loadBackground)
        }
    })

}

export default mainBackground;