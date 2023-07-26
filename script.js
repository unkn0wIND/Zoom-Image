let zoom = document.querySelector('.zoom');
let imgZoom = document.getElementById('imgZoom');

// Ajouter un évenement quand la souris bouge
zoom.addEventListener('mousemove', (event) => {
    imgZoom.style.opacity = 1;

    // Horinzontal
    let positionPx = event.x - zoom.getBoundingClientRect().left;
    let positionX = (positionPx / zoom.offsetWidth) * 100;
    imgZoom.style.setProperty('--zoom-x', positionX + '%');

    // Vertical
    let positionPy = event.y - zoom.getBoundingClientRect().top;
    let positionY = (positionPy / zoom.offsetHeight) * 100;
    imgZoom.style.setProperty('--zoom-y', positionY + '%');


});

// Ajouter un évenement quand la souris de retire
zoom.addEventListener('mouseout', () => {
     imgZoom.style.opacity = 0;
})

