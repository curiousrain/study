### Вопросы

1. Что за единица измерения - `fr`? 
Единица измерения, рассчитываемая исходя из количества доступного пространства в grid-контейнере.
2. Как можно задать грид с 5 колонками шириной по 20%? Минимум 2 способа.
`grid-template-columns: 20% 20%  20%  20%  20%` `grid-template-columns: repeat (5, 20%)`
3. Самостоятельно разберитесь, что такое `auto-fill` и `auto-fit` ? 
`auto-fill` пытается поместить наибольшее количество повторяющихся элементов в колонку, сколько их может уместиться без переполнения, а также оставляет пустые места. `auto-fit` видет также как и `auto-fill`, только схлопывает пустые места до 0 и растягивает элементы в этой строке.
4. Как сделать такую табличку? Параметры: первая колонка шириной 100 пикселей, вторая 30%. Первая строчка высотой 200 пикселей, вторая строчка 100 пикселей.
grid-template-columns: 100px 30% 1fr; grid-template-rows: 200px 100px;
    
5. Как сделать такое выравнивание в грид-контейнере? 
justify-content: space-between;
    
6. Что такое и как задается *grid area*? 
Это сокращение свойство таких параметров как  `grid-row-start`, `grid-column-start`, `grid-row-end` и `grid-column-end`, которая определяет размер и расположение элемента сетки. задает как grid-area: начало строки / начало столбца / конец строки / конец столбца
7. Приведите пример использования `grid-template-areas` 
```
<section id="site">
  <header>Header</header>
  <nav>Navigation</nav>
  <aside>Aside</aside>
  <main>Main area</main>
  <footer>Footer</footer>
</section>

#site {
  display: grid;
  width: 100%;
  height: 250px;
  grid-template-areas: "head nav"
                       " aside main"
                       "foot  foot";
  grid-template-rows: 50px 1fr 30px;
  grid-template-columns: 150px 1fr;
}

#site > header {
  grid-area: head;
  background-color: #8ca0ff;
}

#site > nav {
  grid-area: nav;
  background-color: #ffa08c;
}

#site >aside {
  grid-area: aside;
  background-color: #bb99ff;
}

#site > main {
  grid-area: main;
  background-color: #ffff64;
}

#site > footer {
  grid-area: foot;
  background-color: #8cffa0;
}
```
8. Каким свойством можно задать такое поведение элементов?
`grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));`
    
9. Самостоятельно разберитесь, как работают именованные линии? Есть ли какие-то рекомендованные правила наименований? Если да, то какие? 
Именование строк полезно при создании адаптивного дизайна, в котором вы переопределяете саму сетку, а не положение содержимого внутри сетки. При выборе имени нужно избегать слов, которые могут использоваться в спецификации, что приведёт к путанице - например, `span`.  При необходимости можно присвоить строке более одного имени. Имена указываются внутри квадратных скобок через пробел. В дальнейшем возможно обращаться к этой строке по любому из этих имён.
10. Как проще всего задать 12 одинаковых по ширине колонок? 
`grid-template-columns: repeat (12, 1fr)`