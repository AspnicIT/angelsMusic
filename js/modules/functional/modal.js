function modal(
    modalSel,
    modalClose,
    modalOpen,
    classOpacity,
    classHide
) {

    const modal = document.querySelector(modalSel),
        close = document.querySelector(modalClose),
        open = document.querySelector(modalOpen),
        ghost = classOpacity,
        display = classHide

    function openModal() {
        modal.classList.remove(display);
        setTimeout(() => {
            modal.classList.remove(ghost)
        }, 300);
        document.body.style.overflow = 'hidden';
        clearTimeout(interModal)
    }

    function closeModal() {
        modal.classList.add(ghost);
        document.body.style.overflow = '';
        setTimeout(() => {
            modal.classList.add(display)
        }, 300);
    }


    open.addEventListener('click', openModal)
    close.addEventListener('click', closeModal)
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // const interModal = setTimeout(() => {
    //     openModal();
    // }, 10000);
}

export default modal;