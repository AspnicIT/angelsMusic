function welcomeLink(){
    const mainLinks = document.querySelectorAll('.main__grid_link');
    let count = 0;
    let intervalLink = setInterval(() => {
        mainLinks[count].classList.remove('mainFX'); 
        count += 1;
        if(count === mainLinks.length){
            clearInterval(intervalLink);
        }

    }, 300);
}

export default welcomeLink;