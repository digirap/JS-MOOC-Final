document.addEventListener("DOMContentLoaded", function() {
    addTabindexToImages();
    const images = document.querySelectorAll('.preview'); 
    
    for (let img of images) {
        img.addEventListener('load', function() { 
            console.log(`Image loaded: ${img.alt}`); 
        });
    }
    
    //initializeImageDisplay();

});

function addTabindexToImages() {
    const images = document.querySelectorAll('.preview');
    for (let img of images) {
        img.setAttribute('tabindex', '0');
    }
}

/* function initializeImageDisplay() { 
    const imageDisplay = document.getElementById('image'); 
    imageDisplay.style.backgroundImage = ''; 
    imageDisplay.innerHTML = 'Hover over an image below to display here.'; 
    console.log('Page loaded: Default message displayed');
}
 */
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


