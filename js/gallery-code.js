import images from './gallery-items.js';
console.log(images)

const galleryContainer = document.querySelector('.js-gallery');

// const galleryList = galleryContainer;
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
return evt.target.dataset.source;
}

const lightboxClose = document.querySelector('.lightbox__button')
lightboxClose.addEventListener('click', closeModal)

function closeModal (evt) {
  if (evt.target.nodeName === 'BUTTON') {
    lightboxEl.classList.remove('is-open');
  } 
} 
// console.log(evt.target)
  
