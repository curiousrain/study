### Вопросы 💎

1. Что называется массивом?
Структура данных, которая может хранить не одно, а несколько значений.
2. С какого порядкового номера начинаются массивы?
С нуля.
3. Сколько значений может иметь массив?
Сколько угодно. Но если точнее, то 2^32 - 1 
4. Как можно получить значение текстового поля из данной формы? (Форма одна)
    
    ```jsx
    <form action="start.php" method="post" name="fld">
    	<input type="text" name="field" value="Text field">
    	<input type="submit" value="Старт" name="btn">
    </form>
    
    ```
    
5. Какой результат работы данного скрипта?
    
    ```jsx
    let mas = new Array(2);
    mas[3] = 5;
    console.log(mas[3]);
    ```
5
6. Какой результат работы данного скрипта?
    
    ```jsx
    let mas = new Array(2);
    mas[3] = 5;
    console.log(mas3);
    ```
выведет ошибку Uncaught ReferenceError: mas3 is not defined
7. Что делает строка let mas = new Array()?
создает массив без элементов
8. Может ли массив состоять из элементов разных типов?
Да
9. Укажите длину массива после исполнения следующего кода:
    
    ```jsx
    let a = new Array(2);
    a[1] = null;
    ```
console.log(a.length);
2
10. Что выведет консоль?
    
    ```jsx
    const students = [ “Lena", “Olya", "Ylia", "Roma" ,  "Vova" ];
    console.log(students[3]);
    ```
Выведет ошибку Uncaught SyntaxError: Invalid or unexpected token
11. Что выведет третья строка?

    ```jsx
    1. const fruits = [ "Груша", "Яблоко", "Лимон", "Ананас",];

    2. console.log(fruits.shift()); 

    3. console.log(fruits);
    ```
Яблоко, Лимон, Ананас    