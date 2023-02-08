
const menuBtns = (triggerSelector, contentSelector, activeSelector, closeSelector) => {
    const btn = document.querySelector(triggerSelector);
    const content = document.querySelector(contentSelector);
    const activeClass = activeSelector;
    const closeBtn = document.querySelector(closeSelector);
    const body = document.body
    
    function closeMenu() {
        content.classList.remove(activeClass);
        body.classList.remove('no-scroll');
    };
    
    btn.addEventListener('click', () => {
        content.classList.add(activeClass);
        body.classList.add('no-scroll');
    });
    closeBtn.addEventListener('click', () => {
        closeMenu();
    });
    content.addEventListener('click', (e) => {
        if (e.target === content) {
            closeMenu();
        }
    });
};




export default menuBtns;