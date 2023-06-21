# Photo Gallery

A simple Photo Gallery using GLightbox and Embla Carousel.    
    
Resolution above 768px will show you a cool lightbox gallery, while resolution below 768px will show you a cool slide with the light box.

Live demo: https://nikkeijin.github.io/photo-gallery/

# Features

You can use the following code to enable/disable the lightbox and carousel depending on the resolution.   
For an example, you can disable the lightbox for resolution below 768px if you wish.
    
./js/photo-gallery.js
```JavaScript
// Enable Lightbox:
lightboxFunctions.enableLightbox();
lightboxFunctions.enableLightboxHrefs();

// Enable Carousel:
carouselFunctions.enableCarousel();

// Disable lightbox:
lightboxFunctions.disableLightbox();
lightboxFunctions.disableLightboxHrefs();

// Disable Carousel:
carouselFunctions.disableCarousel();
```

```JavaScript
function handleResize() {
    if (window.innerWidth > 768) {
        
        /* 
        
        This is for resolution above 768px
        Add the enable/disable functions here 
        
        */

    } else {

        /* 
        
        This is for resolution below 768px
        Add the enable/disable functions here 
        
        */

    }
}
handleResize();
window.addEventListener('resize', handleResize);
```
