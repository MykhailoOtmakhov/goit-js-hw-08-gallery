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

const lightboxClose = document.querySelector('.lightbox')
lightboxClose.addEventListener('click', closeModal)

function closeModal (evt) {
  if (evt.target === document.querySelector('.lightbox__overlay') ||evt.target === document.querySelector('.lightbox__button')) {
    lightboxEl.classList.remove('is-open');
    lightboxImageEl.src = ' ';
    lightboxImageEl.alt = ' ';
  }
 }

 window.addEventListener('keydown', closeModalbyEsc)
 function closeModalbyEsc (evt){
  if (evt.code === "Escape"){
  lightboxEl.classList.remove('is-open');
  lightboxImageEl.src = ' ';
  lightboxImageEl.alt = ' ';
  }
 }

