document.addEventListener("scroll", gallery);
let galleryImg = document.querySelector("#gallery");
if (galleryImg.complete) {
    console.log(`Finished with ${galleryImg}`);
}