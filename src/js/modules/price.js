
const price = () => {
    
    function plusAndMinus() {
        const minus = document.querySelector('.product__btns-minus');
        const plus = document.querySelector('.product__btns-plus');
        const nums = document.querySelector('.product__btns-num');
        
        let i = 10;
        
        plus.addEventListener('click', () => {
            if (i >= 999) {
                return i;
            } else {
                nums.textContent = ++i;
            }
        });
        minus.addEventListener('click', () => {
            if (i <= 0) {
                return i;
            } else {
                nums.textContent = --i;
            }
        });
    }
    plusAndMinus();
    
    function toggleClass(btnSelector, activeSelector) {
        const btn = document.querySelector(btnSelector);
        const activeClass = activeSelector;
        
        btn.addEventListener('click', () => {
            if (btn.classList.contains(activeClass)) {
                btn.classList.remove(activeClass) 
            } else {
                btn.classList.add(activeClass) 
            }
        });
    }
    toggleClass('.product__btns-basket', 'product__btns-basket--active');
    toggleClass('.product__btns-favorites', 'product__btns-favorites--active');
};













export default price;





