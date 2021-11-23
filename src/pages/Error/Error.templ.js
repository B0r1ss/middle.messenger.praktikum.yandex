const ErrorTemplate = `.page
  .container
    h1.error__digit #{code}
    h2.error__text #{message}
    a.error__backRef(href="../MainPage/index.pug") назад к чатам`

export default ErrorTemplate
