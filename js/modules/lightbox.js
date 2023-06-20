/*

################################################## 

Lightbox: https://github.com/biati-digital/glightbox/

*/

const glightboxHref = document.querySelectorAll('.glightbox');
let lightbox = null;

export const lightboxFunctions = {

  enableLightbox() {
    if (!lightbox) {
      lightbox = GLightbox();
      lightbox.on('open', (target) => {
        console.log('lightbox opened');
      });
    }
  },

  disableLightbox() {
    if (lightbox) {
      lightbox.destroy();
      lightbox = null;
      console.log('lightbox disabled');
    }
  },

  preventDefaultAction(event) {
    event.preventDefault();
  },

  enableLightboxHrefs(){

    glightboxHref.forEach((e) => {
        e.removeEventListener('click', this.preventDefaultAction);
    });

  },

  disableLightboxHrefs(){

    glightboxHref.forEach((e) => {
        e.addEventListener('click', this.preventDefaultAction);
    });
  }

};