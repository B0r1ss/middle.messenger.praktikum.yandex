const MainPageTemplate = `
mixin message(img, text, time)
  li.chart__message
    if img
      img.chart__img(src="../..sefs/../avatar.svg" alt="Картинка из сообщения")
    p.chart__text= text
    span.chart__time= time

mixin contact(name, message, time, count)
  li.sidebar__listItem
    img.sidebar__userImage(src="../images/avatar.svg", alt="Аватар автора")
    .sidebar__userSection
      h4.sidebar__userName= name
      p.sidebar__userMassage= message
    .sidebar__massageAttr
      p.siadebar__time= time
      if count
        .sidebar__countNewMessage= count

main.content
  aside.sidebar
    a.sidebar__profileLink(href="../profile") Профиль
      span.material-icons.sidebar__profileLink_icon chevron_right
    input.sidebar__searchInput(type="text" placeholder="Поиск" name="search")
    ul.sidebar__list
      +contact("Андрей", "Изображение", "10:22", "2")
      +contact("Петя", "Я тут", "10:25", "3")
      +contact("Петя", "Я тут", "10:25", "1")
      +contact("Петя", "Я тут", "10:25", "2")
      +contact("Петя", "Я тут", "10:25", "3")
      +contact("Петя", "Я тут", "10:25", "3")
      +contact("Петя", "Я тут", "10:25", "5")
      +contact("Петя", "Я тут", "10:25",)
      +contact("Петя", "Я тут", "10:25",)
      +contact("Петя", "Я тут", "10:25",)
      +contact("Петя", "Я тут", "10:25",)
      +contact("Саша", "Я тут", "10:25",)
      +contact("Петя", "Я тут", "10:25",)
      +contact("Петя", "Я тут", "10:25",)
      +contact("Саша", "Я тут", "10:25",)
      +contact("Саша", "Я тут", "10:25",)
      +contact("Саша", "Я тут", "Ср",)
      +contact("Саша", "Я тут", "Чт",)
      +contact("Саша", "Я тут", "10:25",)
  .chart
    //- h3.chart_empty Выберите чат чтобы отправить сообщение
    .chart__header
      img.chart__avatar(src="avatar.svg", alt="Мой аватар")
      h4.chart__username Boriss
      button.chart__buttonMore(type="button")
    ul.chart__meetingRoom
      h4.chart__massDate 10 ноября
      +message("./images/mess-pic.png", "", "10:55")
      +message("", "Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель", "10:55")
      +message("", "Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель", "10:55")
    .chart__footer
      button.chart__addButton(type="button")
      input.chart__inputMessage(type="text" name="message")
      button.chart__sendButton(type="button")
`

export default MainPageTemplate
