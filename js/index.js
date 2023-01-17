require('es6-promise').polyfill();

import brand from "./modules/constructors/brand";
import slider from "./modules/functional/slider";
import welcomeLink from "./modules/functional/welcomeLink";
import mainBackground from "./modules/constructors/mainBackground";
import carousel from "./modules/functional/carousel";
import partners from "./modules/functional/partners";
import modal from "./modules/functional/modal";
import burger from "./modules/functional/burger";


////Arrey

import { partnersArr } from "./DB/partners-DB";


window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    welcomeLink();

    mainBackground(
        '.main__video',
        "../src/img/videoplayback.mp4",
    );

    slider(
        '.galary__slider', 
        '.galary__slide', 
        '.galary__prev', 
        '.galary__next', 
        '.galary__slide_wrapper', 
        '.galary__btns',
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
    

    setTimeout(() => {
       partners(
        '.partners__btn',
        '.partners__inner',
        '._partners__container',
        '._brandItem'
        ); 
    }, 1000);
    

    modal(
        '.modal',
        '.modal__close',
        '.contacts__btn',
        'ghost',
        'hide'
    );
    burger(
        '.main__navBtn',
        '.header__ul'
    );

    
});