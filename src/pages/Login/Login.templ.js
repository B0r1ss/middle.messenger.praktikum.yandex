const LoginTemplate = `
div.page
  section.register
    h2.register__title Рады видеть!
    form.register__form
      fieldset.register__fields
        p.register__input-name E-mail
        input.register__input(
          type="email"
          name="login"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          required
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
      span.register__submit-error
      button.register__submit-button(type="submit") Войти
    a.register__subtitle(href="../Register/Register.pug") Нет аккаунта?`

    export default LoginTemplate;
