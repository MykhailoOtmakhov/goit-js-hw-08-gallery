import images from './gallery-items.js';
const galleryContainer = document.querySelector('.js-gallery');
const reducedString = images.reduce(
  (acc,{preview, original, description})=>{
    acc += 
    `<li class = "gallery__item">
        <a class ="gallery__link"
          href = "${original}">
        <img class="gallery__image" 
          src="${preview}"
          data-source="${original}"
          alt="${description}"/>
        </a>
    </li>`;
    return acc
  },"");

  galleryContainer.insertAdjacentHTML(
  'afterbegin', reducedString)

galleryContainer.addEventListener('click', onGalleryContainerClick);
const lightboxEl = document.querySelector('.lightbox')
const lightboxImageEl = document.querySelector('.lightbox__image')

function onGalleryContainerClick(evt) { 
  evt.preventDefault()
if (evt.target.nodeName !== 'IMG') {
  return;
} 
lightboxEl.classList.add('is-open');
lightboxImageEl.src = evt.target.dataset.source;
lightboxImageEl.alt = evt.target.alt;
}

const lightboxCloseOverlay = document.querySelector('.lightbox__overlay');
const lightboxCloseButton = document.querySelector('.lightbox__button');
lightboxCloseOverlay.addEventListener('click', closeModal);
lightboxCloseButton.addEventListener('click', closeModal);

function closeModal (evt) {
    lightboxEl.classList.remove('is-open');
    lightboxImageEl.src = ' ';
    lightboxImageEl.alt = ' ';
  
 }

 window.addEventListener('keydown', closeModalbyEsc)
 function closeModalbyEsc (evt){
  if (evt.code === "Escape"){
  closeModal()
  }
 }

