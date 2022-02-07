const RegisterTemplate = `
.page
  section.register 
    h2.register__title Регистрация
    form.register__form(name="formRegister")
      fieldset.register__fields
        | !{emailInput}
        | !{loginInput}
        | !{firstNameInput}
        | !{secondNameInput}
        | !{phoneNumberInput}
        | !{passwordInput}
        | !{rePasswordInput}
      span.register__submit-error
      | !{registerButton}
    a.register__subtitle(
        href="/authorize"
        target="_blank"
        rel="noopener noreferrer") Войти`;

export default RegisterTemplate;
