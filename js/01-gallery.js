import {galleryItems} from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const wrapperGallary = document.querySelector(".gallery");
// створення розмітки 
const galleryCreate = galleryItems.map(({preview , original, description}) => {
    return `<li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
}).join("");
// додавання розмітки
wrapperGallary.insertAdjacentHTML("beforeend", galleryCreate);


wrapperGallary.addEventListener("click", onElementGalleryClick);

function onElementGalleryClick(event) {
    
    event.preventDefault();
    if (event.target.nodeName !=="IMG") {
        return;
    }

    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">`)

    instance.show()

    document.addEventListener("keydown", (event) => {
        if (event.code === "Escape") {
            instance.close();
        }
    }, { once:true, })  
}