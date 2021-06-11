const progress = document.querySelector('.progress-done');
// const text = document.querySelector('.progress.text');


setTimeout(() => {
    progress.style.width = progress.getAttribute('data-done') + "%";
    progress.style.opacity = 1;
}, 500);


