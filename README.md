# Веб-приложение «Messenger Pigeon»

## Инструкция по развертыванию:
- клонируйте репозиторий `https://github.com/B0r1ss/middle.messenger.praktikum.yandex.git`
- уcтановите зависимости npm `npm install`

- запуск проекта в режиме разработчика `npm run dev`
- сборка проекта `npm run build`
- сборка проекта и запуск локального сервера `npm run start`
- запуск линтеров `npm run lint`
- запуск тестов `npm run test`

## Netlify

- https://stupefied-nobel-c31678.netlify.app/ -авторизация
- https://stupefied-nobel-c31678.netlify.app/sign-up - регистрация
- https://stupefied-nobel-c31678.netlify.app/settings - профиль
- https://stupefied-nobel-c31678.netlify.app/messenger - страница чатов
- https://stupefied-nobel-c31678.netlify.app/500 - ошибка сервера
- https://stupefied-nobel-c31678.netlify.app/any-other-url - 404

## Процесс
### Спринт №1
- макеты прототипов экрана были взяты из https://www.figma.com/file/24EUnEHGEDNLdOcxg7ULwV/Chat?node-id=0%3A1
- подключен Parcel
- в качестве препроцессора выбран SCSS
- в качестве шаблонизатора выбран Pug
- реализованы макеты страниц с помощью шаблонизатора
- настроено dev-окружение с помощью NodeJS и Express для раздачи статики 
- настроена раздача статики на Netlify
