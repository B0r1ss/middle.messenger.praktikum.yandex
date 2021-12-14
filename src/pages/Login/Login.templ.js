const LoginTemplate = `
div.page
  section.register
    h2.register__title Рады видеть!
    form.register__form(name="formLogin")
      fieldset.register__fields
        #{loginInput}
        passwordInput
      span.register__submit-error
      button.register__submit-button(type="submit") Войти
    a.register__subtitle(href="../Register/Register.pug") Нет аккаунта?`

    export default LoginTemplate;
