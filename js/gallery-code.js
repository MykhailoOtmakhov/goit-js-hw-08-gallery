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

 const lightboxCloseOverlay = document.querySelector('.lightbox__overlay')
 lightboxCloseOverlay.addEventListener('click', closeModalbyClick)
 function closeModalbyClick (evt){
 if (evt.target === evt.currentTarget){
  lightboxEl.classList.remove('is-open');
  }
 }  

 const lightboxCloseEsc = document.querySelector('.lightbox__content')
 window.addEventListener('keydown', closeModalbyEsc)
 function closeModalbyEsc (evt){
  if (evt.code === "Escape"){
  lightboxEl.classList.remove('is-open');}
 }

//  const UrlsArr = images.map({original} => original);
//  const bigImageEl = document.querySelector('.lightbox__image')
//  console.log(bigImageEl)
   
 
 // function keyboardPress(event) {
//   if (event.code === "ArrowRight") {
//     for (let i = 0; i < UrlsArr.length; i += 1) {
//       if (bigImageEl.src === UrlsArr[8]) {
//         bigImageEl.src = `${UrlsArr[0]}`;
//         return;
//       } else if (bigImageEl.src === UrlsArr[i]) {
//         bigImageEl.src = `${UrlsArr[i + 1]}`;
//         return;
//       }
//     }
//   } else if (event.code === "ArrowLeft") {
//     for (let i = 0; i < UrlsArr.length; i += 1) {
//       if (bigImageEl.src === UrlsArr[0]) {
//         bigImageEl.src = `${UrlsArr[8]}`;
//         return;
//       } else if (bigImageEl.src === UrlsArr[i]) {
//         bigImageEl.src = `${UrlsArr[i - 1]}`;
//         return;
//       }
//     }
//   }
// }
// // const 
// // console.log(evt.target)
  
