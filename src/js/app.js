import {
  isWebp,
  headerFixed,
  togglePopupWindows,
  addTouchClass,
  addLoadedClass,
  menuInit
} from './modules'

window['FLS'] = true;

isWebp();



// Мой код:

import menuBtns from './modules/menu';
import tabs from './modules/tabs';
import slider from './modules/slider';
import price from './modules/price';

menuBtns('.header__btn-menu', '.header__wrapper', 'header__wrapper--active', '.header__list button');
tabs('.product__tabs', '.product__tabs-btn', '.product__content-item', 'product__tabs-btn--active', 'product__content-item--active',);
slider();
price();

