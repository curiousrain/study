### Вопросы 💎

1. Опишите разницу между синхронными и асинхронными функциями.
В синхронных функциях действия происходят в том порядке, в каком их написали,а выполнение асинхронных функций не блокирует поток, в котором он выполняется
2. Сравните подходы работы с асинхронным кодом: *сallbacks* vs *promises* vs *async / await*
    1.Коллбеки являются более традиционным подходом работы и у них есть огромный минус - ад коллбеков
    2.Промисы позволяют описывать код, который нужно выполнить не сразу, а только когда произойдёт какое-то событие. Для них обязательно наличие then () и коллбеков в коде.
    3. Async/await - является более удобным подходом, поскольку внутри асинхронных функций можно вызывать другие асинхронные функции, без каких-либо then() или колбэков, с помощью ключевого слова await
3. Что такое цикл событий (event loop) в JS ?
Цикл событий это как "список событий", которые обрабатываются в браузере в определенном порядке и времени.
4. Какая разница между «стеком вызовов» (call stack) и «очередью задач» (task queue)?
В стеке вызовов оказываются все вызовы функций, в очереди задач оказываются любой код js.
5. Какие версии HTTP-протокола вам известны?
1.1, 2 и 3
6. Какие знаете коды ответа (состояния) HTTP?
200, 500, 404
7. Как клиент взаимодействует с сервером?
Клиент отправляет запрос, сервер возвращает ответ
8. Самостоятельно разберитесь, что такое Cross-Origin Resource Sharing? Как устранить проблемы с CORS?
Это механизм, основанный на HTTP-заголовке, который позволяет серверу указывать любое происхождение (домен, схему или порт), кроме своего собственного, из которого браузер должен разрешать загрузку ресурсов. Через Access-Control-Allow-Origin/Access-Control-Allow-Credentials
9. Самостоятельно разберитесь, что такое REST?
REST это архитектурный стиль, который позволяет отправлять запросы в формате JSON через стандарные HTTP-методы.
10. Как посмотреть заголовки запроса к странице или API?
F12, вкладка Network
11. Что можно писать в параметре заголовков `Content-Type` ?
application/x-www-form-urlencoded, multipart/form-data,  text/plain, application/json (чтобы послать в теле запроса данные в JSON, нужно передать в заголовках тип application/json)
12. Давайте отправим информацию о собачке в API по адресу `localhost/pets/add` 
    
    ```json
    JSON с информацией о собаке:
    {
    		"breed": "Beagle",
    		"size": "large",
    		"color": "orange",
    		"age": 6
    	}
    ```

    Как будет выглядеть `fetch` в таком случае?
    
    ```jsx
    fetch ('localhost/pets/add', {
        method:POST;
        body: JSON.stringify({
            breed: "Beagle",
    		size: "large",
    		color: "orange",
    		age: 6
        })
    });
    ```