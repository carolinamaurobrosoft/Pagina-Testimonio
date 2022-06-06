import './App.css';
//importamos nuestro componenete
import Testimony from './components/Testimony.js';

function App() {
  return (
    <div className="App">
      <div className='main-container'>
      <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp: </h1>
      </div>
      <Testimony />
    </div>
  );
}

export default App;
