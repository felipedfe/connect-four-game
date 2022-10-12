import Collum from './components/Collum';
import './App.css';

function App() {
  const collumsQuantity = [...Array(7)];

  const printGameBoard = () => {
    return collumsQuantity.map((item, index) => <Collum index={index}/>)
  };

  return <main>
    <h1>Connect Four</h1>
    <div className="gameboard">
      {printGameBoard()}
    </div>
  </main>
}

export default App;
