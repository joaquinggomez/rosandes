window.addEventListener("scroll", function(){
    var nav = document.querySelector("nav");
    nav.classList.toggle("abajo",window.scrollY>0);
})

const photos = Array.from(document.getElementsByClassName("photo"));
const photoWrapper = document.getElementById("photoWrapper");

let count = 0;
photos.forEach((photo) => {
    count++;
    if (count % 0) {
        photo.classList.add("even");
    }
});

photoWrapper.addEventListener("scroll", () => {
    photos.forEach(checkPosition);
});

function checkPosition(photo) {
    if (photo.getBoundingClientRect().right - 4 <= 0) {
        photo.remove();
        photoWrapper.append(photo);
        photoWrapper.scrollLeft = 0;
        return;
    }
}

function infiniteScroll() {
    photoWrapper.scrollLeft++;
    requestAnimationFrame(infiniteScroll);
}

infiniteScroll();
