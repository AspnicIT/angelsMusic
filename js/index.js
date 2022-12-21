require('es6-promise').polyfill();

import brand from "./modules/constructors/brand";
import slider from "./modules/functional/slider";
import welcomeLink from "./modules/functional/welcomeLink";
import partners from "./modules/functional/partners";
import carousel from "./modules/functional/carousel";
import modal from "./modules/functional/modal";

////Arrey

import { partnersArr } from "./DB/partners-DB";


window.addEventListener('DOMContentLoaded', () => {

    welcomeLink();
    slider(
        '.galary__slider', 
        '.galary__slide', 
        '.galary__prev', 
        '.galary__next', 
        '.galary__slide_wrapper', 
        '.galary__slide_inner', 
        true
        );

    carousel(
        '.bio__item_photo',
        '.bio__item_photo',
        '.bio__prev', 
        '.bio__next', 
        '.bio__carousel_inner'
    );
    
    brand(partnersArr);
   

    partners(
        '.partners__btn',
        '.partners__inner',
        '._partners__container'
        );

    modal(
        '.modal',
        '.modal__close',
        '.contacts__btn',
        'ghost',
        'hide'
    );
    
})