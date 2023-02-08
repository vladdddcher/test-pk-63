
const tabs = (headerSelector, tabSelector, contentSelector, activeClassBtn, activeClassContent) => {
        
    const header = document.querySelector(headerSelector);
    const tab = document.querySelectorAll(tabSelector);
    const content = document.querySelectorAll(contentSelector);
    const contentActive = activeClassContent;
    
    function hideTabContent() {
        content.forEach(item => {
            item.classList.remove(contentActive);
            setTimeout(() => {
                item.style.display = 'none'
            }, 300);
        });
        tab.forEach(item => {
            item.classList.remove(activeClassBtn);
        })
    }
    
    function showTabContent(i = 0) {
        tab[i].classList.add(activeClassBtn);
        setTimeout(() => {
            content[i].style.display = 'block';
            content[i].classList.add(contentActive);
        }, 300);
    }
    hideTabContent();
    showTabContent();
    
    header.addEventListener('click', (e) => {
        const target = e.target;
        if (target.classList.contains(tabSelector.replace(/\./, '')) || target.parentNode.classList.contains(tabSelector.replace(/\./, ''))) {
            tab.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                    hideTabContent();
                    showTabContent(i);
                }
                
            })
        }
    })
}

export default tabs;