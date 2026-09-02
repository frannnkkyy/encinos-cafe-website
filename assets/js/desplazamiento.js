var menuSlider = document.querySelector('.menu-slider');
var previousButton = document.querySelector('.prev-button');
var nextButton = document.querySelector('.next-button');

if (menuSlider && previousButton && nextButton) {
    previousButton.addEventListener('click', function () {
        menuSlider.scrollBy({ left: -200, behavior: 'smooth' });
    });

    nextButton.addEventListener('click', function () {
        menuSlider.scrollBy({ left: 200, behavior: 'smooth' });
    });
}
