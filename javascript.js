const audrey = document.getElementById("audrey")

window.addEventListener('scroll', function (e) {

    if (window.scrollY > 50) {
        let width = window.scrollY / 3;
        audrey.style.width = `${width}px`;
    }

    if (window.scrollY > 100) {
        let height = window.scrollY / 4;
        audrey.style.height = `${height}px`;
    }
})
