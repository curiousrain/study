### Вопросы 💎

1. Как создать дату 24 января 2021 года, 22 часа 51 минута? Временная зона — местная.
    ``jsx
    let date = new Date (2021, 0, 24, 22, 51);
    console.log(date);
    ```
2. Для чего предназначен метод `getDay()`?
Вернёт день недели от 0 (воскресенье) до 6 (суббота).
3. Как посчитать, сколько секунд осталось до завтра?
    ```jsx
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0,0,0,0);
    (tomorrow - today)/1000;
    ```
4. Для чего предназначен метод `getDate()`?
для получения день месяца, от 1 до 31
5. Что выведет `console.log(d)` ?
    
    ```jsx
    let d = new Date(2016, 2, 9);
    
    console.log(d);
    ```
    Wed Mar 09 2016 00:00:00 GMT+0600 
6. Что делает `getTimezoneOffset()` ?
возвращает разницу в минутах между местным часовым поясом и UTC

7. Что выведет консоль?
    
    ```jsx
    let date = new Date();
    
    console.log(date.getUTCHours());
    ```
12
8. Для чего предназначен метод `getHours()` объекта Date?
Чтобы получить часы
9. Что выведет консоль?
    
    ```jsx
    let d = new Date(); 
    let y =  d.getFullYear();
    console.log(y);
    ```
2023 
10. В чём ошибка в коде?
    ```jsx
    let y = new Date(); 
    let d = y.getDate();
    console.log(d);
    ```
ошибки нет