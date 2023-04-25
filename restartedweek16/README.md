### Вопросы 💎

1. Какие кавычки можно использовать для создания строк в JS и в чём разница между ними?
между ними? одинарные, обратные и двойные. одинарные и двойные могут быть могут быть в составе друг друга, до тех пор, пока они не соответствуют кавычка вокруг строки. в обратные можно вставлять произвольные выражения, обернув их в ${}.
2. Какими методами можно найти подстроку в строке? Приведите пример.
    ```js
    indexOf(), lastIndexOf(), search.
    const lysosome = "Лизосомы — это органеллы диаметром 0,2-2,0 мкм, окруженные простой мембраной, способные принимать самые разные формы. Обычно на клетку приходится несколько сотен лизосом. Функция лизосом заключается в деградации клеточных компонентов."
    const organelle = lysosome.indexOf("Лизосом");
    const cell = lysosome.lastIndexOf("лизосом");
    const degradation = lysosome.search ("лизосом");
    ```
3. Самостоятельно разберитесь, зачем нужен специальный символ \n?
это "символ перевода стороки", можно использовать для создания многострочных строк с помощью одинарных и двойных кавычек
4. Напишите код, который делает первый символ заглавным. Например, `"настя"` ⇒ `"Настя"`
    ```js
    const name = "настя";
    const firstLetter = name.substring (0,1).toUpperCase();
    const other = name.substring (1);
    const full = firstLetter + other;
    ```
5. Какой из вариантов округления делает это по математическим правилам?
Math.round().
6. Как сгенерировать случайное число от 1 до 100? 
    ```js
    let numberRandom = Math.round((Math.random()*99)+1);
    ```
7. Самостоятельно разберитесь, зачем нужен специальный символ `\n`?
это "символ перевода стороки", можно использовать для создания многострочных строк с помощью одинарных и двойных кавычек
8. Что выведет в консоль?

    ```jsx
    const x="Солнце";

    console.log("The string length is " + x.length)
    ```
The string length is 6
9. Каким будет результат в представленном ниже фрагменте кода?

    ```jsx
    const upperText="ВелоСипед" ;

    document.write(upperText.toUpperCase())
    ```
ВЕЛОСИПЕД
10. Каким будет результат в приведенном ниже фрагменте кода?

    ```jsx
    let str = "розы такие розы"; 

    str.replace("розы","красивые")
    ```
красивые такие розы
11. Что выведет в консоль?
    ```jsx
    const str = "abcdefghij";

    console.log("(2,3):" + str.substr(2,3));
    ```
(2,3):cde