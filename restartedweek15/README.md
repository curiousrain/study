### Вопросы 💎

1. Сколько детей (дочерних DOM-узлов) у элемента <ul> в примере ниже:
    
    ```jsx
    <ul>
        <li>Привет</li>
        <li>Мир</li>
    </ul>
    ```
Два li
2. Есть такой элемент: `<input id= "input" value = "Привет">`. Какой вызов поменяет значение в нём?
	```js
	document.getElementById('input').value = "Пока"; 
	```
3. Сколько потомков будет у `<div>` после кода ниже?
    
    ```jsx
    <div id="div"></div>
    <p id="p">Привет</p>
    
    <script>
      div.appendChild(p);
      div.appendChild(p);
    </script>
    ```
Один потомок 
4. В каких случаях для элемента elem не верно `elem.firstChild == elem.lastChild`?
Когда у elem два или более потомков
5. Какое свойство задает класс элемента?
classList
6. Для чего используется запись: `setAttribute(name, value)`?
устанавливает значение атрибута
7. Назовите метод добавления текста к документу.
textContent
8. Как получить HTML-содержимое DOM-элемента elem?
innerHTML
9. Что такое объект события и какие у него могут быть свойства?
Объект event содержит информацию о произошедшем событии на странице. Свойства target, defaultPrevented, eventPhase  и т.д.
10. Что такое BOM и DOM?
BOM — это дополнительные объекты, предоставляемые браузером (окружением), чтобы работать со всем, кроме документа. Когда страница загружается, браузер создает DOM (документ) страницы.
11. Есть вот такая страница:
    
    ```html
    <!DOCTYPE HTML>
    <html>
    
    <body>
    	<form name="search">
    		<label>Поиск:
    			<input type="text" name="search"> </label>
    		<input type="submit" value="Search!"> </form>
    	<hr>
    	<form name="search-person">Поиск по посетителям:
    		<table id="age-table">
    			<tr>
    				<td>Возраст:</td>
    				<td id="age-list">
    					<label>
    						<input type="radio" name="age" value="young">до 18</label>
    					<label>
    						<input type="radio" name="age" value="mature">18-50</label>
    					<label>
    						<input type="radio" name="age" value="senior">старше 50</label>
    				</td>
    			</tr>
    			<tr>
    				<td>Дополнительно:</td>
    				<td>
    					<input type="text" name="info">
    					<input type="text" name="info">
    					<input type="text" name="info"> </td>
    			</tr>
    		</table>
    		<input type="button" value="Search!"> </form>
    </body>
    
    </html>
    ```
    
    Как найти в ней:
    
    1. Таблицу с `id="age-table"`

	```js 
	const age = document.querySelector('#age-table');
	```
    2. Все элементы `label` **внутри** этой таблицы (их три)
	```js
	age.querySelector('label');
	```
    3. Форму `form` с именем `name="search-person"`
	```js
	document.querySelector('form[name="search-person"]');
	```
12. Как сделать переход на другую страницу при клике на кнопку (без `<a href=...>`, только средствами JavaScript)?
	```jsx
	<button id="next-page">Далее</button>
	<script>
		document.getElementById("next-page").onclick = function () {
			location.href = "https://books-list.com";
		};
	</script>
	```