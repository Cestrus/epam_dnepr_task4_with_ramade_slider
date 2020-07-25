import { ControllerPostForm } from './PostForm/controllerPostForm.js';
import { ControllerBlogPage } from './Pages/BlogPage/controllerBlogPage.js';
import { SliderPortfolio } from './components/slider.js';
import { SliderTestimonials } from './components/slider.js';

document.addEventListener('DOMContentLoaded', () => new ControllerPostForm());

document.querySelector('.btn--add-post').addEventListener('click', () => {
    document.querySelector('.modalPostForm').classList.add('modalPostForm--visible');
    document.querySelector('.overlayModal').classList.add('overlayModal--visible');
    document.querySelector('body').style.overflow = 'hidden';
});

document.querySelector('.menu__link--blog').addEventListener('click', () => {    
    [...document.querySelectorAll('.menu__link')].forEach(el => {
        el.classList.remove('menu__link--active');
    })
    document.querySelector('.menu__link--blog').classList.add('menu__link--active');
    document.querySelector('.content').innerHTML = '';
    new ControllerBlogPage();  // рендер страницы Blog с использованием класса Post
});

document.querySelector('.menu__link--home').addEventListener('click', () => {
    window.location.assign('./index.html');
});

const sliderPortfolio = new SliderPortfolio(document.querySelector('.btn-back-portfolio'), 
                                            document.querySelector('.btn-forward-portfolio'), 
                                            document.querySelector('.mySlider__wrapper--portfolio'), 
                                            3);

const sliderTestimonials = new SliderTestimonials(document.querySelector('.btn-back-testimonials'), 
                                                    document.querySelector('.btn-forward-testimonials'), 
                                                    document.querySelector('.mySlider__wrapper--testimonials'), 
                                                    1);
