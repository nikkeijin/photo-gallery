/*

################################################## 

Start functions

# Enable Lightbox:
lightboxFunctions.enableLightbox();
lightboxFunctions.enableLightboxHrefs();

# Enable Carousel:
carouselFunctions.enableCarousel();

# Disable lightbox:
lightboxFunctions.disableLightbox();
lightboxFunctions.disableLightboxHrefs();

# Disable Carousel:
carouselFunctions.disableCarousel();

*/

import { lightboxFunctions } from './modules/lightbox.js';
import { carouselFunctions } from './modules/carousel.js';

lightboxFunctions.enableLightbox();
lightboxFunctions.enableLightboxHrefs();

function handleResize() {
    if (window.innerWidth > 768) {
        carouselFunctions.disableCarousel();

    } else {
        carouselFunctions.enableCarousel();
    }
}
handleResize();
window.addEventListener('resize', handleResize);