import './App.css';
import Card from './plan-card';
import plan from './plan';

function App() {
  return (
    <div className="plan">
      {plan.map(e => <Card key={e.name} plan={e}></Card>)}
    </div>
  );
}

export default App;
