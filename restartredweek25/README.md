### Вопросы 💎

1. Обязательно ли скачивать и устанавливать какие-то библиотеки для начала работы с React?
Нет, для этого достаточно создать js-файл, в котором будет содержаться react-компонент, добавить в существующий html-файл script-теги на созданный js-файл, а также на url react development'ы. 
2. Перечислите плюсы и минусы SPA приложений?
Плюсы: поддержка JS, скорость загрузки, доп.разработка при помощи фреймворков и готовых решений, а также возможность задействовать большое количество данных
Минусы: Невозможность использовать оффлайн, не работает у пользователей, которые отключили поддержку JS, трудности с SEO
3. Как создать React-приложение?
create-react-app firstapp
4. Является ли React фреймворком? А какие ещё есть веб-фронтенд фреймворки?
Нет, это библиотека. 
Vue, Angular, Ember, Next
5. Какой командой можно добавить библиотеку или компонент в свой файл?
npm install react react-dom
npm install -g create-react-app
6. Найдите три внешних React-компонента, которые вам могут пригодиться в будущем (*например, react-color, react-google-maps и пр.*)
react-burger-menu, react-slick, react-dates
7. Какой основной файл SPA-проекта, где мы делаем изменения?
src/App.js
8. Зачем нужна папка build и какой командой мы генерируем её содержимое?
результат сборки web-pack,  npm build