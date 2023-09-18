const RootQuastions = document.querySelector(".quastions");
RootQuastions.innerHTML = `
    <div class='qustions__title'>
        <p>Мы<span class='quastion__emodji'>🤍</span><span>Вас</span></p>
    </div>

    <div class="accord">

    <div class="accord__item">
        <label class="accord__title">Как заказать товар?<i class="fa-solid fa-arrow-right"></i></label>
        <div class="accord__text" id="text__1">
            Товары нашего магазина вы можете заказать либо напрямую из онлайн магазина,так и через менеджера в Tellegram.
        </div>
    </div>

    <div class="accord__item">
        <label class="accord__title">Как забрать?<i class="fa-solid fa-arrow-right"></i></label>
        <div class="accord__text">
            В данный момент у нас работает самовывоз,доставка курьером,отправка почтой России и СДЭК.Уточняйте у менеджера в Telegram.
        </div>
    </div>

    <div class="accord__item">
    <label class="accord__title">Оригенальная продукция?<i class="fa-solid fa-arrow-right"></i></label>
    <div class="accord__text">
        Наш магазин реализует лишь только качественную оригинальную продукцию.Мы не реализуем реплики жидкостей и одноразовых сигарет.
    </div>
</div>

</div> 
`;
const accordItems = document.querySelectorAll(".accord__item");
accordItems.forEach((item) => {
  const title = item.querySelector(".accord__title");
  title.addEventListener("click", () => {
    const text = item.querySelector(".accord__text");
    text.classList.toggle("active");
    const QuastionArrow = item.querySelector(".fa-arrow-right");
    QuastionArrow.classList.toggle("active");
  });
});
