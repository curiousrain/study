### Вопросы 💎

1. В чём разница между контролируемыми и неконтролируемыми компонентами?
у контролируемых компонентов подстановка значения происходит из react, а у неконтролируемых из DOM
2. Есть ли смысл использовать метод `shouldComponentUpdate()` в `PureComponent`?
Нет, так как в PureComponent автоматически идет проверка необходимости отрисовки компонента.
3. Будет ли перерисовываться данный компонент?   
    
    ```jsx
    class PureComponent extends React.PureComponent {
      state = { 
        item: {
    			count:0
    		},
      }
      
      handleClick= () =>  {
        const item = this.state.item;
        item.count = this.state.item.count ++ ;
        this.setState({item});
      }
      render() {
        return <h2>{this.state.item.count}</h2>
      }
    }
    ```
Нет, так как проверка была неглубокой
4. Что будет, если чекбоксу не передать свойство '`checked`'?
Элемент не будет считаться выбранным
5. В чём главное преимущество использования `PureComponent`?
Он автоматически проверяет нужно ли отрисововать компонент
6. Что будет, если компоненту `input` передать метод `onChange`, но не передать `value`? А что будет, если компоненту `input` передать `value`, но не передать метод `onChange`?
Внутри input просто не будет текста, а если не поставить onChange, то событие не сработает на измнение.
7. Как сделать из обычного `select` список с несколькими выбранными значениями (мультиселект)?
``<select multiple={true} value={['Б', 'В']}>``
8. Напишите пример валидации текстового поля на React, чтобы оно было не пустым.
9. Приведите пример простейшей формы логина на сторонних компонентах (Formic, Material или Bootstrap на ваш выбор).
```jsx
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BasicExample() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default BasicExample;
```