function mainBackground(selvideoParent, srcVideo){

    const videoParent = document.querySelector(selvideoParent);
    
    let windowWidth = window.innerWidth;

   

    function setBackVideo(){

        let videoBackground = document.createElement('source');
            videoBackground.setAttribute('tabindex', '-1');
            videoBackground.setAttribute('src', srcVideo);
            videoBackground.setAttribute('type', 'video/mp4');
        
        videoParent.append(videoBackground);
    }
    
    windowWidth > 700 ? setBackVideo() : null;
    

    // window.addEventListener('resize', function loadBackground() {
    //     windowWidth = window.innerWidth;
    //     if(windowWidth > 700){
    //         setBackVideo();
    //         removeEventListener('resize', loadBackground);
    //     }
    // });

}

export default mainBackground;