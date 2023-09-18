const RootAbout = document.querySelector(".about");
RootAbout.innerHTML = `
    <div class='about__title'>
        <h1>
            <span class='title__span'>П</span>
            <span class='title__span'>о</span>
            <span class='title__span'>д</span>
            <span class='title__span'>р</span>
            <span class='title__span'>о</span>
            <span class='title__span'>б</span>
            <span class='title__span'>н</span>
            <span class='title__span'>е</span>
            <span class='title__span'>е</span>
        </h1>
    </div>
    <div class='about__box'>
        <div class="card wow bounceInLeft" data-wow-duration="1.5s" data-wow-delay="0.5s">
            <div class="icom">
                <ion-icon name="diamond-outline"></ion-icon>
            </div>
            <div class="content">
                <h2>Удобство</h2>
                    <p>
                        Мы всегда пытаемся добитсья максимальной удобности проведения покупок для наших покупателей.
                    </p>
            </div>
        </div>

        <div class="card">
        <div class="icom">
            <ion-icon name="diamond-outline"></ion-icon>
        </div>
        <div class="content">
            <h2>Качество</h2>
                <p>
                В нашем магазине вы покупайте только качественный и оригинальный продукт от производителей.
                </p>
        </div>
    </div>

    <div class="card wow bounceInRight" data-wow-duration="1.5s" data-wow-delay="0.5s">
    <div class="icom">
        <ion-icon name="diamond-outline"></ion-icon>
    </div>
    <div class="content">
        <h2>Надежность</h2>
            <p>
                Вы всегда можете задать вопрос о любом продукте и мы всегда вам ответим и помиожем.
            </p>
    </div>
</div>
    </div>
`;
new WOW().init();

const TitleAbout = document.querySelectorAll(".title__span");
function TitleActive() {
  TitleAbout.forEach((TitleAbout) => {
    const blockPosition = TitleAbout.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (blockPosition < screenHeight * 0.75) {
      TitleAbout.classList.add("active");
    }
  });
}
TitleActive();
window.addEventListener("scroll", TitleActive);
