const LoginTemplate = `
div.page
  section.register
    h2.register__title Рады видеть!
    form.register__form(name="formLogin")
      .register__fields
        | !{loginInput}
        | !{passwordInput}
      span.register__submit-error
      | !{authorizeButton}
      a.register__subtitle(href="../Register/Register.pug") Нет аккаунта?`;

export default LoginTemplate;
