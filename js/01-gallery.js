import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector('.gallery');

galleryEl.innerHTML = galleryItems.map(({preview, original, description}) => `<div class="gallery__item">
<a class="gallery__link" href="${original}"> <img class="gallery__image" src="${preview}" data-source= "${original}" alt="${description}"> </a>
</div>`
).join(" ");

galleryEl.addEventListener('click', onGalleryImgClick);

function onGalleryImgClick(e) {
    e.preventDefault();

    if (e.target.nodeName !== "IMG") {
        return
    }

    const instance = basicLightbox.create(`<img src="${e.target.dataset.source}" width="800" height="600">`, 
    {onShow: (instance) => {window.addEventListener('keydown', onKeyPress)}, 
    onClose: (instance) => {    window.removeEventListener('keydown', onKeyPress)}}
    );

    instance.show();

    function onKeyPress (e) {
        if (e.key === 'Escape') {
            instance.close();
        }
    }
}

