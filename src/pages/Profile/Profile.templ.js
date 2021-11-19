const Profile = `.page
      aside.profile__back
        a.profile__backButton(href="../MainPage/index.pug")
      section.register
        button.profile__avatar(type="button")
        h2.profile__title Регистрация
        form.register__form
          fieldset.register__fields
            p.register__input-name Почта
            input.register__input(
              type="email"
              name="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              required
              placeholder="pochta@pochta.com"
              disabled
            )
            span.register__error

            p.register__input-name Логин
            input.register__input(
              type="text"
              name="login"
              required
              minLength="2"
              placeholder="Mylogin"
              disabled
            )
            span.register__error

            p.register__input-name Имя
            input.register__input(
              type="text"
              name="name"
              required
              placeholder="Иван"
              disabled

            )
            span.register__error

            p.register__input-name Фамилия
            input.register__input(
              type="text"
              name="lastname"
              required
              placeholder="Иванов"
              disabled
            )
            span.register__error

            p.register__input-name Имя в чате
            input.register__input(
              type="text"
              name="display_name"
              required
              placeholder="Иван"
              disabled
            )
            span.register__error

            p.register__input-name Телефон
            input.register__input(
              type="tel"
              name="phone"
              required
              placeholder="+79111111111"
              disabled 
            )
            span.register__error

            p.register__input-name Пароль
            input.register__input(
              type="password"
              name="password"
              required
              minLength="8"
              disabled 
            )
            span.register__error

          span.register__submit-error
          button.register__submit-button(type="submit") Изменить данные
          button.register__submit-button(type="submit") Изменить пароль 
          a.register__subtitle(href="#") Выйти`

export default Profile