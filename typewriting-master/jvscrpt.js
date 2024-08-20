const images = [
    "images/landdriving.jpg",
    "images/ORRM7618.jpg",
    "images/new4.jpg",
    "images/B0B3718-R1-01-33A.jpg",
    "images/ORRM8435.jpg",
    "images/ORRM0941.jpg",
    "images/ORRM9738.jpg",
    "images/B0B3718-R1-16-16A.jpg",
    "images/new1.jpg",
    "images/Ramon5248.jpg",
    "images/portfolio1.jpg",
    "images/DSC_2900.jpg",
    "images/Ramon5165.jpg",
    "images/prevworkbk.jpg",
    "images/portfolio3.jpg",
    "images/ORRM0041.jpg",
    "images/new5.jpg",
    "images/ORRM9671.jpg",
    "images/ORRM3770.jpg",
    "images/ORRM6266.jpg",
    "images/ORRM0311.jpg",
    "images/DSC_3849.jpg",
    "images/Ramon5521.jpg",
    "images/ORRM0598.jpg",
    "images/Ramon9818.jpg",
    "images/Ramon4.jpg",
    "images/portfolio4.jpg",
    "images/ORRM9746.jpg",
    "images/portfolio2.jpg",
    "images/ORRM9069.jpg",
    "images/DSC_3066.jpg",
    "images/new3.jpg",
    "images/ORRM1488-2.jpg",
    "images/ORRM1347.jpg",
    "images/ORRM3918.jpg",
    "images/Ramon6077.jpg",
    "images/Ramon89580019.jpg",
    "images/ORRM6797.jpg",
    "images/Ramon1392.jpg"
];

let currentIndex = 0;

function openFullscreen(img, index) {
    currentIndex = index;
    const fullscreenContainer = document.getElementById('fullscreenContainer');
    const fullscreenImage = document.getElementById('fullscreenImage');
    fullscreenImage.src = img.src;
    fullscreenContainer.style.display = 'flex';
    document.addEventListener('keydown', handleKeydown);
}

function closeFullscreen(event) {
    if (event) event.stopPropagation();
    const fullscreenContainer = document.getElementById('fullscreenContainer');
    fullscreenContainer.style.display = 'none';
    document.removeEventListener('keydown', handleKeydown);
}

function changeImage(event, direction) {
    event.stopPropagation();
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    const fullscreenImage = document.getElementById('fullscreenImage');
    fullscreenImage.src = images[currentIndex];
}

function handleKeydown(event) {
    if (event.key === 'ArrowLeft') {
        changeImage(event, -1);
    } else if (event.key === 'ArrowRight') {
        changeImage(event, 1);
    } else if (event.key === 'Escape') {
        closeFullscreen(event);
    }
}
