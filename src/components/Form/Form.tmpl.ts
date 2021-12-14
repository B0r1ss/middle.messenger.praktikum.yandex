const formTmpl = `
    .form
      p.register__input-name E-mail
      input.register__input(
        type="email"
        name="login"
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        required
      )
      span.register__error
`;
export {formTmpl};