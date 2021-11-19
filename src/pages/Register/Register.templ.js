const Register = `
.page
  section.register 
    h2.register__title Регистрация
    form.register__form
      fieldset.register__fields
        p.register__input-name Почта
        input.register__input(
          type="email"
          name="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          required
          placeholder="pochta@pochta.com"
        )
        span.register__error

        p.register__input-name Логин
        input.register__input(
          type="text"
          name="login"
          required
          minLength="2"
          placeholder="Mylogin"
        )
        span.register__error

        p.register__input-name Имя
        input.register__input(
          type="text"
          name="first_name"
          required
          placeholder="Иван"

        )
        span.register__error

        p.register__input-name Фамилия
        input.register__input(
          type="text"
          name="second_name"
          required
          placeholder="Иванов"
        )
        span.register__error

        p.register__input-name Телефон
        input.register__input(
          type="tel"
          name="phone"
          required
          placeholder="+79111111111"
        )
        span.register__error

        p.register__input-name Пароль
        input.register__input(
          type="password"
          name="password"
          required
          minLength="8"
        )
        span.register__error

        p.register__input-name Пароль (еще раз)
        input.register__input(
          type="password"
          name="passwordTw"
          required
          minLength="8"
        )
        span.register__error

      span.register__submit-error
      button.register__submit-button(type="submit") Зарегистрироваться 
    a.register__subtitle(href="../Login/Login.pug") Войти`

    export default Register