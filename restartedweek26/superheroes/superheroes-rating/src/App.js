import './App.css';
import superheroes from './superhero-info.json';
import Card from './Card';

function App() {
  return (
    <div className="App">
      <h1 className="title">Выбери своего героя!</h1>
      <div className="superheroes-list">
        {
          superheroes.map(e => <Card key={e.name} superhero={e} ></Card>)
        }
      </div>
    </div>

  );
}

export default App;
