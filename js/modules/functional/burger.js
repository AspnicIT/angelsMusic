function burger(btnSelector, burgerSelector) {

    const btn = document.querySelector(btnSelector),
        burger = document.querySelector(burgerSelector);


        btn.addEventListener('click', openMenu);

        function openMenu(){
            burger.style.display = 'block';
            setTimeout(() => {
                burger.style.opacity = '100%';
            }, 100);
            btn.removeEventListener('click', openMenu);
            btn.addEventListener('click', closeMenu);
        }

        function closeMenu(){
            burger.style.opacity = '0%';
            restartOnResizing();
            setTimeout(() => {
                burger.style.display = 'none';
            }, 600);
            btn.removeEventListener('click', closeMenu);
            btn.addEventListener('click', openMenu);
        }

        
    function restartOnResizing(){
        window.addEventListener('resize', (e) => {
            if(e.target.innerWidth >= 1401){
            burger.style.display = '';
            burger.style.opacity = '';
        }
        })
        
    }
}

export default burger;