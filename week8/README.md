### Вопросы 

1. Какие основные преимущества Bootstrap? 
Позволяет быстро верстать сайты, весьма доступен и понятен, низкий порог вхождения.
2. Как сделать желтую кнопку с помощью Bootstrap? 
`<button type="button" class="btn btn-warning">Желтая кнопка</button>`
3. Каким кодом можно сделать такую сетку?    
    ```
    <div class="row" style="min-height: 100px">
    <div class="col-sm-6">Gallery</div>
    <div class="col-sm-6">
    <div class="row h-25">
    <div class="col">Title</div>
    </div>
    <div class="row h-75">
    <div class="col">Buy Box</div>
    </div>
    </div>
    </div>
    <div class="row" style="min-height: 100px">
    <div class="col-12">Description</div>
    </div>
    <div class="row" style="min-height: 100px">
    <div class="col-12">Related</div>
    </div>
    ```
    
4. Каким компонентом Bootstrap можно задать такой элемент? 
Progressbar
    
5. Как убрать поля между колонками? при помощи дополнительного класса 
`.no-gutters`
6. Как сделать навигацию на Bootstrap? 
Контейнеру даем класс `nav`, дочерним элементам `nav-link`.
7. Что такое колонка auto-layout? 
С его помощью можно использовать больше 12 колонок и они будут переносится на другую строку.
8. Как сделать центрирование содержимого по горизонтали? А по вертикали? 
по горизонтали `<div class="row align-items-center">`, по вертикали `<div class="row justify-content-center"`>
9. Как задать адаптивность для колонки шириной в 50%, чтобы при ширине экрана меньше 768px она становилась шириной на весь экран?
`.col-md-6`
10. Что произойдет, если колонок станет больше 12?
Они перенесутся на следущую строку
11. Как задать иконку инстаграм через font awasome? 
`<i class="fa-brands fa-instagram"></i>`
12. Чем отличается container от container-fluid? 
Container с фиксированной шириной, однако может стать с шириной на весь экран на маленьких устройствах, а container-fluid с шириной во весь экран.