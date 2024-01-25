const progress = document.querySelector(".progress");
window.addEventListener('scroll', () => {
    const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (windowScroll / windowHeight) * 100;
    progress.style.width = scrollPercentage + '%';
});
