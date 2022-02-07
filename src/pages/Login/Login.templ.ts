const LoginTemplate: string = `
div.page
  section.register
    h2.register__title Рады видеть!
    form.register__form(name="formLogin")
      .register__fields
        | !{loginInput}
        | !{passwordInput}
      span.register__submit-error
      | !{authorizeButton}
      a.register__subtitle(
        href="/register"
        target="_blank"
        rel="noopener noreferrer") Нет аккаунта?`;

export default LoginTemplate;
