### Вопросы 

1. Какие есть способы объявления функций? 
**function declaration, function expression, стрелочные**
2. Приведите примеры вызова одной и той же функции всеми известными вам способами.
	```js
	1. Name()
	2. Onclick = "Name()"
	3.(function(a, b) {
	console.log(a + b);})(1, 1);
	```
3. В чем разница между тестированием и отладкой (дебаггингом)? А что такое логирование?
**Тестирование это просто взаимодействие с сайтом и проверка его работы. Откладка же является поиском и исправлением ошибок, в котором применяется инструменты из вкладки sources. 
Логирование вывод информации с помощью функции console.log.**
4. В чем разница между Function Expression и Function Declaration?
**Function Expression создаётся, когда выполнение доходит до него, и затем уже может использоваться. Function Declaration можно использовать во всем скрипте (или блоке кода, если функция объявлена в блоке).**
5. Что делает функция `console.log()`?
Если нужно что-то вывести в консоль из кода, применяется функция console.log
6. Что такое BOM и DOM?
 ***DOM* – объектная модель документа, которая представляет все содержимое страницы в виде объектов, которые можно менять. *BOM* – это дополнительные объекты, предоставляемые браузером (окружением), чтобы работать со всем, кроме документа.**
7. Есть вот такая страница:
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
    
    Как найти в ней?…
    
    1. Таблицу с `id="age-table"`
    2. Все элементы `label` внутри этой таблицы (их три)
    3. Форму `form` с именем `name="search"`

	```js
	1. let table = document.getElementById("age-table");
	2. table.getElementsByTagName ("label");
	3. document.querySelector("form[name='search']")

	```
8. Как сделать переход на другую страницу при клике на кнопку (без `<a href=...>`, только средствами JavaScript)?
	```js
	window.location.href="sample.html";
	```
9. Как можно обнулить (очистить) значение внутри input?
	``` js
	input.value = null;
	```
10. Как будет выглядеть ваша функция приветствия из прошлого домашнего задания, если ее переписать в стрелочном формате?
	```js
	let ask = () => {
		let pleasantry = prompt('Привет! Как тебя зовут?');
		alert(`Привет, ${pleasantry}!`);
	}
	```