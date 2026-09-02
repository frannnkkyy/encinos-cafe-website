window.addEventListener('load', function () {
    var loader = document.getElementById('loader');

    if (!loader) {
        return;
    }

    loader.style.transition = 'opacity 1s ease-out';
    loader.style.opacity = '0';

    window.setTimeout(function () {
        loader.style.display = 'none';
    }, 1000);
});





    
