const formTempl = `
p.register__input-name #{label}
input.register__input(
  type=type
  name=name
  action="#"
)
span.register__error #{message}
`;
export {formTempl};