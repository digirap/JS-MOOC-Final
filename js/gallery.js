document.addEventListener("DOMContentLoaded", function() {
    addTabindexToImages();
});

function addTabindexToImages() {
    const images = document.querySelectorAll('.preview');
    for (let img of images) {
        img.setAttribute('tabindex', '0');
    }
}

function imageLoaded(previewPic) { 
    //console.log(`Image loaded: ${previewPic.alt}`;)
    const imageDisplay = document.getElementById ('image');
    imageDisplay.style.backgroundImage =  `url(${previewPic.src})`;
    imageDisplay.innerHTML = previewPic.alt;
}

function upDate(previewPic) {
    const imageDisplay = document.getElementById('image');
    imageDisplay.style.backgroundImage = `url(${previewPic.src})`;
    imageDisplay.innerHTML = previewPic.alt;
}

function unDo() {
    const imageDisplay = document.getElementById('image');
    imageDisplay.style.backgroundImage = '';
    imageDisplay.innerHTML = 'Hover over an image below to display here.';
}


